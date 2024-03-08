import React from 'react';
import '../Css/Portfolio.css';
import flightFusion from '../Images/FlightFusion1.jpg';
import TuneTide from "../Images/TuneTide2.jpg";

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h2 className='portfolioTitle'>My Portfolio</h2>
      <span className='portfolioDesc'>
        I take pride in my work. Here are some of my projects.
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
          <img src={TuneTide} alt='TuneTide Music' className='portfolioCardImage' />
          <div className='portfolioCardText'>
            <h2>TuneTide Music</h2>
            <p>An interactive music platform that allows users to discover new artists, create playlists, and share their favorite tracks with friends.</p>
            <a href='https://tune-tide-react-app-lt8c.vercel.app/' target='_blank' rel='noopener noreferrer' className='link'>View project</a>
            <a href='https://github.com/VictorMurithi/TuneTide-react-app' target='_blank' rel='noopener noreferrer' className='link'>View code</a>
          </div>
        </div>
      </div>
    </section>
  );
}
