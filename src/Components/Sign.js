import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import './Signup.css';
import { Link } from 'react-router-dom';

const Sign = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    username: '',
    password: ''
  });

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.username) {
      errors.username = 'Username is required';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert('Form submitted successfully!');
      // You can add additional actions here, such as sending the data to a server.
    } else {
      alert('Please fix the errors in the form');
    }
  };

  return (
    <div className='sign'>
    <div className="signup-container">
      <div className="signup-card">
        <div className="logo-container">
          <FontAwesomeIcon icon={faPaw} size="3x" className="paw-logo" />
        </div>
        <h1 className="signup-title">PawFinds</h1>
        <p className="signup-subtitle">Meet your furry friend!</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {formErrors.email && <p className="error-message">{formErrors.email}</p>}
          </div>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            {formErrors.username && <p className="error-message">{formErrors.username}</p>}
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {formErrors.password && <p className="error-message">{formErrors.password}</p>}
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
          <div className="login-link">
            <p>Have an account?</p>
            <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Sign;


