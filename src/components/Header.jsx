import React from 'react';
import './Header.css'

const Header = (props) => {
  return(
    <div className="header_container">
      <div className='header'>
          <h1>WeatherStory</h1>
          <div className='header_search'>
            <input className='header_input' type="text" placeholder='Search' />
            <button className='header_btn'>Search</button>
          </div>
      </div>
    </div>
  )
}

export default Header