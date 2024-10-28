// src/components/InvestorInformationSection.js
import React from 'react';
import './InvestorInformationSection.css';
import investorImage from '../assets/investor-image.jpg'; // Assuming you have an image here

const InvestorInformationSection = () => {
    return (
        <div className="investor-information-section">
            <img src={investorImage} alt="Investor Information" />
            <p>Stay updated with the latest investor news and financial reports from American Tower Corporation.</p>
        </div>
    );
};

export default InvestorInformationSection;
