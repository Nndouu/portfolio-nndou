import React from "react";

const Projects = () => {
  return (
    <section className='projects'>
      <h2>Projects</h2>
      {/* Project Contecter */}
      <div className='contacter'>
        <h3>Contacter</h3>
        <div className='row'>
          <div className='col-md-6'>img</div>
          <div className='col-md-6'>info</div>
        </div>
      </div>
      {/* Project G-finder */}
      <div className='g-finder'>
        <h3>G-finder</h3>
        <div className='row'>
          <div className='col-md-6'>img</div>
          <div className='col-md-6'>info</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
