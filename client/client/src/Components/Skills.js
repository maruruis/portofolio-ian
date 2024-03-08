import React from 'react'
import '../Css/Skills.css'
import webDesign from '../Images/webdesign.jpeg'
import frontend from "../Images/Developer Frontend.jpeg"
import backend from "../Images/Developer Back-end.jpeg"


export default function Skills() {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do </span>
        <span className='skillDesc'>
            Are you looking to bring your ideas to life? I specialize in building high-quality products, features, and websites tailored to your needs. Take a look at some of my previous work to see the quality and creativity I bring to each project. If you're impressed and have a project that needs coding, I'm here to help. Don't hesitate to reach out and let's turn your vision into reality.
        </span>

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
