import React from "react";
import contacterImg from "../../images/project-images/contacter_1.png";
import Tilt from "react-parallax-tilt";

const Portfolio = () => {
  return (
    <div className='contacter'>
      <h3>Portfolio</h3>
      <div className='row'>
        <div className='col-md-6'>
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor='#fff'
            glarePosition='all'
            scale='1.25'
            transitionSpeed={2000}
            tiltAxis='y'
          >
            <img src={contacterImg} alt='contacterImg'></img>
          </Tilt>
          <button className='btn btn-primary'>View Project</button>
        </div>
        <div className='col-md-6'>
          <h4 className='text-primary mb-3'>
            A web application that user can register, login, which they could
            use this app to keep and manage their contact details with others{" "}
          </h4>
          <p className='text-light'>
            • Used CSS3, Sass, HTML5, JavaScript, React.js, React hooks,
            Bootstrap, Responsive design for front-end development
          </p>
          <p className='text-light'>
            • Used Context API for state management, and used
            react-transition-group and Animate.css for animations
          </p>
          <p className='text-light'>
            • Used Node.js, MongoDB, Express, Mongoose, RESTful API for back-end
            development. Used JWT for authentication
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
