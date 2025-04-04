import React, { useRef } from "react";
import "./WorkExperience.css";
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
  return (
    <section className="experiance-container">
      <h5>Work Experience</h5>
      <div className="experience-content">
        <div className="arrow-right">
          <span className="material-icons"> arrow_back_ios</span>
        </div>
        <div className="left-right">
          <span className="material-icons"> arrow_forward_ios</span>
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
