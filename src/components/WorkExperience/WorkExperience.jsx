import React from "react";
import "./WorkExperience.css";
import ExperianceCard from "./ExperianceCard/ExperianceCard";
import { WORK_EXPERIENCE } from "../../utils/data";

const WorkExperience = () => {
  return (
    <section className="experiance-container">
      <h5>Work Experience</h5>
      <div className="experience-content">
        {WORK_EXPERIENCE.map((item) => (
          <ExperianceCard key={item.title} details={item} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
