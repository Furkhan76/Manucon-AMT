// src/components/LatestNewsSection.js
import React from 'react';
import './LatestNewsSection.css';
import BOD from "../assets/BOD.jpg";
import I1 from "../assets/Innovation-1.jpg";
import I2 from "../assets/Innovation-2.jpg";


const LatestNewsSection = () => {
    const newsItems = [
        {
            title: "Expanded Agreement With ProFuturo to Bring Educational Innovation With Technology to Brazil, Peru, Mexico and Nigeria",
            date: "May 24, 2024",
            imageUrl: I1, // Replace with your image path
            altText: "ProFuturo Agreement Announcement", // Descriptive alt text
        },
        {
            title: "ProFuturo and American Tower Join Forces to Bring Educational Innovation With Technology to Vulnerable Schools in Latin America and Africa",
            date: "Febraury 28, 2024",
            imageUrl: I2, // Replace with your image path
            altText: "Collaboration between ProFuturo and American Tower", // Descriptive alt text
        },
        {
            title: "Bud Noel Joins Wireless Infrastructure Association's Board of Directors",
            date: "Febraury 9, 2024",
            imageUrl: BOD, // Replace with your image path
            altText: "Bud Noel Appointment Announcement", // Descriptive alt text
        },
    ];

    return (
        <div className="latest-news-section">
            <h2 className="news-heading">Latest News</h2>
            <div className="news-container">
                {newsItems.map((item, index) => (
                    <div key={index} className="news-item">
                        <img 
                            src={item.imageUrl} 
                            alt={item.altText} // Use descriptive alt text
                            className="news-image" 
                        />
                        <div className="news-date">{item.date}</div>
                        <h3 className="news-title">{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestNewsSection;
