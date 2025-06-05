import React from 'react';
import './ExperiencePreview.css';

function ExperiencePreview({ resumeInfo }) {
  return (
    <div className="experience-preview-container">
      <h2
        className="experience-heading"
        style={{ color: resumeInfo?.themeColor, fontSize: '1.5rem' }}
      >
        Professional Experience
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      {resumeInfo?.Experience?.map((experience, index) => (
        <div key={index} className="experience-entry">
          <h2
            className="experience-title"
            style={{ color: resumeInfo?.themeColor }}
          >
            {experience?.title}
          </h2>
          <h2 className="company-details">
            {experience?.companyName}, {experience?.city}, {experience?.state}
            <span className="experience-dates">
              {experience?.startDate} To{' '}
              {experience?.currentlyWorking ? 'Present' : experience.endDate}
            </span>
          </h2>
          <div
            className="experience-summary"
            dangerouslySetInnerHTML={{ __html: experience?.workSummery }}
          />
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
