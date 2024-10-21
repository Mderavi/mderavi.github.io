import React from "react";
import "./SkillInfoCard.scss";

const SkillInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>
    </div>
  );
};

export default SkillInfoCard;
