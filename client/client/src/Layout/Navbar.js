import React from 'react';
import "../Css/Navbar.css";
import logo from "../Images/logo3.jpeg";
import phoneIcon from "../Images/phone icon.jpeg";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link className='desktopLink'>Home</Link>
            <Link className='desktopLink'>About</Link>
            <Link className='desktopLink'>Portfolio</Link>
            <Link className='desktopLink'>Resume</Link>
        </div>
        <button className='desktopBtn'>
            Contact Me
        </button>
    </nav>
  )
};

export default Navbar;