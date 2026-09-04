import React from "react";
import "./About.css";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import TypingText from "../TypingText/TypingText";
import { Scroll } from "lucide-react";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT - ABSTRACT DESIGN */}
        
        <div className="about-visual">

          <div className="about-large-circle"></div>
          <div className="about-small-circle circle-top"></div>
          <div className="about-small-circle circle-bottom"></div>

          <div className="about-dot dot-one"></div>
          <div className="about-dot dot-two"></div>
          <div className="about-dot dot-three"></div>

          <div className="about-visual-content">
            <span className="about-number">01</span>

            <div className="about-code">
              &lt;/&gt;
            </div>

          <TypingText text="ABOUT ME" speed={100} lineBreak={true} className="section-heading" />
          </div>

          <div className="about-line line-one"></div>
          <div className="about-line line-two"></div>

        </div>
        


        {/* RIGHT - CONTENT */}

        <ScrollAnimation type="right" className="hero-content-animation">
        <div className="about-content">

          <p className="about-subtitle">ABOUT ME</p>

          <h2>
            Hello, I'm{" "}
            <span>Faraaz Haider</span>
          </h2>

          <div className="about-accent"></div>

          <p className="about-text">
            I'm a Software Engineering student with a strong interest in
            web development, cloud computing, and emerging technologies.
          </p>

          <p className="about-text">
            I enjoy building practical web applications and continuously
            improving my development skills by working on real-world
            projects. I like turning ideas into useful and meaningful
            digital experiences.
          </p>

          <p className="about-text">
            Currently, I'm expanding my knowledge of modern web
            technologies, AWS cloud services, and artificial intelligence
            while developing projects that help me grow as a software
            engineer.
          </p>


          {/* HIGHLIGHTS */}
          <div className="about-highlights">

           <ScrollAnimation delay={150}>
             <div className="about-highlight">
              <strong>05+</strong>
              <span>Semesters</span>
            </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>

            <div className="about-highlight">
              <strong>WEB</strong>
              <span>Development</span>
            </div>
            </ScrollAnimation>

            <ScrollAnimation delay={450}>

            <div className="about-highlight">
              <strong>AWS</strong>
              <span>Cloud</span>
            </div>
            </ScrollAnimation>

          </div>



        </div>
        </ScrollAnimation>

      </div>
    </section>
  );
};

export default About;