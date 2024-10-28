// src/components/GlobalReachSection.js
import React from 'react';
import './GlobalReachSection.css';
import globalImage from '../assets/image.jpg'; // Ensure this path is correct
import sampleVideo from '../assets/sample-video.mp4'; // Add your video file in the assets folder

const GlobalReachSection = () => {
    return (
        <div className="global-reach-section">
            <div className="text-section">
                <p>
                    American Tower operates a vast portfolio of telecom towers across 25+ countries, supporting
                    connectivity worldwide. Its infrastructure spans the Americas, Europe, Africa, and Asia.
                    The company enables seamless communications in diverse regions. With a strong global presence,
                    American Tower is key to advancing digital networks.
                </p>
            </div>
            <div className="image-section">
                <img src={globalImage} alt="Global Reach" className="global-image" />
                <video src={sampleVideo} className="video-overlay" autoPlay muted loop></video>
            </div>
        </div>
    );
};

export default GlobalReachSection;
