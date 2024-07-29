import React from 'react'
import { Link } from 'react-router-dom';
import './Hairstyles.css'

export const Hairstyles = () => {
  return (
    <div className='hairstyles'>
      <div className="text">
        <h4>Trending</h4>
        <p>Be inspired by our stylists looks and stay up to date with everything you want to know about Rush</p>
      </div>

      <div className="images">
        <img src="pics/style1.jpg" alt="img" />
        <img src="pics/style2.jpg" alt="img" />
        <img src="pics/style3.jpg" alt="img" />
        <img src="pics/style4.jpg" alt="img" />
      </div>

    { /*  <div className="last-button">
        <Link to='/booknow'><button id='booknow'>Book Now</button></Link>
  </div> */ }

    </div>
  )
}

export default Hairstyles