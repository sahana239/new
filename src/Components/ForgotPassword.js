import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();

    // Here you would typically call an API to send the password reset link
    window.alert(`A password reset link has been sent to ${email}.`);

    // Reset the email input field
    setEmail('');
  };

  return (
    <div className="bg-img">
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>
        <form onSubmit={handleForgotPassword}>
          <div className="input-group">
            <label htmlFor="email">Enter your email address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

