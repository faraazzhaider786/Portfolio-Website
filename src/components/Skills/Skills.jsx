import React from "react";
import "./Skills.css";

const skills = [
  {
    name: "HTML5",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Git",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  
  {
  name: "WordPress",
  category: "CMS",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
},
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">

      <div className="skills-container">

        <div className="skills-heading">
          <p className="skills-subtitle">
            MY TECHNOLOGIES
          </p>

          <h2>Skills & Technologies</h2>

          <p className="skills-description">
            Technologies and tools I use to build modern,
            reliable and user-friendly applications.
          </p>
        </div>


        <div className="skills-grid">

          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>

              <div className="skill-icon">
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                />
              </div>

              <h3>{skill.name}</h3>

              <span>{skill.category}</span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;