import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          Proj 
        </Link>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/' className='nav-links'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links'>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/booking' className='nav-links'>
              Booking
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/header' className='nav-links'>
              Header
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links'>
              Contact
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/login' className='nav-links'>
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;