import React, { useState } from 'react';
import './Log.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    
    window.alert(`You've logged in successfully!`);

  
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
   
    window.alert('Redirecting to the Forgot Password page.');
    
  };

  return (
    <div className="bg-img">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <div className="forgot-password">
          <a href="forgot" onClick={handleForgotPassword}>Forgot Password?</a>
        </div>
      </div>
    </div>
    
  );
};

export default Login;


