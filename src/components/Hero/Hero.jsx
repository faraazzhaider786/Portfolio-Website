import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">

      {/* Yellow Decorative Shape */}
      <div className="hero-yellow-shape"></div>

      <div className="hero-container">

        <div className="hero-content">

          {/* Subtitle */}
          <p className="hero-subtitle">
            SOFTWARE ENGINEERING STUDENT
          </p>

          {/* Main Heading */}
          <h1>
            Hello, My name
            <br />
            is Faraaz Haider
          </h1>

          {/* Description */}
          <p className="hero-description">
            I'm a Software Engineering student passionate about
            building modern web applications and exploring
            cloud computing and artificial intelligence.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="projects-button"
            >
              Projects <span>→</span>
            </a>

            <a
              href="/FaraazHaiderCV.docx"
              download
              className="cv-button-hero"
            >
              <span>↓</span> Download CV
            </a>

          </div>

          {/* Social Links */}
          <div className="hero-socials">

            <a
              href="https://www.linkedin.com/in/faraazzhaider786/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">in</span>
              LinkedIn
            </a>

            <a
              href="https://github.com/faraazzhaider786"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">GH</span>
              GitHub
            </a>

            <a
              href="mailto:haiderz.faraz@gmail.com"
              className="social-link"
            >
              <span className="social-icon">@</span>
              Gmail
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;