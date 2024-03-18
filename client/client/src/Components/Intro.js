import React from 'react';
import '../Css/Intro.css';
import bg from '../Images/bg-remover.png';
import { Link } from 'react-scroll';

export default function Intro() {
  return (
    <section id='intro'>
      <div className='intro-content'>
        <div className='intro-text'>
          <span className='hello'>Hello,</span>
          <span className='introText'>
            I'm <span className='introName'>Ian</span>,<br />
            a Software Engineer
          </span>
          <p className='introPara'>
            Welcome to my portfolio! I'm a dedicated software engineer with a passion for crafting innovative solutions to real-world problems.
            With a keen eye for detail and a drive for excellence, I thrive on turning ideas into reality through elegant and efficient web applications.
          </p>
          <Link>
            <button className='introBtn'>Hire me</button>
          </Link>
        </div>
      </div>
      <img src={bg} alt='profile' className='bg-image' />
    </section>
  );
}
