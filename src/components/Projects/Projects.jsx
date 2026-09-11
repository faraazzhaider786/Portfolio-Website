import React from "react";
import "./Projects.css";
import freshAndDirect from "../../assets/fresh-and-direct.png";
import portfolioWebsite from "../../assets/portfolio-website.png";
import travelAndTourism from "../../assets/pak-travel-and-tourism.png";
import pacmanGame from "../../assets/pacman-game.jpg";
import researchProjectManagement from "../../assets/Research-Project.png";

import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const projects = [
  {
    title: "Pakistan Travel and Tourism Portal",
    description:
      "A modern tourism website designed to showcase Pakistan's destinations, attractions, festivals, and tourism information.",
    image: travelAndTourism,
    technologies: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    liveLink: "#",
    githubLink: "https://github.com/faraazzhaider786/Pakistan-Travel-and-Tourism-Portal.git",
  },
  {
    title: "Research Project Management System",
    description:
      "An authenticated web application for managing PCSIR research projects, reference data, approval workflows, employee progress reporting, and project deadline extensions.",
    image: researchProjectManagement,
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "JWT authentication",
      "Password hashing with bcryptjs",
      
    ],
    liveLink: "#",
    githubLink: "https://github.com/faraazzhaider786/Research-Project-Management-System-PCSIR-.git",
  },

  {
    title: "Fresh and Direct - Grocery E-commerce Website",
    description:
      "A responsive grocery e-commerce website where users can browse products, manage their cart, and interact with an online shopping interface.",
    image: freshAndDirect,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Github",

    
    ],
    liveLink: "https://fresh-and-direct.vercel.app/",
    githubLink: "https://github.com/faraazzhaider786/Fresh_and_Direct_Frontend.git",
  },

  {
    title: "Personal Portfolio",
    description:
      "A modern responsive portfolio website created to showcase my skills, projects, education, and professional experience.",
    image: portfolioWebsite,
    technologies: [
      "React.js",
      "JavaScript",
      "CSS",
      "Vite",
    ],
    liveLink: "https://farazhaider.me",
    githubLink: "https://github.com/faraazzhaider786/Portfolio-Website.git",
  },

  {
    title: "Pacman Game",
    description:
      "A fully playable Pac-Man game developed in Java using object-oriented programming and Java Swing. The game features real-time movement, ghost AI, scoring, lives, wrap-around tunnels, and game reset mechanics.",
    image: pacmanGame,
    technologies: [
      "Java",
      "OOP",
      "Java Swing ",
      "GUI Development",
      "Event Handling",
    ],
    liveLink: "#",
    githubLink: "https://github.com/faraazzhaider786/Pacman-Java-Game.git",
  },


  
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">

      {/* =========================
          YELLOW HEADER
      ========================== */}

      <div className="projects-header">


        <div className="projects-heading-container">

          <div className="projects-heading">
            <p className="projects-label">
              <span></span>
              MY WORK
            </p>

            <h2>
              My Projects<span>.</span>
            </h2>
          </div>

          <p className="projects-intro">
            Here are some of my projects where I've turned
            ideas into real, functional and impactful solutions.
          </p>

        </div>

        {/* Decorative shapes */}

        <div className="header-circle header-circle-one"></div>
        <div className="header-circle header-circle-two"></div>

        <div className="header-dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>


      {/* =========================
          PROJECTS GRID
      ========================== */}

      <div className="projects-container">

        <div className="projects-grid">

         {projects.map((project, index) => (
  <ScrollAnimation
    key={index}
    delay={index * 120}
  >
    <article className="project-card">

      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />

        <div className="project-number">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology, techIndex) => (
            <span key={techIndex}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-buttons">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-live-button"
          >
            <span>Live Demo</span>
            <span className="button-arrow">↗</span>
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-github-button"
          >
            <span>GitHub</span>
            <span className="github-symbol">GH</span>
          </a>
        </div>
      </div>

    </article>
  </ScrollAnimation>
))}

        </div>


        {/* =========================
            GITHUB CTA
        ========================== */}

        <div className="projects-more">

          <div>
            <p>WANT TO SEE MORE?</p>

            <h3>
              Explore more of my work
              <span>.</span>
            </h3>
          </div>

          <a
            href="https://github.com/faraazzhaider786"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-github-link"
          >
            Visit My GitHub
            <span>↗</span>
          </a>

        </div>

      </div>

    </section>
  );
};

export default Projects;