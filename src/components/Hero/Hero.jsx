import React from "react";
import "./Hero.css";
import linkedinLogo from "../../assets/linkedin.png";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import TypingText from "../TypingText/TypingText";

const socialIcons = {
  github: "https://cdn.simpleicons.org/github",
  whatsapp: "https://cdn.simpleicons.org/whatsapp",
  gmail: "https://cdn.simpleicons.org/gmail",
};

const Hero = () => {
  return (
    <section className="hero" id="home">

      {/* Yellow Decorative Shape - Comes From Left */}
      
        <div className="hero-yellow-shape"></div>
      

      <div className="hero-container">

        {/* Hero Content - Comes From Right */}
        <ScrollAnimation type="right" className="hero-content-animation">
          <div className="hero-content">

            {/* Subtitle */}
            <p className="hero-subtitle">
              SOFTWARE ENGINEERING STUDENT
            </p>

            {/* Main Heading */}
            <TypingText
                text="Hello, My name is FARAAZ HAIDER."
                speed={70}
                lineBreak={true}
                className="section-heading"
              />

            {/* Description */}
            <p className="hero-description">
              I'm a Software Engineering student passionate about
              building modern web applications and exploring
              cloud computing and artificial intelligence.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">

              <ScrollAnimation delay={0}>
                <a
                  href="#projects"
                  className="projects-button"
                >
                  Projects <span>→</span>
                </a>
              </ScrollAnimation>

              <ScrollAnimation delay={120}>
                <a
                  href="/FaraazHaiderCV.docx"
                  download
                  className="cv-button-hero"
                >
                  <span>↓</span> Download CV
                </a>
              </ScrollAnimation>

            </div>

            {/* Social Links */}
            <div className="hero-socials">

              {/* LinkedIn */}
              <ScrollAnimation delay={240}>
                <a
                  href="https://www.linkedin.com/in/faraazzhaider786/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">
                    <img
                      src={linkedinLogo}
                      alt="LinkedIn logo"
                    />
                  </span>
                </a>
              </ScrollAnimation>

              {/* GitHub */}
              <ScrollAnimation delay={360}>
                <a
                  href="https://github.com/faraazzhaider786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">
                    <img
                      src={socialIcons.github}
                      alt="GitHub logo"
                    />
                  </span>
                </a>
              </ScrollAnimation>

              {/* WhatsApp */}
              <ScrollAnimation delay={480}>
                <a
                  href="https://wa.me/923192152362"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">
                    <img
                      src={socialIcons.whatsapp}
                      alt="WhatsApp logo"
                    />
                  </span>
                </a>
              </ScrollAnimation>

              {/* Gmail */}
              <ScrollAnimation delay={600}>
                <a
                  href="mailto:haiderz.faraz@gmail.com"
                  className="social-link"
                >
                  <span className="social-icon">
                    <img
                      src={socialIcons.gmail}
                      alt="Gmail logo"
                    />
                  </span>
                </a>
              </ScrollAnimation>

            </div>

          </div>
        </ScrollAnimation>

      </div>

    </section>
  );
};

export default Hero;