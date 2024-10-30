// src/components/InvestorInformationSection.js
import React from 'react';
import './InvestorInformationSection.css';
import image1 from '../assets/investorImage1.jpg'; // Replace with actual image paths
import image2 from '../assets/investorImage2.jpg';
import image3 from '../assets/investorImage3.jpg';

const InvestorInformationSection = () => {
    return (
        <div className="investor-information-section">
            <div className="center-section">
                <img src={image1} alt="Image 1" className="image image1" />
                <img src={image2} alt="Image 2" className="image image2" />
                <img src={image3} alt="Image 3" className="image image3" />
            </div>
            <div className="right-section">
            <h2 className="responsibility-heading">Information For Investors</h2>
                <p>
                    American Tower Corporation (AMT) is a global leader in communications infrastructure, owning over
                    225,000 wireless and broadcast sites across more than 25 countries. It generates stable revenue through
                    long-term leases with telecom carriers, supporting the growing demand for mobile data and 5G expansion.
                    With its focus on sustainability, American Tower integrates renewable energy solutions, aiming to reduce
                    its carbon footprint while delivering resilient infrastructure. These initiatives, combined with
                    consistent dividends, make AMT an attractive option for income-focused investors.
                </p>
            </div>
        </div>
    );
};

export default InvestorInformationSection;
