import React from 'react';
import './alert.css';

function Alert({ onClose }) {
  return (
    <div className="alert-overlay">
      <div className="card custom-alert-card" >
        <div className="card-body custom-card-body">
          <h5 className="card-title">New Feature!</h5>
          <p></p>
          <p></p>
          <p className="card-text">
           You've got any question? Our ChatBot is here!.
          </p>
          <a href="/chatbot" className="card-link">Try it now!</a>
          <p></p>
          <p></p>
          <p></p>
          <button onClick={onClose} className="card-link">Close</button>
        </div>
      </div>
    </div>
  );
}

export default Alert;
