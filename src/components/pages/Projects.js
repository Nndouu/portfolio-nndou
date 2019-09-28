import React from "react";
import Contacter from "../projects/Contacter";
import Gfinder from "../projects/Gfinder";

const Projects = () => {
  return (
    <section className='projects'>
      <h2 className='text-primary my-5 text-center'>Projects</h2>
      {/* Project Contecter */}
      <Contacter />
      {/* Project G-finder */}
      <Gfinder />
    </section>
  );
};

export default Projects;
