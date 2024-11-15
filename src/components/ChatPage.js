import React, { useState } from 'react';
import './ChatPage.css';

const ChatPage = ({ userType }) => {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        if (message) {
            setMessages([...messages, { text: message, sender: 'user' }, { text: 'Bot response', sender: 'bot' }]);
        }
    };

    return (
        <div className="chat-page">
            <header className="chat-header">
                <h2>{userType} Chat</h2>
            </header>

            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>

            <div className="message-input">
                <button className="attachment-button">📎</button>
                <input type="text" placeholder="Enter your text" />
                <button className="send-button" onClick={() => handleSendMessage(document.querySelector('input').value)}>⬆️</button>
            </div>
        </div>
    );
};

export default ChatPage;
