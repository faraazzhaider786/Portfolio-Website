import React from "react";
import "./Education.css";

import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        {/* SECTION HEADER */}
        <div className="education-header">
          <p className="education-subtitle">MY JOURNEY</p>

          <h2>
            Education<span>.</span>
          </h2>

          <p className="education-intro">
            My academic journey and the foundation that continues to
            shape my skills and knowledge.
          </p>
        </div>


        {/* TIMELINE */}
        <div className="education-timeline">

          {/* EDUCATION ITEM 1 */}

          <ScrollAnimation delay={0}>
          <div className="education-item current">

            <div className="timeline-side">
              <span className="timeline-number">01</span>
              <div className="timeline-dot"></div>
            </div>

            <div className="education-card">

              <div className="education-card-top">
                <span className="education-date">
                  2024 — PRESENT
                </span>

                <span className="current-badge">
                  CURRENT
                </span>
              </div>

              <h3>
                Bachelor&apos;s in Software Engineering
              </h3>

              <h4>
                Comsats University Islamabad.
              </h4>

              <p>
                Currently pursuing my degree in Software Engineering,
                developing a strong foundation in software development,
                web technologies, and modern computing concepts.
              </p>

              <div className="education-tags">
                <span>Software Engineering</span>
                <span>Web Development</span>
                <span>Cloud Computing</span>
              </div>

              <div className="semester-highlight">
                <strong>05</strong>
                <span>Semesters Completed</span>
              </div>

            </div>
          </div>
          </ScrollAnimation>


          {/* EDUCATION ITEM 2 */}

          <ScrollAnimation delay={150}>
          <div className="education-item">

            <div className="timeline-side">
              <span className="timeline-number">02</span>
              <div className="timeline-dot"></div>
            </div>

            <div className="education-card">

              <div className="education-card-top">
                <span className="education-date">
                  2020 — 2022
                </span>
              </div>

              <h3>
                Intermediate
              </h3>

              <h4>
                Punjab Group of Colleges, Talagang
              </h4>

              <p>
                Completed intermediate education with a focus on
                building a strong academic foundation for higher
                education.
              </p>

            </div>
          </div>
          </ScrollAnimation>


        

        </div>


        {/* DECORATIVE ELEMENT */}
        <div className="education-decoration">
          <span>02</span>
        </div>

      </div>
    </section>
  );
};

export default Education;