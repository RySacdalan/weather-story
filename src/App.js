import { useEffect, useState } from "react";
import "./App.css";
import MainBody from "./layout/MainBody";
import MainHeader from "./layout/MainHeader";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [locationKey, setLocationKey] = useState("");

  const searchWeather = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${locationKey}&appid=c1473becaeff1ec279c5251e93a54071`
        )
        .then((response) => console.log(response.data))
        .then((response) => setWeatherData(response.data))
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <div className="App">
      <div className="main_app_content">
        <div className="header_container">
          <div className="header">
            <h1>WeatherStory</h1>
            <div className="header_search">
              <input
                className="header_input"
                type="text"
                placeholder="Search"
                value={locationKey}
                onChange={(e) => setLocationKey(e.target.value)}
                onKeyPress={searchWeather}
              />
              <button className="header_btn" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
        <MainBody weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
