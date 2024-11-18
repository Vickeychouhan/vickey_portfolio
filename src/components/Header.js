import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li className="Portfolio-heading">Portfolio</li>
          <li><Link to="/">Home</Link></li>
          {/* <li><a href="#about">About</a></li> */}
          <li><a href="/projects">Projects</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/workprofile">WorkProfile</a></li> {/* Add this line */}
        </ul>
      </nav>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/vickey-chouhan-5a0aa6286" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} color="#0077b5" />
        </a>
      </div>
    </header>
  );
};

export default Header;
