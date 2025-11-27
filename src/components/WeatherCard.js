import React from 'react';

const formatDate = (timestamp, timezone) => {
  if (!timestamp) return 'N/A';
  const effective =
    typeof timezone === 'number' ? timestamp * 1000 + timezone * 1000 : timestamp * 1000;
  const date = new Date(effective);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });
};

const formatDayName = (timestamp, timezone) => {
  if (!timestamp) return 'N/A';
  const effective =
    typeof timezone === 'number' ? timestamp * 1000 + timezone * 1000 : timestamp * 1000;
  const date = new Date(effective);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};

const buildIconUrl = (iconCode) =>
  iconCode ? `https://openweathermap.org/img/wn/${iconCode}@4x.png` : '';

const getWeatherEmoji = (main) => {
  const weatherMap = {
    Clear: '☀️',
    Clouds: '☁️',
    Rain: '🌧️',
    Drizzle: '🌦️',
    Thunderstorm: '⛈️',
    Snow: '❄️',
    Mist: '🌫️',
    Fog: '🌫️',
  };
  return weatherMap[main] || '☀️';
};

function WeatherCard({ weather }) {
  if (!weather) {
    return null;
  }

  const { main, weather: weatherArr, wind, visibility, timezone, dt, clouds } = weather;
  const currentWeather = weatherArr?.[0] ?? {};
  const iconUrl = buildIconUrl(currentWeather.icon);

  // Generate mock weekly forecast (since we only have current weather)
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const mockForecast = days.map((day, index) => ({
    day,
    icon: getWeatherEmoji(currentWeather.main),
    temp: main ? Math.round(main.temp) + (index % 2 === 0 ? 2 : -2) : 20,
  }));

  // Calculate predictability based on cloud cover and visibility
  const predictability = main && clouds
    ? Math.round(100 - (clouds.all || 0) * 0.3 - (visibility ? (10000 - visibility) / 100 : 0))
    : 71;

  return (
    <div className="weather-app-content">
      <div className="current-day-card">
        <div>
          <div className="day">{formatDayName(dt, timezone)}</div>
          <div className="date-location">
            {formatDate(dt, timezone)} <br />
            📍 {weather.name}
          </div>
        </div>

        <div>
          {iconUrl && (
            <img
              src={iconUrl}
              alt={currentWeather.description}
              style={{
                width: '120px',
                height: '120px',
                marginBottom: '20px',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
                position: 'relative',
                zIndex: 1,
              }}
            />
          )}
          <div className="temp-large">{main ? Math.round(main.temp) : '—'}°C</div>
          <div className="condition">{currentWeather.description || 'Clear'}</div>
        </div>
      </div>

      <div className="forecast-details">
        <h2 className="title">Weather Forecast</h2>

        <div className="details-list">
          <div className="detail-item">
            <span className="key">Predictability</span>
            <span className="value">{predictability}%</span>
          </div>
          <div className="detail-item">
            <span className="key">Humidity</span>
            <span className="value">{main ? `${main.humidity}%` : '—'}</span>
          </div>
          <div className="detail-item">
            <span className="key">Wind</span>
            <span className="value">{wind ? `${Math.round(wind.speed * 3.6)} km/h` : '—'}</span>
          </div>
          <div className="detail-item">
            <span className="key">Air Pressure</span>
            <span className="value">{main ? `${main.pressure} mb` : '—'}</span>
          </div>
          <div className="detail-item">
            <span className="key">Max Temp</span>
            <span className="value">{main ? `${Math.round(main.temp_max)}°C` : '—'}</span>
          </div>
          <div className="detail-item">
            <span className="key">Min Temp</span>
            <span className="value">{main ? `${Math.round(main.temp_min)}°C` : '—'}</span>
          </div>
        </div>

        <div className="weekly-forecast">
          {mockForecast.map((forecast, index) => (
            <div key={index} className="day-forecast">
              <div className="icon">{forecast.icon}</div>
              <div className="day-name">{forecast.day}</div>
              <div className="temp">{forecast.temp}°</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
