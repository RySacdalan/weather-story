import React from 'react';
import './Weather.css'

const Weather = (props) => {
  return(
    <div className='weather_wrapper'>
      <div className='weather_content'>
        <div className="weather_primary_details">
            <h1 className='weather_temp'>16deg</h1>
            <p className='weather_description'>light rain</p>
            <div className='weather_location'>
                <h3>Manila</h3>
                <p>PH</p>
                <p>12:30PM</p>
            </div>
        </div>
        <div className="weather_secondary_details">
            <div className="first-section">
                <h1>Main</h1>
                <p>Temp: 300.12</p>
                <p>Feels like: 200.25</p>
                <p>Humidity: 91</p>
            </div>
            <div className="second-section">
                <h1>Wind</h1>
                <p>Speed: 2.68</p>
                <p>Deg: 207</p>
                <p>Gust: 8.99</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Weather

