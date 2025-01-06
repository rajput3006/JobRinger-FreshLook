import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

    const toggleLoginForm = () => {
        setIsLoginOpen(!isLoginOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            {/* Logo Section */}
            <div className="logo">
                <span className="logo-text">JobRinger</span>
                <span className="logo-dot">.</span>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* Navigation Links */}
            <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/jobs" className="nav-link" onClick={toggleMenu}>Jobs</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Login Button */}
            <div className="login-button">
                <button onClick={toggleLoginForm} className="login-btn">
                    Login
                </button>
            </div>

            {/* Login Form Modal */}
            {isLoginOpen && (
                <div className="login-modal">
                    <div className="login-overlay" onClick={toggleLoginForm}></div>
                    <div className="login-form">
                        <h2>Welcome Back</h2>
                        <p>Please login to continue</p>
                        <form>
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit" className="submit-btn">Login</button>
                        </form>
                        <button className="close-btn" onClick={toggleLoginForm}>
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;