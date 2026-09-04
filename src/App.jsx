import React from "react";

import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Education from "./components/Education/Education.jsx";
import Contact from "./components/ContactUs/Contact.jsx";



function App() {
  return (
    <>
      <Navbar />

      <main>

        {/* Hero */}
        <Hero />

        {/* About */}
        
          <About />
        

        {/* Skills */}
        
          <Skills />
        

        {/* Experience */}
        
          <Experience />
       

        {/* Projects */}
       
          <Projects />
       

        {/* Education */}
        
          <Education />
        

        {/* Contact */}
        
          <Contact />
        

      </main>
    </>
  );
}

export default App;