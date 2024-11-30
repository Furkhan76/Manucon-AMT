import React, { useState } from 'react';
import './ChatbotPage.css';
import logo from '../assets/chat_bot_l.png'; // Replace with actual logo path
import adminIcon from '../assets/admin_icon.gif';
import userIcon from '../assets/user_icon.gif';
import LoginModal from './LoginModal';
import ChatPage from './ChatPage';

const ChatbotPage = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isGuest, setIsGuest] = useState(false);

    const handleLogin = (username, password) => {
        if (username === 'admin' && password === 'admin') {
            setIsLoggedIn(true);
            setShowLoginModal(false);
        } else {
            alert("Invalid credentials");
        }
    };

    if (isLoggedIn) {
        return <ChatPage userType="ATC User" />;
    }

    if (isGuest) {
        return <ChatPage userType="Guest" />;
    }

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
                        <button className="user-button" onClick={() => setShowLoginModal(true)}>Login with SSO</button>
                    </div>

                    {/* External User Box */}
                    <div className="user-box">
                        <img src={userIcon} alt="External User Icon" className="user-icon" />
                        <h3>End User</h3>
                        <button className="user-button" onClick={() => setIsGuest(true)}>Continue as Guest</button>
                    </div>
                </div>
            </main>

            {/* Footer Section */}
            <footer className="chatbot-footer">
                <p>&copy; 2024 ATC. All rights reserved</p>
            </footer>

            {/* Login Modal */}
            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} onLogin={handleLogin} />}
        </div>
    );
};

export default ChatbotPage;
