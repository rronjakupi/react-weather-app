import React from "react";
import "../sass/weather.scss";
import sunnyIcon from "../assets/sunnyicon.png";
import sunIcon from "../assets/sunicon.png";
import visibilityIcon from "../assets/visibilityicon.png";
import windIcon from "../assets/windicon.png";
import humidityIcon from "../assets/humidityicon.png";

const WeatherComponent = props => {
  return (
    <div className="weather-container">
      <div className="location-container">
        <img src={sunnyIcon} className="logo2" alt="" />
        <h1 className="total-weather-report">Today's weather report</h1>
        <h1 className="location">{`${props.name}, ${props.country}`}</h1>
      </div>
      <div className="degree-container">
        <img src={sunnyIcon} className="weather-logo2" alt="" />
        <h2 className="degree-value">{`${props.temperature}°C`}</h2>
      </div>
      <div className="info-container">
        <h2 className="local-weather-report">Local Weather Report</h2>
        <div className="hr"></div>
        <img src={sunIcon} className="sun-icon" alt="" />
        <h2 className="day">Monday</h2>
        <h2 className="weather-type">{props.weather_descriptions}</h2>
        <h2 className="last-observation">Last observed on:</h2>
        <h2 className="observation-time">{props.observation_time}</h2>
      </div>
      <div className="visibility">
        <img src={visibilityIcon} alt="" className="visibility-icon" />
        <div className="horizontal-line"></div>
        <h2 className="visibility-value-text">Visibility value:</h2>
        <h2 className="visibility-value">{props.visibility}</h2>
      </div>
      <div className="wind">
        <img src={windIcon} alt="" className="wind-icon" />
        <div className="horizontal-line"></div>
        <h2 className="wind-speet-text">Wind speed:</h2>
        <h2 className="wind-speed">{props.wind_speed}</h2>
        <h2 className="wind-degree-text">Wind degree:</h2>
        <h2 className="wind-degree">{props.wind_degree}</h2>
        <h2 className="wind-direction-text">Wind direction</h2>
        <h2 className="wind-direction">{props.wind_dir}</h2>
      </div>
      <div className="humidity">
        <img src={humidityIcon} alt="" className="humidity-icon" />
        <div className="horizontal-line"></div>
        <h2 className="humidity-value-text">Humidity value</h2>
        <h2 className="humidity-value">{props.humidity}</h2>
      </div>
    </div>
  );
};

export default WeatherComponent;
