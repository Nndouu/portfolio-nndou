import React from "react";

const Gfinder = () => {
  return (
    <div className='g-finder'>
      <h3>G-finder</h3>
      <div className='row'>
        <div className='col-md-6'>img</div>
        <div className='col-md-6'>
          <h4 className='text-primary mb-3'>
            A web application that could search Github users and get their
            information and repositories
          </h4>
          <p className='text-light'>
            • Used CSS3, Sass, HTML5, JavaScript, React.js, React hooks,
            Bootstrap, Responsive design for front-end development
          </p>
          <p className='text-light'>
            • Used Context API for state management, Animate.css for animations
          </p>
          <p className='text-light'>
            • Getting raw data from GitHub Developer API
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gfinder;
