import React from 'react';
import sunny from './icons/s.png';
import cloudy from './icons/cloudy.png';
import rainy from './icons/r.png';
import snow from './icons/snow.png';
import './App.css';

const WeatherCard = ({ weatherData }) => {
    if (!weatherData) {
        return <div className="weather-card">Search for a city to get the weather</div>;
    }

    const getCustomIcon = (description) => {
        switch (description) {
            case 'clear sky':
                return sunny; 
            case 'few clouds':
            case 'scattered clouds':
            case 'broken clouds':
            case 'overcast clouds':
                return cloudy;
            case 'rain':
            case 'shower rain':
                return rainy;
            case 'snow':
                return snow;
            case 'thunderstorm':
                return rainy;
            default:
                return cloudy;
        }
    };

    return (
        <div className="weather-card">
            <div className="weather-icon">
                <img src={getCustomIcon(weatherData.weather[0].description)}  style={{ width: '200px', height: '200px' }} alt={weatherData.weather[0].description} />
            </div>
            <h2>{weatherData.name} {Math.round(weatherData.main.temp)}℃</h2>
            <p>wind speed: {weatherData.wind.speed} km/h</p>
            <p>{new Date().toLocaleString()}</p>
            <p>{weatherData.weather[0].description}</p>
        </div>
    );
};

export default WeatherCard;
