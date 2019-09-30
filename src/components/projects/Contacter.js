import React from "react";
import contacterImg from "../../images/project-images/contacter_1.png";
import Tilt from "react-parallax-tilt";

const Contacter = () => {
  return (
    <div className='project'>
      <h3>Contacter</h3>
      <div className='row'>
        <div className='col-md-6'>
          {/* Project Img */}
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor='rgba(16, 20, 20, 0.3)'
            glarePosition='all'
            scale='1.25'
            transitionSpeed={2000}
            tiltAxis='y'
          >
            <div className='img-overlay'></div>
            <img src={contacterImg} alt='contacterImg'></img>
          </Tilt>
          {/* Buttoms */}
          <div className='row mt-2 mb-5'>
            <div className='col-md-6'>
              <a
                href='https://contact-book-nndou.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-project'
              >
                <svg>
                  <rect x='0' y='0' fill='none' width='100%' height='100%' />
                </svg>
                View Project
              </a>
            </div>
            <div className='col-md-6'>
              <a
                href='https://github.com/Nndouu/contact-book'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-project'
              >
                <svg>
                  <rect x='0' y='0' fill='none' width='100%' height='100%' />
                </svg>
                View Code
              </a>
            </div>
          </div>
        </div>
        {/* Project Info */}
        <div className='col-md-6'>
          <h4 className='text-primary mb-3'>
            A web application that user can register, login, which they could
            use this app to keep and manage their contact details with others{" "}
          </h4>
          <div className='project-info'>
            <p>
              • Used CSS3, Sass, HTML5, JavaScript, React.js, React hooks,
              Bootstrap, Responsive design for front-end development
            </p>
            <p>
              • Used Context API for state management, and used
              react-transition-group and Animate.css for animations
            </p>
            <p>
              • Used Node.js, MongoDB, Express, Mongoose, RESTful API for
              back-end development. Used JWT for authentication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacter;
