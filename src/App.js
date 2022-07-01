import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [locationKey, setLocationKey] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationKey}&appid=c1473becaeff1ec279c5251e93a54071`;

  const searchWeather = (event) => {
    // if (event.key === "Enter") {
    //   axios
    //     .get(url)
    //     .then((response) => console.log(response.data))
    //     .then((response) => setWeatherData(response.data))
    //     .catch((err) => console.log(err.message));
    // }
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setWeatherData(response.data);
        console.log(response.data);
      });
      setLocationKey("");
    }
  };

  return (
    <div className="App">
      <div className="main_app_content">
        {/* For header searchbar */}
        <div className="header_container">
          <div className="header">
            <h1>WeatherStory in {weatherData.name}</h1>
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

        {/* Rendering weather data */}
        <div className="weather_wrapper">
          <div className="weather_content">
            <div className="weather_primary_details">
              <div className="primary_wrapper">
                <div className="primary_content">
                  <h1 className="weather_temp">16&deg;F</h1>
                  <p className="weather_description">light rain</p>
                </div>
                <div className="weather_location">
                  <p className="weather_city">Manila, PH.</p>
                  <p className="weather_time">12:30PM</p>
                </div>
              </div>
            </div>
            <div className="weather_secondary_details">
              <div className="first-section">
                <h1>Main</h1>
                <div className="main-details">
                  <p>Temp: 300.12</p>
                  <p>Feels like: 200.25</p>
                  <p>Humidity: 91</p>
                </div>
              </div>
              <div className="second-section">
                <h1>Wind</h1>
                <div className="wind-details">
                  <p>Speed: 2.68</p>
                  <p>Deg: 207</p>
                  <p>Gust: 8.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
