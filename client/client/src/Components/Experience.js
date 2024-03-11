import React,{useRef} from 'react';
import logo from "../Images/Cellulant-logo.jpg";
import facebook from "../Images/Facebook-icon.jpeg";
import twitter from "../Images/twitter-icon.jpeg";
import github from "../Images/Github.jpeg";
import instagram from "../Images/instagram.jpeg";
import "../Css/Experience.css";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


export default function Experience() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d5d9gjs', 'template_7rbb78k', form.current, {
        publicKey: 'NNfkLo0zoAZ75x1Jo',
      })
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Email sent successfully',
          })
          console.log('SUCCESS!');
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
          console.log('FAILED...', error.text);
        },
      );
  };
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
      <div id='contact'>
        <h1 className='contactTitle'>Contact Me</h1>
        <span className='contactDesc'> If you have any questions or would like to work together, please fill out the form below.</span>
        <form ref={form} className='contactForm' onSubmit={sendEmail}>
          <input type='text' placeholder=' Your Name' name='your_name' className='name' />
          <input type='email' placeholder='Your Email' className='email' name='your_email' />
          <textarea name='message' placeholder='Your Message' className='msg' rows ='5' />
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
