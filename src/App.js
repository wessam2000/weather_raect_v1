import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (query) => {
    const API_KEY = '8019a5ffda138281ad3362698a4584f6'; 
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`
        //https://api.openweathermap.org/data/2.5/weather?q=qena&appid=
        //https://api.openweathermap.org/data/2.5/weather?q=qena&appid=979e237b0f5e09e3c71616ac4781af58&units=metric 
      );
      console.log(response.data);
      
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={fetchWeather} />
      <WeatherCard weatherData={weatherData} />
    </div>
  );
};

export default App;
