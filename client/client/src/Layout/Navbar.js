import React from 'react';
import "../Css/Navbar.css";
import logo from "../Images/logo3.jpeg";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopLink'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-10} duration={500}className='desktopLink'>About</Link>
            <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500}className='desktopLink'>Portfolio</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-70} duration={500}className='desktopLink'>Experience</Link>
        </div>
        <button className='desktopBtn' onClick={() => {
          document.getElementById('experience').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
          }}>
            Contact Me
        </button>
    </nav>
  )
};

export default Navbar;