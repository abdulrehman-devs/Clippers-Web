// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// import head from '../head.jpg';

const Header = ({ imgtext, hideImage = false }) => {
  return (
    <div className='navbar'>
      <div className="navbar-a">
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/services'>SERVICES</Link>
        <Link to='/contact'>CONTACT</Link>
        <Link to='/chatbot'>Our Chatbot</Link>
      </div>

      <div className='title'>
        <p>The <span>CLIPPERS.</span></p>
      </div>

      <div className="navbar-text">
        <p>At the right place for a haircut!</p>
      </div>

      {!hideImage && (
        <div className="header-pic">
          <div className="pic-text">
            <p>{imgtext}</p>
            { /* <Link to='/booknow'><button id='booknow'>Book Now</button></Link> */ }
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
