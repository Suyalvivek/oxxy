import React from 'react';
import logo from '../assets/images/oxxy-logo.png';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <a href="#" className="logo-link">
          <img src={logo} alt="Oxxy" className="logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#calculator">Calculator</a></li>
          <li><a href="#comparison">Compare</a></li>
          <li><a href="#testimonials">Reviews</a></li>
        </ul>
        <a href="#signup" className="cta-button">Get Started</a>
      </div>
    </nav>
  );
};

export default Navbar;
