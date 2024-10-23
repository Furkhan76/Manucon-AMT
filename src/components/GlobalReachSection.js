// src/components/GlobalReachSection.js
import React from 'react';
import './GlobalReachSection.css';
import globalImage from '../assests/global-image.jpg'; // Assuming you have an image here

const GlobalReachSection = () => {
    return (
        <div className="global-reach-section">
            <img src={globalImage} alt="Global Reach" />
            <p>American Tower Corporation operates in multiple regions around the world, providing unparalleled connectivity solutions.</p>
        </div>
    );
};

export default GlobalReachSection;
