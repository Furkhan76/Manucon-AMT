// src/components/ServicesSection.js
import React, { useState, useEffect } from 'react';
import './ServicesSection.css';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';

const images = [service1, service2, service3]; // Array of images

const ServicesSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
            }, 300); // Wait for fade out before switching image
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="services-section">
            <img
                src={images[currentImageIndex]}
                alt={`Service ${currentImageIndex + 1}`}
                className={`service-image ${fade ? 'fade-in' : 'fade-out'}`}
            />
            <div className="text-overlay">
                <h2>A worldwide leader in digital communications infrastructure</h2>
                <p>American Tower delivers solutions and services for deploying and maintaining wireless networks in 25 countries across six continents.</p>
            </div>
        </div>
    );
};

export default ServicesSection;
