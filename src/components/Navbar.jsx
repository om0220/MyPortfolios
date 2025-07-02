import React from 'react';
import '../Style/Navbar.css';
import mylogo from'../image/mynamelogo.png'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={mylogo} alt="" />
        <div className="logo">OMKUMAR DEVANGAN</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
