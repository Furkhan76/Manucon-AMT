import React, { useState } from 'react';
import './ChatPage.css';
import logo from '../assets/chat_logo.jpg';

const ChatPage = ({ userType }) => {
    const [messages, setMessages] = useState([]);
    const [file, setFile] = useState(null);

    const handleSendMessage = (message) => {
        if (message) {
            setMessages([...messages, { text: message, sender: 'user' }, { text: 'Bot response', sender: 'bot' }]);
            document.querySelector('input[type="text"]').value = ''; // Clear input after sending
        }
    };

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile && uploadedFile.type === 'application/pdf') {
            setFile(uploadedFile);
            alert(`Uploaded: ${uploadedFile.name}`);
        } else {
            alert('Only PDF files are allowed.');
        }
    };

    return (
        <div className="chat-page">
            <header className="chat-header">
                <h2>{userType} Chat</h2>
                <img src={logo} alt="American Tower Corporation" className="logo" />
            </header>

            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>

            <div className="message-input">
                <label htmlFor="attachment" className="attachment-button">📎</label>
                <input
                    type="file"
                    id="attachment"
                    style={{ display: 'none' }}
                    onChange={handleFileUpload}
                    accept="application/pdf"
                />
                <input type="text" placeholder="Enter your text" />
                <button
                    className="send-button"
                    onClick={() => handleSendMessage(document.querySelector('input[type="text"]').value)}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatPage;
