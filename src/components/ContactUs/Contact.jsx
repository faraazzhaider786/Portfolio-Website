import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          {/* Decorative shapes */}
          <div className="contact-circle circle-one"></div>
          <div className="contact-circle circle-two"></div>
          <div className="contact-dot dot-one"></div>
          <div className="contact-dot dot-two"></div>

          <div className="contact-left-content">
            <p className="contact-subtitle">GET IN TOUCH</p>

            <h2>
              Let's
              <br />
              Connect.
            </h2>

            <p className="contact-description">
              Have a project in mind, an opportunity, or just want to
              say hello? I'd love to hear from you. Feel free to reach
              out and let's start a conversation.
            </p>

            <div className="contact-divider"></div>

            <p className="connect-title">FIND ME ONLINE</p>

            <div className="social-profiles">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/faraazzhaider786"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-card"
              >
                <div className="profile-icon linkedin-icon">
                  in
                </div>

                <div className="profile-info">
                  <span>LinkedIn</span>
                  <small>Connect with me</small>
                </div>

                <span className="profile-arrow">↗</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/faraazzhaider786"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-card"
              >
                <div className="profile-icon github-icon">
                  GH
                </div>

                <div className="profile-info">
                  <span>GitHub</span>
                  <small>View my projects</small>
                </div>

                <span className="profile-arrow">↗</span>
              </a>

              {/* Gmail */}
              <a
                href="mailto:haiderz.faraz@gmail.com"
                className="profile-card"
              >
                <div className="profile-icon gmail-icon">
                  @
                </div>

                <div className="profile-info">
                  <span>Email</span>
                  <small>Send me a message</small>
                </div>

                <span className="profile-arrow">↗</span>
              </a>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

          <div className="contact-form-wrapper">

            <p className="form-subtitle">CONTACT ME</p>

            <h3>Send Me a Message</h3>

            <p className="form-description">
              Fill out the form below and I'll get back to you as soon
              as possible.
            </p>

            <form className="contact-form">

              <div className="form-group">
                <label htmlFor="name">Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="send-button">
                Send Message
                <span>→</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;