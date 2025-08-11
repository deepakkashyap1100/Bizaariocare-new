import React from 'react';
import { Link } from 'react-router-dom'; 
import langIcon from '../assets/images/icons/language.png';
import Logo from '../assets/images/logo1.png'; 
//  import home from '../assets/css/home..module.css'; 

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-xl navbar-light bg-white shadow-sm py-3 main-navbar" id='mainNavbar'>
      <div className="container">
        
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={Logo} alt="Logo" height="40" className="me-4" />
       
        </a>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Center links */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link fw-bold active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/partners">Hospital Partners</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/board">Medical Board</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/news">News & Articles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/contact">Contact Us</a>
            </li>
          </ul>

          {/* Right buttons */}
          <div className="d-flex align-items-center gap-2">
            {/* Language Selector */}
            <div className="dropdown ">
              <button
                className="btn btn nav-btn-style dropdown-toggle d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={langIcon} alt="" /> English
              </button>
              <ul className="dropdown-menu ">
                <li><a className="dropdown-item " href="/">English</a></li>
                <li><a className="dropdown-item" href="/">Hindi</a></li>
              </ul>
            </div>

            {/* Login */}
            <a href="/login" className="btn nav-btn-style">Login</a>

            {/* Sign Up */}
            <a href="/signup" className="btn  text-white nav-btn-style2">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
    
    </>

  );
}

export default Navbar;
