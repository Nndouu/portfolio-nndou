import React from "react";
import Contacter from "../projects/Contacter";
import Gfinder from "../projects/Gfinder";
import Portfolio from "../projects/Portfolio";

const Projects = () => {
  return (
    <section className='projects'>
      <h6 className='text-center'>View My Projects</h6>
      <h2 className='text-center'>Projects</h2>
      <div className='underline'></div>
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
