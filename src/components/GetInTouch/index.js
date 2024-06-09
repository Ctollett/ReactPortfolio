import React from 'react';
import './index.css';

const GetInTouchSection = () => {
  return (
    <div className="get-in-touch-section">
      <div className="get-in-touch-container">
        {Array(10).fill(0).map((_, index) => (
          <span key={index} className="get-in-touch-text">Get In Touch</span>
        ))}
      </div>
    </div>
  );
};

export default GetInTouchSection;