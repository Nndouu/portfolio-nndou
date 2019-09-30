import React from "react";

const Skills = () => {
  return (
    <section className='skills'>
      <div className='section-head'>
        <h6 className='text-center'>View My Skills</h6>
        <h2 className='text-center'>Skills</h2>
        <div className='underline'></div>
      </div>
      <div className='row'>
        <div className='col-md-10 mx-auto'>
          {/* Tech Skills*/}
          <h3>Tech Skills</h3>
          <p>
            • Front-End Development: CSS3, Sass, HTML5, AJAX, JavaScript,
            React.js, React Context API, React Hooks, Bootstrap, Semantic UI,
            Responsive design
          </p>
          <p>
            • Back-End Development: Node.js, Express, Mongoose, RESTful API,
            PHP, CodeIgniter
          </p>
          <p>• Database design and management: MySQL, MongoDB</p>
          <p>
            • Coding Languages: CSS3, HTML5, JavaScript, Python, SQL, PHP,
            MATLAB
          </p>
          <p>
            • Machine learning: PyTorch, TensorFlow, Pythonic libraries (NumPy,
            Panda, Scikit-learn etc), OpenCV
          </p>
          <p>• Tool: VSCode, Visual Studio, Eclipse, Jupyter Notebook</p>
          <p>• Cloud: AWS, Heroku</p>
          {/* UX Skills */}
          <h3>UX Skills</h3>
          <p>• Design Process: Conceptual Design, Interaction Design</p>
          <p>• Prototyping software: Mockplus, Balsamiq Mockups</p>
          <p>
            • Testing: TAM, SUS, Time on Task, A/B testing, Cognitive
            walkthrough, Heuristic evaluation
          </p>
          {/*Teamwork Skills */}
          <h3>Teamwork Skills</h3>
          <p>• Tool: Git, Github, Bitbucket, Trello</p>
          <p>• Methodology: Agile, Scrum</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
