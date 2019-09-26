import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar bg-dark navbar-expand'>
      <div className='container'>
        <ul className='navbar-nav m-auto'>
          <li className='nav-item mx-3'>
            <Link className='nav-link text-light' to='/'>
              Home
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link className='nav-link text-light' to='/projects'>
              Projects
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link className='nav-link text-light' to='/skills'>
              Skills
            </Link>
          </li>
          <li className='nav-item mx-3'>
            <Link className='nav-link text-light' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
