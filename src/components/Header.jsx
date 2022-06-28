import React from 'react';
import './Header.css'

const Header = ({value, setLocationKey}) => {
  return(
    <div className="header_container">
      <div className='header'>
          <h1>WeatherStory</h1>
          <div className='header_search'>
            <input className='header_input' type="text" placeholder='Search' value={value} onChange={(e) => setLocationKey(e.target.value) }/>
            <button className='header_btn' type='submit'>Search</button>
          </div>
      </div>
    </div>
  )
}

export default Header