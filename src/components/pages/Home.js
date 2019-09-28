import React from "react";

const Home = () => {
  return (
    <section className='home'>
      <div className='home-background'>
        <div className='overlay'>
          {/* Background animation */}
          <ul className='circles'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className='home-content text-center'>
        <p className='text-light mb-0'>Hello. I'm</p>
        <h1 className='text-light title'>YIPING NIU</h1>
        <h3 className='text-primary'>Web Developer</h3>
        <div className='text-center mt-5'>
          <a
            href='https://www.linkedin.com/in/yiping-niu/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>Linkedin</span>
          </a>
          <a
            href='https://github.com/Nndouu'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span>Github</span>
          </a>
          <a href='#!'>
            <span>Email</span>
          </a>
          <a href='#!'>
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
