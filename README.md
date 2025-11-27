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

## Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 101523555_comp3123_labtest2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API Key**
   - The `.env` file is already configured with the API key
   - Or create a `.env` file in the project root:
     ```env
     REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
     ```

4. **Run the application**
   ```bash
   npm start
   ```
   - App will open at `http://localhost:3000`

5. **Build for production**
   ```bash
   npm run build
   ```

## Screenshots

### Main Weather Dashboard
![Weather App Screenshot](screenshots/weather-app-main.png)
*Main dashboard showing current weather for Toronto with search functionality*

### Weather Details
![Weather Details Screenshot](screenshots/weather-details.png)
*Detailed weather information including temperature, humidity, wind, pressure, and weekly forecast*

### Search Functionality
![Search Screenshot](screenshots/weather-search.png)
*Search feature allowing users to query weather for any city*

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

## Deployment

The app can be deployed to:
- **Vercel** - Recommended for React apps
- **Railway** - Easy deployment platform
- **Render** - Free tier available

Build command: `npm run build`
Output directory: `build/`

## Author

**Student Name:** Kenneth Shifa  
**Student ID:** 101523555  
**Course:** COMP3123 - Full Stack Development I  
**Lab Test:** 2

