import React from "react";
import portfolioImg from "../../images/project-images/portfolio_1.png";
import Tilt from "react-parallax-tilt";

const Portfolio = () => {
  return (
    <div className='project'>
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
            <div className='img-overlay'></div>
            <img src={portfolioImg} alt='portfolioImg'></img>
          </Tilt>
          {/* Buttoms */}
          <div className='row mt-2 mb-5'>
            <div className='col-md-6'>
              <button
                href='https://contact-book-nndou.herokuapp.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-project'
                disabled
              >
                <svg>
                  <rect x='0' y='0' fill='none' width='100%' height='100%' />
                </svg>
                This Project
              </button>
            </div>
            <div className='col-md-6'>
              <a
                href='https://github.com/Nndouu/portfolio-nndou'
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
        <div className='col-md-6'>
          <h4 className='text-primary mb-3'>My portfolio website.</h4>
          <div className='project-info'>
            <p className='text-light'>
              • Used CSS3, Sass, HTML5, JavaScript, React.js, React hooks,
              Bootstrap, Responsive design for front-end development
            </p>
            <p className='text-light'>
              • Used Node.js, MongoDB, Express, Mongoose, RESTful API for
              back-end development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
