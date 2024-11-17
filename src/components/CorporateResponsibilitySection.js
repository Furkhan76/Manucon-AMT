// src/components/CorporateResponsibilitySection.js
import React from 'react';
import './CorporateResponsibilitySection.css';
import Responsibility from '../assets/responsibility.jpg'
const CorporateResponsibilitySection = () => {
    return (
        <section data-scroll data-scroll-speed="2">
        <div className="corporate-responsibility-section">
            <div className="content">
                <div className="image-container">
                    <img src={Responsibility} alt="Corporate Responsibility" className="responsibility-image" />
                </div>
                <div className="text-container">
                    <h2 className="responsibility-heading">Responsibility</h2>
                    <p className="responsibility-text">
                        As a leading entity in our sector, we hold a vital responsibility in promoting connectivity that is responsible, fair, and sustainable. Ensuring an inclusive and equitable environment for our workforce, proactively addressing the operational and environmental needs of our clients, maintaining ethical standards and integrity throughout the organization, and actively supporting the communities we serve are essential for our ongoing success.
                    </p>
                </div>
            </div>
        </div>
        </section>
    );
};
 
export default CorporateResponsibilitySection;
