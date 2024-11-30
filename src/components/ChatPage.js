import React, { useState, useEffect, useRef } from 'react';
import './ChatPage.css';
import logo from '../assets/chat_page.png';
import Send from '../assets/send.png';

const ChatPage = ({ userType }) => {
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState(null);
  const chatEndRef = useRef(null); // Ref for auto-scroll

  // Function to format bot responses (handles bolding and line breaks)
  const formatResponse = (text) => {
    const formattedText = text
      .replace(/\n/g, '<br />') // Replace \n with line breaks
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Replace **text** with <strong>text</strong>
    return formattedText;
  };

  // Auto-scroll to the latest message
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to handle sending messages
  const handleSendMessage = async (message) => {
    if (message) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      document.querySelector('input[type="text"]').value = ''; // Clear input field

      try {
        const url = `http://127.0.0.1:5000/chat?q=${encodeURIComponent(message)}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.result) {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: formatResponse(data.result), // Format response
              sender: 'bot',
            },
          ]);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Error connecting to the server. Please try again later.', sender: 'bot' },
        ]);
      }
    }
  };

  // Handle enter key to send message
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const input = document.querySelector('input[type="text"]');
      handleSendMessage(input.value);
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

  const handleNewChat = () => {
    setMessages([]); // Clear messages
  };

  return (
    <div className="chat-page">
      <header className="chat-header">
        <div className="header-left">
          <img src={logo} alt="Chat Logo" className="logo" />
          <span className="header-title">American Towers Corporation</span>
        </div>
        <button className="new-chat-button" onClick={handleNewChat}>
          New Chat
        </button>
      </header>
      <hr className="separator-line" />
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender}`}
            dangerouslySetInnerHTML={
              msg.sender === 'bot' ? { __html: msg.text } : undefined
            }
          >
            {msg.sender === 'user' ? msg.text : null}
          </div>
        ))}
        <div ref={chatEndRef} />
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
        <input
          type="text"
          placeholder="Enter your text"
          onKeyPress={handleKeyPress}
        />
        <button
          className="send-button"
          onClick={() =>
            handleSendMessage(document.querySelector('input[type="text"]').value)
          }
        >
        <div className="header-left">
          <img src={Send} alt="Chat Logo" className="logo" />
        </div>
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
