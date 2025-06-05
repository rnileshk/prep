import React from 'react';
import './SkillsPreview.css'; // Import the CSS file

function SkillsPreview({ resumeInfo }) {
  return (
    <div className="skills-preview">
      <h2
        className="title"
        style={{ color: resumeInfo?.themeColor }}
      >
        Skills
      </h2>
      <hr
        className="divider"
        style={{ borderColor: resumeInfo?.themeColor }}
      />

      <div className="skills-grid">
        {resumeInfo?.skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h2 className="skill-name">{skill.name}</h2>
            <div className="skill-bar-bg">
              <div
                className="skill-bar"
                style={{
                  backgroundColor: resumeInfo?.themeColor,
                  width: `${skill?.rating * 20}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPreview;
