import React from "react";
import "./Experience.css";
import TypingText from "../TypingText/TypingText";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        {/* Section Header */}
        <div className="experience-header">
          <p className="experience-subtitle">MY PROFESSIONAL JOURNEY</p>

          <h2>
            Experience<span>.</span>
          </h2>

          <p className="experience-intro">
            A glimpse into my practical experience, responsibilities,
            and the technologies I worked with during my internship.
          </p>
        </div>

        {/* Experience Content */}
        <div className="experience-content">

          {/* Left Visual */}
          <div className="experience-visual">
            <div className="experience-circle circle-main"></div>
            <div className="experience-circle circle-small"></div>

            <div className="experience-dot dot-one"></div>
            <div className="experience-dot dot-two"></div>
            <div className="experience-dot dot-three"></div>

            <div className="experience-visual-content">
              <span className="experience-number">03</span>

              <div className="experience-symbol">
                &lt;/&gt;
              </div>

              <TypingText
                text="SOFTWARE ENGINEERING"
                speed={70}
                lineBreak={true}
                className="section-heading"
              />
              <br></br>
              <p>INTERNSHIP</p>
            </div>
          </div>

          {/* Experience Card */}
          <ScrollAnimation type="right" className="experience-card-animation">
            <div className="experience-card">

            <div className="experience-card-header">
              <div>
                <span className="experience-role">
                  SOFTWARE ENGINEER INTERN
                </span>

                <h3>
                  Pakistan Council of Scientific
                  <br />
                  and Industrial Research
                </h3>
              </div>

              <span className="experience-duration">
                6 WEEKS
              </span>
            </div>

            <div className="experience-divider"></div>

            <div className="experience-details">

              <div className="experience-detail">
                <span className="detail-label">ROLE</span>
                <strong>Software Engineer Intern</strong>
              </div>

              <div className="experience-detail">
                <span className="detail-label">DURATION</span>
                <strong>Six Weeks</strong>
              </div>

            </div>

            <div className="experience-responsibilities">
              <h4>RESPONSIBILITIES</h4>

              <ul>
                <li>
                  Developed web applications and application components
                  using React.js, JavaScript, HTML, and CSS.
                </li>

                <li>
                  Worked with Node.js and Express.js for backend
                  development and API-related functionality.
                </li>

                <li>
                  Worked with MongoDB for storing and managing
                  application data.
                </li>

                <li>
                  Performed manual testing of the DTSA project by
                  verifying implemented functionality against the
                  provided requirements and BRD.
                </li>

                <li>
                  Identified and reported functional issues during
                  the testing process.
                </li>
              </ul>
            </div>

            <div className="experience-technologies">
              <h4>TECHNOLOGIES USED</h4>

              <div className="technology-tags">
                <ScrollAnimation delay={100}><span>React.js</span></ScrollAnimation>
                <ScrollAnimation delay={200}><span>JavaScript</span></ScrollAnimation>
                <ScrollAnimation delay={300}><span>HTML</span></ScrollAnimation>
                <ScrollAnimation delay={400}><span>CSS</span></ScrollAnimation>
                <ScrollAnimation delay={500}><span>Node.js</span></ScrollAnimation>
                <ScrollAnimation delay={600}><span>Express.js</span></ScrollAnimation>
                <ScrollAnimation delay={700}><span>MongoDB</span></ScrollAnimation>
              </div>
            </div>

          </div>
          </ScrollAnimation>
        </div>

      </div>
    </section>
  );
};

export default Experience;