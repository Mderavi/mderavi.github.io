import React, { useState } from "react";
import "./Skills.scss";
import { SKILLS } from "../../units/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillInfoCard from "./SkillCardInfo/SkillInfoCard";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-container">
      <h5>Technical Proficiancy</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>

        <div className="skills-info">
          <SkillInfoCard
            handeling={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

Skills.propTypes = {};

export default Skills;
