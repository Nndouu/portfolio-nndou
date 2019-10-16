import React from "react";
import jrOfficialImg from "../../images/project-images/JrOfficial_1.png";
import Tilt from "react-parallax-tilt";

const JrOfficial = () => {
  return (
    <div className='project'>
      <h3>JR Academy Official Site</h3>
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
            <img src={jrOfficialImg} alt='jrOfficialImg'></img>
          </Tilt>
          {/* Buttoms */}
          <div className='row mt-2 mb-5'>
            <div className='col-md-6'>
              <a
                href='https://jiangren.com.au/'
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
              <button
                href=''
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-project'
                disabled
              >
                <svg>
                  <rect x='0' y='0' fill='none' width='100%' height='100%' />
                </svg>
                Source Private
              </button>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <h4 className='text-primary mb-3'>
            The official website of JR Academy.
          </h4>
          <div className='project-info'>
            <p className='text-light'>• Project Management: Jira, bitbucket</p>
            <p className='text-light'>
              • Front-end development: CSS3, Sass, Pug(Jade), JavaScript ES6,
              React.js, Redux, Bootstrap, jQuery, Responsive design
            </p>
            <p className='text-light'>
              • Back-end development: Node.js, MongoDB, KeystoneJs, Mongoose,
              RESTful API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JrOfficial;
