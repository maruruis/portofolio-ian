import React from 'react';
import logo from "../Images/Cellulant-logo.jpg";
import facebook from "../Images/Facebook-icon.jpeg";
import twitter from "../Images/twitter-icon.jpeg";
import github from "../Images/Github.jpeg";
import instagram from "../Images/instagram.jpeg";
import "../Css/Experience.css";

export default function Experience() {
  return (
    <section id='experience'>
      <div id='experienceContent'>
        <h2 className='experienceTitle'>Experience</h2>
        <p className='experienceDesc'>Here are some places where I have had the opportunity to work:</p>
      </div>
      <div className='experienceCards'>
        <div className='experienceCard'>
          <img src={logo} alt='Company' className='experienceCardImage' />
          <p className='experienceCardText'>Cellulant, Kenya</p>
          <p className='experienceCardText'>Intern Software Engineer</p>
          <p className='experienceCardText'>May 2022 - August 2022</p>
        </div>
      </div>
      <div className='contact'>
        <h1 className='contactTitle'>Contact Me</h1>
        <span className='contactDesc'> If you have any questions or would like to work together, please fill out the form below.</span>
        <form className='contactForm'>
          <input type='text' placeholder=' Your Name' className='name' />
          <input type='email' placeholder='Your Email' className='email' />
          <textarea placeholder='Your Message' className='msg' rows ='5' />
          <button className='contactBtn' type='submit' value='Send'>Send</button>
          <div className='links'>
            <img src={facebook} alt='facebook' className='logo'/>
            <img src={instagram} alt='instagram' className='logo'/>
            <img src={twitter} alt='twitter' className='logo'/>
            <img src={github} alt='github' className='logo'/>
          </div>
        </form>
      </div>
    </section>
  );
}
