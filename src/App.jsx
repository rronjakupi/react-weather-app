import React, { useState, useEffect } from "react";
import { secretKey } from "./secret";

// Styling
import "./sass/app.scss";

// Components
import WeatherComponent from "./components/WeatherComponent";
import Dropdown from "./components/Dropdown";

const App = props => {
  const [cityname, setCityname] = useState("Pristina");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const URL = `http://api.weatherstack.com/current?access_key=${secretKey}&query=${cityname}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);

      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, [cityname]);

  return (
    <div className="main-container">
      <div className="first-container">
        <p>Select city</p>
        <Dropdown onChange={event => setCityname(event.target.value)} />
        <div className="wrapper">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <WeatherComponent
              name={data.location.name}
              country={data.location.country}
              temperature={data.current.temperature}
              weather_descriptions={data.current.weather_descriptions}
              observation_time={data.current.observation_time}
              visibility={data.current.visibility}
              wind_speed={data.current.wind_speed}
              wind_degree={data.current.wind_degree}
              wind_dir={data.current.wind_dir}
              humidity={data.current.humidity}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
