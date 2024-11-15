import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose, onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        onLogin(username, password);
    };

    return (
        <div className="login-modal-overlay">
            <div className="login-modal">
                <header className="login-modal-header">
                    <h2>Login as ATC Internal User</h2>
                    <button className="close-button" onClick={onClose}>×</button>
                </header>
                <div className="login-modal-content">
                    <div className="login-input-group">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button onClick={handleLogin} className="login-button">Login</button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
