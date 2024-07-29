import React from 'react'
import { Link } from 'react-router-dom'
import '../components/BookNow.css'
import Newbot from '../components/newbot'

export const BookNow = () => {
  return (
    <div className="booknow">
      <div className='navbar'>
        <div className="navbar-a">
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/services'>SERVICES</Link>
          <Link to='/contact'>CONTACT</Link>
        </div>

        <div className='title'>
          <p>The <span>CLIPPERS.</span></p>
        </div>

        <div className="navbar-text">
          <p>At the right place for a haircut!</p>
        </div>

      </div>

      <div className="booknow-form"><h1>COMING SOON....</h1></div>

      <Newbot />
    </div>
  )
}

export default BookNow