import React from "react";
import Contacter from "../projects/Contacter";
import Gfinder from "../projects/Gfinder";
import Portfolio from "../projects/Portfolio";

const Projects = () => {
  return (
    <section className='projects'>
      <h2 className='text-primary my-5 text-center'>Projects</h2>
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
