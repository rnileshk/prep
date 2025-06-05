import { Button } from '@mui/material';
import { ResumeInfoContext } from './ResumeInfoContext';
import ResumePreview from './ResumePreview';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import GlobalApi from './GlobalApi';

import './ViewResume.css';

function ViewResume() {
  const [resumeInfo, setResumeInfo] = useState();
  const { resumeId } = useParams();

  useEffect(() => {
    GetResumeInfo();
  }, []);

  const GetResumeInfo = () => {
    GlobalApi.GetResumeById(resumeId).then((resp) => {
      console.log(resp.data.data);
      setResumeInfo(resp.data.data);
    });
  };

  const HandleDownload = () => {
    window.print();
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print" className="view-resume-container">
        <h2 className="header-text">
          Congrats! Your Ultimate AI generated Resume is ready!
        </h2>
        <p className="subtext">
          Now you are ready to download your resume and you can share unique resume URL with your friends and family
        </p>
        <div className="button-group">
          <Button onClick={HandleDownload}>Download</Button>

          <Link to={'/dashboard'}>
            <Button>Dashboard</Button>
          </Link>
        </div>
      </div>

      <div className="view-resume-container">
        <div id="print-area">
          <ResumePreview />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default ViewResume;
