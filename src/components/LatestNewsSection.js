// src/components/LatestNewsSection.js
import React from 'react';
import './LatestNewsSection.css';

const LatestNewsSection = () => {
    return (
        <div className="latest-news-section">
            <h2>Latest News</h2>
            <div className="news-item">
                <h3>News Title 1</h3>
                <p>Brief description of news article 1.</p>
            </div>
            <div className="news-item">
                <h3>News Title 2</h3>
                <p>Brief description of news article 2.</p>
            </div>
            <div className="news-item">
                <h3>News Title 3</h3>
                <p>Brief description of news article 3.</p>
            </div>
        </div>
    );
};

export default LatestNewsSection;
