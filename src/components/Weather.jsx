import React from 'react';
import './Weather.css'

const Weather = (props) => {
  return(
    <div className='weather_wrapper'>
      <div className='weather_content'>
        <div className="weather_primary_details">
            <div className='primary_wrapper'>
                <div className='primary_content'>
                    <h1 className='weather_temp'>16&deg;F</h1>
                    <p className='weather_description'>light rain</p>
                </div>
                <div className='weather_location'>
                    <p className='weather_city'>Manila, PH.</p>
                    <p className='weather_time'>12:30PM</p>
                </div>
            </div>
        </div>
        <div className="weather_secondary_details">
            <div className="first-section">
                <h1>Main</h1>
                <div className='main-details'>
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
  )
}

export default Weather

