import React from 'react';
import '../Css/Intro.css';
import bg from '../Images/bg-remove.png';
import { Link } from 'react-scroll';

export default function Intro() {
  return (
    <section id='intro'>
      <div className='intro-content'>
        <span className='hello'>Hello,</span>
        <span className='IntroText'>
          I'm <span className='introName'>Victor</span>
          <br />
          Software Engineer
        </span>
        <p className='introPara'>
          I'm a software engineer with a passion for learning and<br/> creating web applications that solve real-world problems.
        </p>
        <Link>
          <button className='introBtn'>Hire me</button>
        </Link>
      </div>
      <div className="image-container">
        <img src={bg} alt='profile' className='bg-image' />
      </div>
    </section>
  );
}
