import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Ministry of Tourism Website",
    description:
      "A modern tourism website designed to showcase Pakistan's destinations, attractions, festivals, and tourism information.",
    image: "/projects/tourism.png",
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
    githubLink: "#",
  },

  {
    title: "E-Commerce Grocery Store",
    description:
      "A responsive grocery e-commerce website where users can browse products, manage their cart, and interact with an online shopping interface.",
    image: "/projects/grocery.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
    ],
    liveLink: "#",
    githubLink: "#",
  },

  {
    title: "Personal Portfolio",
    description:
      "A modern responsive portfolio website created to showcase my skills, projects, education, and professional experience.",
    image: "/projects/portfolio.png",
    technologies: [
      "React.js",
      "JavaScript",
      "CSS",
      "Vite",
    ],
    liveLink: "#",
    githubLink: "#",
  },

  {
    title: "Project Management System",
    description:
      "A web-based system designed to manage projects, activities, work plans, and related project information.",
    image: "/projects/project-management.png",
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    liveLink: "#",
    githubLink: "#",
  },

  {
    title: "Nearby Attractions",
    description:
      "A location-based tourism feature that allows users to discover attractions near their current location and navigate to selected places.",
    image: "/projects/nearby.png",
    technologies: [
      "React.js",
      "JavaScript",
      "Geolocation API",
      "Google Maps",
    ],
    liveLink: "#",
    githubLink: "#",
  },

  {
    title: "Web Application",
    description:
      "A responsive web application developed to practice modern frontend development and create a clean user experience.",
    image: "/projects/project6.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
    ],
    liveLink: "#",
    githubLink: "#",
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

            <article
              className="project-card"
              key={index}
            >

              {/* Project Image */}

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


              {/* Project Content */}

              <div className="project-content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                {/* Technologies */}

                <div className="project-technologies">

                  {project.technologies.map(
                    (technology, techIndex) => (

                      <span key={techIndex}>
                        {technology}
                      </span>

                    )
                  )}

                </div>


                {/* Buttons */}

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