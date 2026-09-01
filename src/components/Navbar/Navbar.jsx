import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo / Name */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-circle">F</div>

          <div className="logo-text">
            <h2>FARAAZ HAIDER</h2>
            <span>SOFTWARE ENGINEERING STUDENT</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className={`nav-links ${menuOpen ? "nav-active" : ""}`}>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>

          <li>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="navbar-actions">
          <a
            href="/resume.pdf"
            download
            className="cv-button"
          >
            ↓
            <span>Download CV</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;