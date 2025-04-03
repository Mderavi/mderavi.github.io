import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>what do you do?</h2>
        <p>
          I’m a front end developer based in sunny Sydney, Australia. I enjoy
          turning complex problems into the simple, beautiful and intuitive
          webpage. When I’m not coding, you’ll find me cooking, gardening or
          jugging out in the park.
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/img/react-e.png" alt="" />
          </div>

          <img src="./assets/img/md.jpg" alt="Front end developer" />
        </div>
        <div>
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
