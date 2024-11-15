// src/components/ChatbotPage.js
import React from 'react';
import './ChatbotPage.css';
import logo from '../assets/logo.jpg'; // Replace with actual logo path
import adminIcon from '../assets/admin_icon.gif';
import userIcon from '../assets/user_icon.gif';

const ChatbotPage = () => {
    return (
        <div className="chatbot-page">
            {/* Header Section */}
            <header className="chatbot-header">
                <img src={logo} alt="ATC Logo" className="header-logo" />
                <h1 className="header-title">American Tower Corporation</h1>
            </header>

            {/* Main Content Section */}
            <main className="chatbot-main">
                <h2>Welcome to AmeriConnect Chatbot</h2>
                <p>Connect with our AI Powered chatbot for an enhanced experience</p>

                <div className="user-options">
                    {/* Internal User Box */}
                    <div className="user-box">
                        <img src={adminIcon} alt="Internal User Icon" className="user-icon" />
                        <h3>ATC Internal User</h3>
                        <button className="user-button">Login with SSO</button>
                    </div>

                    {/* External User Box */}
                    <div className="user-box">
                        <img src={userIcon} alt="External User Icon" className="user-icon" />
                        <h3>End User</h3>
                        <button className="user-button">Continue as Guest</button>
                    </div>
                </div>
            </main>

            {/* Footer Section */}
            <footer className="chatbot-footer">
                <p>&copy; 2024 ATC. All rights reserved</p>
            </footer>
        </div>
    );
};

export default ChatbotPage;
