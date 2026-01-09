import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <h2>Innovative Front-End Developer</h2>
        <p>
          I'm a front end developer based in sunny Sydney, Australia. I enjoy
          transforming design into engaging, user-friendly digital experiences.
          When I'm not coding, you'll find me cooking, gardening or jogging out.
        </p>
      </div>
      <div className="hero-img">
        <div>
          <img src="/assets/img/hero.png" alt="Front end developer" />
        </div>
        <div>
          <div className="tech-icon">
            <img src="/assets/img/react-e.png" alt="React.js icon" />
          </div>
          <div className="tech-icon">
            <img src="/assets/img/css-e.png" alt="CSS icon" />
          </div>

          <div className="tech-icon">
            <img src="/assets/img/html-5-e.png" alt="HTML5 icon" />
          </div>

          <div className="tech-icon">
            <img src="/assets/img/js.png" alt="JavaScript icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
