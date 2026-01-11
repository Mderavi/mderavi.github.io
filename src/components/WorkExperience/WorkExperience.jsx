import React, { useRef } from "react";
import "./WorkExperience.scss";
import ExperianceCard from "./ExperianceCard/ExperianceCard";
import { WORK_EXPERIENCE } from "../../utils/data";
import Slider from "react-slick/lib/slider";

const WorkExperience = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slideRight = () => {
    sliderRef.current.slickNext();
  };
  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <section id="experience" className="experiance-container">
      <h5>Work Experience</h5>
      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <span className="material-icons">arrow_forward_ios</span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-icons">arrow_back_ios</span>
        </div>
      </div>

      <div className="experience-content">
        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperianceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
