// src/components/Footer.js
import React, { useState } from 'react';
import './Footer.css';
import logo from '../assets/path_to_logo.jpg'; // Replace with the actual path for the logo
import facebookIcon from '../assets/facebook-icon.png'; // Replace with actual Facebook icon path
import linkedinIcon from '../assets/linkedin-icon.png'; // Replace with actual LinkedIn icon path

const Footer = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError(""); // Clear error message when user types
    };

    const validateEmail = () => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/; // Accepts @gmail.com, @yahoo.com, and @outlook.com
        if (!emailPattern.test(email)) {
            setError("Please enter a valid email (only @gmail.com, @yahoo.com, or @outlook.com allowed).");
        } else {
            setError("");
            alert("Thank you for subscribing!"); // Replace with actual subscribe action
        }
    };

    return (
        <footer className="footer">
            <div className="footer-section contact-info">
                <h4>Contact Us</h4>
                <p>Address: 116 Huntington Ave, Boston, MA 02116</p>
                <p>Phone: (617) 535-5000</p>
                <p>Email: info@americantower.com</p>
            </div>
            <div className="footer-section logo-section">
                <img src={logo} alt="Company Logo" className="footer-logo" />
                <div className="social-links">
                    <a href="https://www.facebook.com/AmericanTower/" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook" className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/company/american-tower-corporation/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                    </a>
                </div>
            </div>
            <div className="footer-section newsletter">
                <input
                    type="email"
                    placeholder="Email"
                    className="email-input"
                    value={email}
                    onChange={handleEmailChange}
                />
                <button className="subscribe-button" onClick={validateEmail}>Subscribe</button>
                {error && <p className="error-message">{error}</p>}
            </div>
        </footer>
    );
};

export default Footer;
