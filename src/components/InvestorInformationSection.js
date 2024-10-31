// src/components/InvestorInformationSection.js
import React from 'react';
import './InvestorInformationSection.css';
import image1 from '../assets/investorImage1.jpg'; // Replace with actual image paths
import image2 from '../assets/investorImage2.jpg';
import image3 from '../assets/investorImage3.jpg';

const InvestorInformationSection = () => {
    return (
        <div className="investor-information-section">
            <div className="right-section">
                <div className="para-section">
                    <h2 className="responsibility-heading">Information For Investors</h2>
                        <p>
                            American Tower operates a vast portfolio of telecom towers across 25+ countries, supporting
                            connectivity worldwide. Its infrastructure spans the Americas, Europe, Africa, and Asia.
                            The company enables seamless communications in diverse regions. With a strong global presence,
                            American Tower is key to advancing digital networks.
                        </p>
                </div>
            </div>
            <div className="center-section">
                <img src={image1} alt="Image 1" className="image image1" />
                <img src={image2} alt="Image 2" className="image image2" />
                <img src={image3} alt="Image 3" className="image image3" />
            </div>
        </div>
    );
};

export default InvestorInformationSection;
