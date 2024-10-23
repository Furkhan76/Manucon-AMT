// src/components/CorporateResponsibilitySection.js
import React from 'react';
import './CorporateResponsibilitySection.css';

const CorporateResponsibilitySection = () => {
    return (
        <div className="corporate-responsibility-section">
            <h2>Corporate Responsibility</h2>
            <div className="initiatives">
                <div className="initiative">
                    <h3>Initiative 1</h3>
                    <p>Description of initiative 1.</p>
                </div>
                <div className="initiative">
                    <h3>Initiative 2</h3>
                    <p>Description of initiative 2.</p>
                </div>
                <div className="initiative">
                    <h3>Initiative 3</h3>
                    <p>Description of initiative 3.</p>
                </div>
            </div>
        </div>
    );
};

export default CorporateResponsibilitySection;
