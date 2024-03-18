import React from 'react';
import '../Css/Portfolio.css';
import flightFusion from '../Images/FlightFusion1.jpg';
import Airbnb from "../Images/BnB app.jpg";

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h2 className='portfolioTitle'>My Portfolio</h2>
      <span className='portfolioDesc'>
      Welcome to my portfolio! 👋 As a junior developer, I'm passionate about building great websites and applications.<br/> I'm eager to learn, grow, and make a positive impact in the world of web development.<br/> Explore my projects and let's connect!
      </span>
      <div className='portfolioCards'>
        <div className='portfolioCard'>
          <img src={flightFusion} alt='Flight Fusion Website' className='portfolioCardImage' />
          <div className='portfolioCardText'>
            <h2>Flight Fusion Website</h2>
            <p>A sleek and user-friendly website for booking flights, with advanced search features. A perfect companion for airlines.</p>
            <a href='https://flight-fusion-booking-website.vercel.app/' target='_blank' rel='noopener noreferrer' className='link'>View project</a>
            <a href='https://github.com/VictorMurithi/FlightFusion-booking-website' target='_blank' rel='noopener noreferrer' className='link'>View code</a>
          </div>
        </div>
        <div className='portfolioCard'>
          <img src={TuneTide} alt='BnB project ' className='portfolioCardImage' />
          <div className='portfolioCardText'>
            <h2>TuneTide Music</h2>
            <p>An interactive music platform that allows users to discover new artists, view albums, and Listen to their favourite tracks.</p>
            <a href='https://65b40a0c51be0c031dcbb855--incandescent-heliotrope-d56da9.netlify.app//' target='_blank' rel='noopener noreferrer' className='link'>View project</a>
            <a href='https://github.com/DanielMutuku-codedanstreak/Airbnb-react-flask-project' target='_blank' rel='noopener noreferrer' className='link'>View code</a>
          </div>
        </div>
      </div>
    </section>
  );
}
