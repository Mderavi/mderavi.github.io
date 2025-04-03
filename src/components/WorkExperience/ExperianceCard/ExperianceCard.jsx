import React from "react";
import "./ExperianceCard.scss";

const ExperianceCard = ({ details }) => {
  return (
    <div className="work-experience-card">
      <h6>{details.title}</h6>
      <div className="work-duration">{details.date}</div>
      <uL>
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </uL>
    </div>
  );
};

export default ExperianceCard;
