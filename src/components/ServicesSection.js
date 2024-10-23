// src/components/ServicesSection.js
import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
    return (
        <div className="services-section">
            <h2>Our Services</h2>
            <div className="service">
                <h3>Service 1</h3>
                <p>Description of service 1 provided by American Tower Corporation.</p>
            </div>
            <div className="service">
                <h3>Service 2</h3>
                <p>Description of service 2 provided by American Tower Corporation.</p>
            </div>
            <div className="service">
                <h3>Service 3</h3>
                <p>Description of service 3 provided by American Tower Corporation.</p>
            </div>
        </div>
    );
};

export default ServicesSection;
