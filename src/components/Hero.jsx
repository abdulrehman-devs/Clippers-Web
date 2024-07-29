import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div className='hero'>
    
      <div className="sections">
        <hr></hr>

      <h1 className='hero-heading'>
        The Best Men Salon in Town.
      </h1>

        <div className="hero-section1">
          <div className="section1-pic">
            <img src='pics/heroimg1.jpg' alt='img'></img>
          </div>

          <div className="section1-text">
            <h4>Explore our wide range of hair & colour services</h4>
            <p>- Styling Services</p>
            <p>- Full Colour Makeovers</p>
            <p>- Treatment & Hair Health</p>
            <button><Link to='/services'style={{textDecoration: 'none', color:'black' }} >View Services</Link></button>
          </div>
        </div>

        <div className="hero-section2">
          <div className="section2-text">
            <h4>Explore our wide range of beard services</h4>
            <p>- Beard Trimming</p>
            <p>- Beard Coloring & dying</p>
            <p>- Treatment & Hair Health</p>
            <button><Link to='/services' style={{textDecoration: 'none', color:'black' }} >View Services</Link></button>
          </div>

          <div className="section2-pic">
            <img src='pics/hero-section-img2.jpg' alt='img'></img>
          </div>
        </div>

      </div>


      <h4 className='collab-heading'>Our Collabrations</h4>
      <div className='brands-logos'>
        <img src="pics/Pepsi.png" alt='Unilever' />
        <img src="pics/tesla.png" alt='Tesla' />
        <img src="pics/Unilever.png" alt='Pepsi' />
        <img src="pics/ICC.png" alt='Fifa' />
        <img src="pics/fifa.jpg" alt='ICC' />
      </div>

    </div>
  )
}

export default Hero
