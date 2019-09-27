import React from "react";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand fixed-top'>
      <div className='container'>
        <ul className='navbar-nav m-auto'>
          <li className='nav-item mx-3'>
            <Link
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              duration={500}
              className='nav-link text-primary'
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
              className='nav-link text-light'
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
              className='nav-link text-light'
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
              className='nav-link text-light'
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
