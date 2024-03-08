import React from 'react';
import '../Css/Skills.css';
import webDesign from '../Images/webdesign.jpeg';
import frontend from "../Images/Developer Frontend.jpeg";
import backend from "../Images/Developer Back-end.jpeg";

export default function Skills() {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I Do</span>
      <span className='skillDesc'>
        Are you looking to bring your ideas to life? I specialize in building high-quality products, features, and websites tailored to your needs. Take a look at some of my previous work to see the quality and creativity I bring to each project. If you're impressed and have a project that needs coding, I'm here to help. Don't hesitate to reach out, and let's turn your vision into reality.
      </span>

      <div className='skillBars'>
        <div className='skillBar'>
          <img src={webDesign} alt='Web Design' className='skillBarImage' />
          <div className='skillBarText'>
            <h2>Web Design</h2>
            <p>I specialize in creating visually stunning and user-friendly designs that captivate audiences and enhance user experiences. From wireframing to prototyping, I ensure every detail is meticulously crafted to perfection.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={frontend} alt='Frontend Development' className='skillBarImage' />
          <div className='skillBarText'>
            <h2>Frontend Development</h2>
            <p>I excel in frontend development, bringing designs to life with clean, efficient, and responsive code. With expertise in HTML, CSS, and JavaScript frameworks like React, I ensure seamless interactions and exceptional performance across devices.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={backend} alt='Backend Development' className='skillBarImage' />
          <div className='skillBarText'>
            <h2>Backend Development</h2>
            <p>I'm proficient in backend development, creating robust and scalable server-side solutions using technologies like Node.js, Express, and databases like MongoDB. From handling data storage to implementing authentication, I ensure your application's backend is secure and efficient.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
