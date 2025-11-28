# Weather Forecast App

A modern React application that displays real-time weather information for any city using the OpenWeatherMap API. Features a sleek dark theme UI with cyan/coral accents, responsive design, and real-time weather data visualization.

## Project Description

This weather forecast app allows users to search for any city worldwide and view comprehensive weather information including temperature, humidity, wind speed, air pressure, visibility, and weekly forecasts. Built with React hooks (useState, useEffect, useCallback) and modern CSS for a professional user experience.

## API Used

**OpenWeatherMap Current Weather API**
- **Endpoint:** `https://api.openweathermap.org/data/2.5/weather`
- **API Key:** Configured in `.env` file
- **Documentation:** https://openweathermap.org/current
- **Response Format:** JSON
- **Units:** Metric (Celsius)



<img width="1430" height="855" alt="Screenshot 2025-11-27 185216" src="https://github.com/user-attachments/assets/e4b9b1a3-7060-4665-a1af-5f6a7185e420" />
<img width="1436" height="861" alt="Screenshot 2025-11-27 185141" src="https://github.com/user-attachments/assets/a8ef4eb8-1f7e-4263-9d5c-a1ab6e4fdbfe" />
<img width="1331" height="870" alt="Screenshot 2025-11-27 185113" src="https://github.com/user-attachments/assets/e832189e-d8aa-43d0-afe2-fa97f0fa0e97" />
<img width="1718" height="835" alt="Screenshot 2025-11-27 190218" src="https://github.com/user-attachments/assets/3627a537-ccd4-4af2-be9b-b0279f4dc74a" />
<img width="1772" height="848" alt="Screenshot 2025-11-27 190153" src="https://github.com/user-attachments/assets/8982d93b-6920-4485-8194-d42b5246c14b" />
<img width="1760" height="837" alt="Screenshot 2025-11-27 190121" src="https://github.com/user-attachments/assets/75354da3-2a52-46bf-9c20-284b1ef3a050" />
## Features

- Real-time weather data from OpenWeatherMap API
- Search functionality for any city worldwide
- Modern dark theme UI with cyan/coral gradient accents
- Responsive design (mobile, tablet, desktop)
- Weather icons from OpenWeatherMap
- Comprehensive weather metrics (temp, humidity, wind, pressure, visibility)
- Weekly forecast display
- Error handling for invalid cities or API issues
- Loading states and user feedback

## Technology Stack

- **React** - UI framework
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling with modern features (gradients, animations, glassmorphism)
- **OpenWeatherMap API** - Weather data source

## Project Structure

```
101523555_comp3123_labtest2/
├── src/
│   ├── components/
│   │   ├── SearchForm.js      # Search input component
│   │   └── WeatherCard.js     # Weather display component
│   ├── App.js                 # Main application component
│   ├── App.css                # Application styles
│   └── index.css              # Global styles
├── public/                    # Static assets
├── .env                       # Environment variables (API key)
└── README.md                  # This file
```

## Notes & Assumptions

- **API Key:** The API key is configured in both `.env` file and as a fallback constant in `App.js` for reliability
- **Weekly Forecast:** Currently displays mock data based on current weather conditions (OpenWeatherMap free tier only provides current weather, not forecasts)
- **Temperature Units:** All temperatures displayed in Celsius (°C) using metric units
- **Error Handling:** App gracefully handles API errors, invalid city names, and network issues
- **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Responsive Design:** Optimized for screens from 320px to 1920px+


## Author

**Student Name:** Kenneth Shifa  
**Student ID:** 101523555  
**Course:** COMP3123 - Full Stack Development I  
**Lab Test:** 2

