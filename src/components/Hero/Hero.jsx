import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
   <section className="hero-container">
    <div className="hero-content">
    <h2>what do you do?</h2>
    <p>what do you like?d</p>
    </div>
      <div className='hero-img'>
        <div>
          <div className='tech-icon'>
            <img src='./assets/img/react-e.png' alt=""/>
          </div>


          <img src='./assets/img/md.jpg' alt='Front end developer'/>

        </div>
        <div>
            <div className='tech-icon'>
                <img src='./assets/img/css-e.png' alt="css icon"/>
            </div>
      
     
            <div className='tech-icon'>
                <img src='./assets/img/html-5-e.png' alt="html 5 icon"/>
            </div>
      
        
            <div className='tech-icon'>
                <img src='./assets/img/js.png' alt="html 5 icon"/>
            </div>
        </div>
      </div>
   </section>
  )
}

export default Hero;