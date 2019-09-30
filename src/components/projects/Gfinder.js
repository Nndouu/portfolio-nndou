import React from "react";
import GfinderImg from "../../images/project-images/gfinder_1.png";
import Tilt from "react-parallax-tilt";

const Gfinder = () => {
  return (
    <div className='g-finder'>
      <h3>G-finder</h3>
      <div className='row'>
        <div className='col-md-6'>
          {" "}
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor='rgba(16, 20, 20, 0.5)'
            glarePosition='all'
            scale='1.25'
            transitionSpeed={2000}
            tiltAxis='y'
          >
            <div className='img-overlay'></div>
            <img src={GfinderImg} alt='GfinderImg'></img>
          </Tilt>
          <div className='row mt-2 mb-5'>
            <div className='col-md-6'>
              <a
                href='https://contact-book-nndou.herokuapp.com/'
                class='btn btn-project'
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
                class='btn btn-project'
              >
                <svg>
                  <rect x='0' y='0' fill='none' width='100%' height='100%' />
                </svg>
                View Code
              </a>
            </div>
          </div>
        </div>
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
