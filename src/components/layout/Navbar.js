import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  //Scroll spy state change
  const [homeColor, setHomeColor] = useState("nav-link text-light");
  const [navColor, setNavColor] = useState(
    "navbar navbar-expand navbar-dark fixed-top"
  );

  const handleHomeActive = () => {
    setNavColor("navbar navbar-expand fixed-top");
    setHomeColor("nav-link text-primary");
  };
  const handleHomeInactive = () => {
    setNavColor("navbar navbar-expand navbar-dark fixed-top");
    setHomeColor("nav-link text-light");
  };

  const [projectsColor, setProjectsColor] = useState("nav-link text-light");
  const handleProjectsActive = () => setProjectsColor("nav-link text-primary");
  const handleProjectsInactive = () => setProjectsColor("nav-link text-light");

  const [skillsColor, setSkillsColor] = useState("nav-link text-light");
  const handleSkillsActive = () => setSkillsColor("nav-link text-primary");
  const handleSkillsInactive = () => setSkillsColor("nav-link text-light");

  const [contactColor, setContactColor] = useState("nav-link text-light");
  const handleContactActive = () => setContactColor("nav-link text-primary");
  const handleContactInactive = () => setContactColor("nav-link text-light");

  return (
    <nav className={navColor}>
      <div className='container'>
        <ul className='navbar-nav m-auto'>
          <li className='nav-item mx-3'>
            <Link
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              duration={500}
              className={homeColor}
              onSetActive={handleHomeActive}
              onSetInactive={handleHomeInactive}
            >
              Home
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              duration={500}
              className={projectsColor}
              onSetActive={handleProjectsActive}
              onSetInactive={handleProjectsInactive}
            >
              Projects
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link
              activeClass='active'
              to='skills'
              spy={true}
              smooth={true}
              duration={500}
              className={skillsColor}
              onSetActive={handleSkillsActive}
              onSetInactive={handleSkillsInactive}
            >
              Skills
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              duration={500}
              className={contactColor}
              onSetActive={handleContactActive}
              onSetInactive={handleContactInactive}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
