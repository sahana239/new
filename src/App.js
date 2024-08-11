import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sign from '../../new/src/Components/Sign'; 
import AboutUs from '../../new/src/Components/AboutUs'; 
import CardGrid from '../../new/src/Components/CardGrid'; 
import ContactUs from '../../new/src/Components/ContactUs'; 
import './App.css';
import PetLeavingForm from '../../new/src/Components/PetLeavingForm';
import FAQ from '../../new/src/Components/FAQ';
import PetAdoptionForm from '../../new/src/Components/PetAdoptionForm';
import Login from '../../new/src/Components/Login';

import ForgotPassword from '../../new/src/Components/ForgotPassword';

const App = () => {
  return (
    <Router>
      <div>
      
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/adoptme">Adopt Me</Link></li>
            <li><Link to="/petleaving">PetLeaving</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            
          </ul>
        </nav>

     
        <Routes>
          <Route
            path="/"
            element={
              <div className="hero-container">
                <div className="hero-content">
                  <div className="logo-and-nav">
                    <div className="logo">
                      <i className="fas fa-paw"></i> PawFinds
                    </div>
                  </div>
                  <div className="text-content">
                    <h1>Get your family a new member.</h1>
                    <p>
                      Open your doors and hearts to pets in need of a home and it will be
                      thankful to you for the rest of their lives.
                    </p>
                    <Link to="/AboutUs" className="explore-link">
                      <button className="explore-btn">
                        Explore <i className="fas fa-arrow-right"></i>
                      </button>
                    </Link>
                  </div>
                </div>

              </div>
            }
          />
          <Route path="/signup" element={<Sign />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/adoptme" element={<CardGrid />} />
          <Route path="/petleaving" element={<PetLeavingForm/>}/>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/petadap" element={<PetAdoptionForm/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/forgot" element={<ForgotPassword/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;





