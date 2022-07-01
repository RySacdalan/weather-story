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

        {/* Rendering weather data */}
        <div className="weather_wrapper">
          <div className="weather_content">
            <div className="weather_primary_details">
              {locationKey ? (
                <div className="primary_wrapper">
                  <div className="primary_content">
                    {weatherData.main ? (
                      <h1 className="weather_temp">
                        {weatherData.main.temp}&deg;F
                      </h1>
                    ) : null}
                    {weatherData.weather ? (
                      <p className="weather_main">
                        {weatherData.weather[0].main}
                      </p>
                    ) : null}
                  </div>
                  <div className="weather_location">
                    <div>
                      {weatherData.weather ? (
                        <p className="weather_description">
                          {weatherData.weather[0].description}.
                        </p>
                      ) : null}
                    </div>
                    <div className="city_and_time">
                      <p className="weather_city">
                        {weatherData.name ? `${weatherData.name},` : null}
                        {weatherData.sys ? `${weatherData.sys.country}.` : null}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div>Search data</div>
              )}
            </div>

            <div className="weather_secondary_details">
              <div className="first-section">
                <h1>Main</h1>
                <div className="main-details">
                  <p>
                    FEELS LIKE:{" "}
                    {weatherData.main ? weatherData.main.feels_like : null}
                    &deg;F
                  </p>
                  <p>
                    HUMIDITY:{" "}
                    {weatherData.main ? `${weatherData.main.humidity}%` : null}
                  </p>
                  <p>
                    PRESSURE:{" "}
                    {weatherData.main
                      ? `${weatherData.main.pressure}psf`
                      : null}
                  </p>
                </div>
              </div>
              <div className="second-section">
                <h1>Wind</h1>
                <div className="wind-details">
                  <p>
                    SPEED:{" "}
                    {weatherData.wind ? `${weatherData.wind.speed}MPH` : null}
                  </p>
                  <p>
                    DEGREES: {weatherData.wind ? weatherData.wind.deg : null}
                    &deg;F
                  </p>
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
