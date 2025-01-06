import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLoginForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="login-section">
      <button className="login-btn" onClick={toggleLoginForm}>
        Login
      </button>

      {isOpen && (
        <div className="login-modal">
          <div className="login-overlay" onClick={toggleLoginForm}></div>
          <div className="login-form">
            <h2>Welcome Back</h2>
            <p>Please login to continue</p>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="submit-btn">Login</button>
              <button type="button" className="cancel-btn" onClick={toggleLoginForm}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;