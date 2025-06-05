import React from "react";


export default function AboutUs() {
  const teamMembers = [
    {
      name: "Nilesh",
      role: "Team Leader & Project Coordinator",
      img: "/nilesh.jpg",
      desc: "Nilesh Final-year Computer Science student responsible for planning, task allocation, and integration. Nilesh led the development and vision of the InterviewPrep project with a focus on usability and impact for CS job aspirants and engineers. He coordinated the team, set deadlines, and ensured smooth execution of the project. Nilesh also contributed to the backend development using neon postgreSQL, Strapi, handle Generative AI, building Mock Interview and Coding practise, ensuring a responsive and user-friendly interface.",
    },
    {
      name: "Pradeep",
      role: "Research, Content Specialist & UI/UX Designer",
      img: "/pradeep.jpg",
      desc: "Pradeep contributed to both the structure and style of InterviewPrep. He curated core CS content and designed user-friendly interfaces with a focus on clarity, responsiveness, and intuitive navigation to enhance the user experience. Pradeep also worked on the frontend using React, ensuring that the platform is visually appealing and easy to use.",
    },
    {
      name: "Niranjan",
      role: "Frontend Developer",
      img: "/nj.jpg",
      desc: "Niranjan handled the frontend implementation of the platform using React and Node.js. He worked on routing, component logic, and backend connectivity to bring InterviewPrep to life. Niranjan also integrated the backend with the frontend, ensuring that data flows seamlessly and the user experience is smooth.",
    }
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <div className="about-content">
        <p>
          Welcome to <strong>InterviewPrep</strong> — a focused, comprehensive, and practical platform built to guide aspiring engineers through the complex landscape of technical interviews.
        </p>
        <p>
          Interviews for top tech roles go beyond just solving problems. They test your logic, your ability to think under pressure, your system-level understanding, and how clearly you can explain your approach.
        </p>

        <h3 className="section-title">SDE Role Preparation</h3>
        <p>
          Our core offering is focused on Software Development Engineer interviews. From DSA to System Design Basics — we cover everything for interviews at top companies.
        </p>

        <h3 className="section-title">DevOps Engineering Path</h3>
        <p>
          Learn CI/CD, Docker, Kubernetes, AWS, Terraform, and more through our structured DevOps roadmap.
        </p>

        <h3 className="section-title">ML & Data Science Careers</h3>
        <p>
          Cover math foundations, ML theory, Python practice, and case studies to prepare for ML/Data Science interviews.
        </p>

        <h3 className="section-title">Core CS Subjects + System Design</h3>
        <p>
          Notes and practice problems in DBMS, OS, CN, Compiler Design. Includes real-world system design challenges.
        </p>

        <h3 className="section-title">Behavioral Rounds & Soft Skills</h3>
        <p>
          We help with HR prep — STAR method, resume tips, and mock interviews.
        </p>

        <h3 className="section-title">Built by Engineers, for Engineers</h3>
        <p>
          Built by engineers who've cracked interviews and mentored others. Practical guidance. No fluff.
        </p>

        <p>
          Whether you're preparing for placements or switching domains — InterviewPrep is your partner in growth.
        </p>

        <p className="closing-line">
          Learn smart. Code hard. Succeed with InterviewPrep.
        </p>
      </div>

      <div className="team-section">
        <h2 className="team-title">Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img className="team-image" src={member.img} alt={member.name} />
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-desc">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
