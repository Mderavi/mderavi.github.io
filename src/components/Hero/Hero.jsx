import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <h2>Innovative Front-End Developer</h2>
        <p>
          I’m a front end developer based in sunny Sydney, Australia. I enjoy
          Transfering design into engaging, user-friendly digital experience.
          When I’m not coding, you’ll find me cooking, gardening or jugging out.
        </p>
      </div>
      <div className="hero-img">
        <div>
          

          <img src="./assets/img/hero.png" alt="Front end developer" />
        </div>
        
        <div>
        <div className="tech-icon">
            <img src="./assets/img/react-e.png" alt="react icon" />
          </div>
          <div className="tech-icon">
            <img src="./assets/img/css-e.png" alt="css icon" />
          </div>

          <div className="tech-icon">
            <img src="./assets/img/html-5-e.png" alt="html 5 icon" />
          </div>

          <div className="tech-icon">
            <img src="./assets/img/js.png" alt="html 5 icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
