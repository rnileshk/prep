import React, { useEffect, useState, useCallback } from 'react';
import AddResume from './AddResume';
import { useUser } from '@clerk/clerk-react';
import GlobalApi from './GlobalApi';
import ResumeCardItem from './ResumeCardItem';
import './Dashboard.css';

function Dashboard() {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  // Get user resumes
  const GetResumesList = useCallback(() => {
    const email = user?.primaryEmailAddress?.emailAddress;
    if (!email) return;

    GlobalApi.GetUserResumes(email)
      .then(resp => {
        const data = resp?.data?.data || [];
        console.log(data);
        setResumeList(data);
      })
      .catch(error => {
        console.error('Failed to fetch resumes:', error);
        setResumeList([]);
      });
  }, [user]);

  useEffect(() => {
    if (user) {
      GetResumesList();
    }
  }, [user, GetResumesList]);

  return (
    <div className="dashboard-wrapper">
      <h2 className="dashboard-title">My Resume</h2>
      <p className="dashboard-subtitle">
        Start creating an AI-generated resume for your next job role
      </p>

      <div className="resume-grid">
        <AddResume />

        {resumeList.length > 0
          ? resumeList.map((resume, index) => (
              <ResumeCardItem
                resume={resume}
                key={index}
                refreshData={GetResumesList}
              />
            ))
          : [1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="resume-placeholder animate-pulse"
              />
            ))}
      </div>
    </div>
  );
}

export default Dashboard;
