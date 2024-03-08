import React from 'react'
import '../Css/Skills.css'
import webDesign from '../Images/webdesign.jpeg'
import frontend from "../Images/Developer Frontend.jpeg"
import backend from "../Images/Developer Back-end.jpeg"


export default function Skills() {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do </span>
        <span className='skillDesc'> I can help you build a product , feature or website. Look through some of my work. If you like what you see and have a project you need coded, don’t hesitate to contact me.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={webDesign} alt='webDesign'  className='skillBarImage'/>
                <div className='skillBarText'>
                    <h2> Web Design</h2>
                    <p> I can help you build a product , feature or website.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={frontend} alt='frontend'  className='skillBarImage'/>
                <div className='skillBarText'>
                    <h2> Frontend Developer</h2>
                    <p> I can help you build a product , feature or website.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={backend} alt=' backend'  className='skillBarImage'/>
                <div className='skillBarText'>
                    <h2> Backend Developer</h2>
                    <p> I can help you build a product , feature or website.</p>
                </div>
            </div>
        </div>  
    </section>
  )
}
