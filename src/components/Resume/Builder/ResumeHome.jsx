import React from 'react';
import { AtomIcon, Edit, Share2 } from 'lucide-react';
import './Home.css';

function ResumeHome() {
  return (
    <div className="home-wrapper">
      <section className="hero-section">
        <div className="container">
          <h1>
            Build Your Resume <span className="highlight">With AI</span>
          </h1>
          <p>
            Effortlessly Craft a Standout Resume with Our AI-Powered Builder
          </p>
          <a href="/dashboard" className="cta-button">
            Get Started
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </section>

      <section className="features-section">
        <h2>How it Works?</h2>
        <p className="subtitle">
          Give mock interview in just 3 simple easy steps
        </p>

        <div className="feature-cards">
          <div className="card">
            <AtomIcon className="icon" />
            <h3>Write prompt for your form</h3>
            <p>
              Provide a clear and concise prompt to generate a smart resume
              form using AI.
            </p>
          </div>

          <div className="card">
            <Edit className="icon" />
            <h3>Edit Your Form</h3>
            <p>
              Customize your form inputs, make changes as needed, and
              personalize your details.
            </p>
          </div>

          <div className="card">
            <Share2 className="icon" />
            <h3>Share & Accept Responses</h3>
            <p>
              Share your form with recruiters and start accepting responses in
              real-time.
            </p>
          </div>
        </div>

        <a href="/dashboard" className="get-started-btn">
          Get Started Today
        </a>
      </section>
    </div>
  );
}

export default ResumeHome;
