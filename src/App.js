import { useCallback, useEffect, useState } from 'react';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';
import './App.css';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const DEFAULT_CITY = 'Toronto';
const API_KEY = '50fe9539bf54071cb26d2e3006e32266';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY || API_KEY;

  // Get weather theme based on weather condition
  const getWeatherTheme = () => {
    if (!weatherData?.weather?.[0]?.main) return 'default';
    const weatherMain = weatherData.weather[0].main.toLowerCase();
    
    if (weatherMain === 'clear') return 'clear';
    if (weatherMain === 'clouds') return 'clouds';
    if (weatherMain === 'rain' || weatherMain === 'drizzle') return 'rain';
    if (weatherMain === 'thunderstorm') return 'thunderstorm';
    if (weatherMain === 'snow') return 'snow';
    if (weatherMain === 'mist' || weatherMain === 'fog') return 'mist';
    return 'default';
  };

  const weatherTheme = getWeatherTheme();

  // Update body class for theme
  useEffect(() => {
    document.body.className = `${weatherTheme}-theme`;
    return () => {
      document.body.className = '';
    };
  }, [weatherTheme]);

  const fetchWeather = useCallback(
    async (location) => {
      if (!apiKey) {
        setError('API key is missing. Please check your configuration.');
        setStatus('error');
        return;
      }

      setStatus('loading');
      setError('');
      try {
        const response = await fetch(
          `${BASE_URL}?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`
        );
        const payload = await response.json();

        if (!response.ok) {
          throw new Error(payload.message ?? 'Unable to fetch weather data');
        }

        setWeatherData(payload);
        setStatus('success');
      } catch (err) {
        setWeatherData(null);
        setStatus('error');
        setError(err.message ?? 'Something went wrong');
      }
    },
    [apiKey]
  );

  useEffect(() => {
    fetchWeather(DEFAULT_CITY);
  }, [fetchWeather]);

  const handleSearch = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) {
      return;
    }
    fetchWeather(trimmed);
    setInputValue('');
  };

  return (
    <div className={`app-shell app-shell--${weatherTheme}`}>
      <div className={`weather-app weather-app--${weatherTheme}`}>
        {status === 'loading' && (
          <div className="status-message">Fetching weather data…</div>
        )}

        {status === 'error' && error && (
          <div className="status-message status-message--error">{error}</div>
        )}

        {weatherData ? (
          <>
            <SearchForm
              value={inputValue}
              onChange={setInputValue}
              onSearch={handleSearch}
              disabled={status === 'loading'}
            />
            <WeatherCard weather={weatherData} />
          </>
        ) : (
          <SearchForm
            value={inputValue}
            onChange={setInputValue}
            onSearch={handleSearch}
            disabled={status === 'loading'}
          />
        )}
      </div>
    </div>
  );
}

export default App;
