// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/path_to_logo.jpg';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="American Tower Corporation" className="logo" />
            <nav>
                <a href="#services">Our Services</a>
                <a href="#global">Global Reach</a>
                <a href="#contact">Contact Us</a>
            </nav>
        </header>
    );
};

export default Header;
