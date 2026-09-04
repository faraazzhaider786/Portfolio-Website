import React from "react";
import "./Contact.css";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import TypingText from "../TypingText/TypingText";
import { Scroll } from "lucide-react";


const socialIcons = {
  linkedin:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",

  github:
    "https://cdn.simpleicons.org/github",

  whatsapp:
    "https://cdn.simpleicons.org/whatsapp",

  gmail:
    "https://cdn.simpleicons.org/gmail",
};
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

            <TypingText
              text="Let's Connect."
              speed={70}
              lineBreak={true}
              className="section-heading"
            />

            <p className="contact-description">
              Have a project in mind, an opportunity, or just want to
              say hello? I'd love to hear from you. Feel free to reach
              out and let's start a conversation.
            </p>

            <div className="contact-divider"></div>

            <p className="connect-title">FIND ME ONLINE</p>

            <div className="social-profiles">

  {/* LinkedIn */}
  <ScrollAnimation delay={200}>
    <a
      href="https://www.linkedin.com/in/faraazzhaider786/"
      target="_blank"
      rel="noopener noreferrer"
      className="profile-card"
    >
      <div className="profile-icon linkedin-icon">
        <img
          src={socialIcons.linkedin}
          alt="LinkedIn"
        />
    </div>

    <div className="profile-info">
      <span>LinkedIn</span>
      <small>Connect with me</small>
    </div>

    <span className="profile-arrow">↗</span>
  </a>
  </ScrollAnimation>

  {/* GitHub */}
  <ScrollAnimation delay={400}>
    <a
      href="https://github.com/faraazzhaider786"
      target="_blank"
    rel="noopener noreferrer"
    className="profile-card"
  >
    <div className="profile-icon github-icon">
      <img
        src={socialIcons.github}
        alt="GitHub"
      />
    </div>

    <div className="profile-info">
      <span>GitHub</span>
      <small>View my projects</small>
    </div>

    <span className="profile-arrow">↗</span>
  </a>
  </ScrollAnimation>
  {/* Gmail */}

  <ScrollAnimation delay={600}>
    <a
      href="mailto:haiderz.faraz@gmail.com"
      className="profile-card"
    >
      <div className="profile-icon gmail-icon">
        <img
          src={socialIcons.gmail}
          alt="Gmail"
        />
    </div>

    <div className="profile-info">
      <span>Email</span>
      <small>Send me a message</small>
    </div>

    <span className="profile-arrow">↗</span>
  </a>
  </ScrollAnimation>
  {/* WhatsApp */}
  <ScrollAnimation delay={800}>
    <a
      href="https://wa.me/923192152362"
      target="_blank"
      rel="noopener noreferrer"
    className="profile-card"
  >
    <div className="profile-icon whatsapp-icon">
      <img
        src={socialIcons.whatsapp}
        alt="WhatsApp"
      />
    </div>

    <div className="profile-info">
      <span>WhatsApp</span>
      <small>Chat with me</small>
    </div>

    <span className="profile-arrow">↗</span>
  </a>
  </ScrollAnimation>
</div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
        <ScrollAnimation delay={200}>
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
          </ScrollAnimation>

        </div>

      </div>
    </section>
  );
};

export default Contact;