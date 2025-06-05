import React from 'react';
import './EducationalPreview.css';

function EducationalPreview({ resumeInfo }) {
  return (
    <div className="education-preview-container">
      <h2
        className="education-heading"
        style={{ color: resumeInfo?.themeColor }}
      >
        Education
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      {resumeInfo?.education.map((education, index) => (
        <div key={index} className="education-entry">
          <h2
            className="university-name"
            style={{ color: resumeInfo?.themeColor }}
          >
            {education.universityName}
          </h2>
          <h2 className="degree-major">
            {education?.degree} in {education?.major}
            <span className="education-dates">
              {education?.startDate} - {education?.endDate}
            </span>
          </h2>
          <p className="education-description">{education?.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationalPreview;
