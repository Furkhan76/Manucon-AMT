// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="contact-info">
                <h4>Contact Us</h4>
                <p>Address: 116 Huntington Ave, Boston, MA 02116</p>
                <p>Phone: (617) 535-5000</p>
                <p>Email: info@americantower.com</p>
            </div>
            <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
            </div>
            <div className="newsletter">
                <input type="email" placeholder="Email" />
                <button>Subscribe</button>
            </div>
        </footer>
    );
};

export default Footer;
