import React from 'react';
import '../Css/Portfolio.css';

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h2 className='portfolioTitle'>My Portfolio</h2>
      <span className='portfolioDesc'>
        I take pride in my work. Here are some of my projects.
      </span>
      <div className='portfolioCards'>
        <div className='portfolioCard'>
          <img src='' alt='Flight Fusion Website' className='portfolioCardImage' />
          <div className='portfolioCardText'>
            <h2>Flight Fusion Website</h2>
            <p>A sleek and user-friendly website for booking flights, with advanced search features. A perfect companion for airlines.</p>
          </div>
        </div>
        <div className='portfolioCard'>
          <img src='' alt='TuneTide Music' className='portfolioCardImage' />
          <div className='portfolioCardText'>
            <h2>TuneTide Music</h2>
            <p>An interactive music platform that allows users to discover new artists, create playlists, and share their favorite tracks with friends.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

