import React from 'react';
import './PersonalDetailPreview.css';

function PersonalDetailPreview({ resumeInfo }) {
  return (
    <div className="personal-detail-preview">
      <h2
        className="name"
        style={{ color: resumeInfo?.themeColor }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2 className="job-title">{resumeInfo?.jobTitle}</h2>
      <h2
        className="address"
        style={{ color: resumeInfo?.themeColor }}
      >
        {resumeInfo?.address}
      </h2>

      <div className="contact-info">
        <h2 className="phone" style={{ color: resumeInfo?.themeColor }}>
          {resumeInfo?.phone}
        </h2>
        <h2 className="email" style={{ color: resumeInfo?.themeColor }}>
          {resumeInfo?.email}
        </h2>
      </div>

      <hr
        className="divider"
        style={{ borderColor: resumeInfo?.themeColor }}
      />
    </div>
  );
}

export default PersonalDetailPreview;
