import React from 'react'
import "./index.css"

const Navbar = () => {
  return (
    <div id='navbar'>
        <div className="nav_container">
            <h3>Where in the world?</h3>
            <div className="night_mode">
                <i className='fa-solid fa-moon'> </i>
                <span>Dark Mode</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar