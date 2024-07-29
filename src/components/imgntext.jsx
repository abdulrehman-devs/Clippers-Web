// Imgntext.js
import React from 'react';
import './imgntext.css';

const Imgntext = ({ img, heading, text }) => {
    return (
        <div className='imgntext'>
            <div className="img">
                <img src={img} alt="img" />
            </div>

            <div className="text">
                <h4>{heading}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Imgntext;
