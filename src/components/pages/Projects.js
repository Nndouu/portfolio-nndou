import React from "react";
import Contacter from "../projects/Contacter";
import Gfinder from "../projects/Gfinder";
import Portfolio from "../projects/Portfolio";
import JrOfficial from "../projects/JrOfficial";
import JrDashboard from "../projects/JrDashboard";

const Projects = () => {
  return (
    <section className='projects'>
      <div className='section-head'>
        <h6 className='text-center'>View My Projects</h6>
        <h2 className='text-center'>Projects</h2>
        <div className='underline'></div>
      </div>
      {/* Project JR Academy official site */}
      <JrOfficial />
      {/* Project JR Academy dashboard */}
      <JrDashboard />
      {/* Project Contecter */}
      <Contacter />
      {/* Project G-finder */}
      <Gfinder />
      {/* Project Portfolio */}
      <Portfolio />
    </section>
  );
};

export default Projects;
