import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { FaVideo, FaBook, FaCode } from "react-icons/fa";

const topics = [
  { id: 1, name: "HTML5 and Semantic Elements" },
  { id: 2, name: "CSS3 (Flexbox, Grid, Responsive Design)" },
  { id: 3, name: "JavaScript Fundamentals (ES6+ features)" },
  { id: 4, name: "DOM Manipulation and Event Handling" },
  { id: 5, name: "Asynchronous JavaScript (Promises, Async/Await, Callbacks)" },
  { id: 6, name: "RESTful APIs and AJAX" },
  { id: 7, name: "HTTP Protocol, Status Codes, and Web Security Basics (CORS, HTTPS)" },
  { id: 8, name: "Frontend Frameworks (React, Angular, Vue)" },
  { id: 9, name: "State Management (Redux, Context API)" },
  { id: 10, name: "Version Control with Git and GitHub" },
  { id: 11, name: "Package Managers and Build Tools (npm, Webpack, Babel)" },
  { id: 12, name: "Testing (Jest, React Testing Library, Unit and Integration Testing)" },
  { id: 13, name: "Web Performance Optimization" },
  { id: 14, name: "Backend Basics (Node.js, Express.js)" },
  { id: 15, name: "Databases (SQL, NoSQL - MongoDB)" },
  { id: 16, name: "Authentication and Authorization (JWT, OAuth)" },
  { id: 17, name: "Deployment and Hosting (Netlify, Vercel, AWS)" },
];

const WebDev = () => {
  const navigate = useNavigate();

  const handleStart = (id) => {
    navigate(`/study-material/web-dev/topic/${id}`);
  };

  return (
    <div style={{ padding: "2rem", backgroundColor: "#ecf5f7" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>
        Web Development
      </h1>
      <Divider component="" style={{ marginTop: "1rem", color: "#fff" }} />
      <div className="dsa">
        <img src="/web.jpg" alt="dsa" className="dsa-image" />
        <div className="overview">
          <h2>Course Overview</h2>
          <p>This comprehensive Web Development course equips learners with the essential skills to build modern, responsive, and dynamic websites and web applications. The course starts from foundational web technologies and progressively covers front-end and back-end development, version control, deployment, and best practices in security and performance optimization.</p>
        </div>
      </div>
      <Divider component="" style={{ marginTop: "1rem" }} />
      <div className="dsa">
        <div className="overview">
          <>
            <h1>Course Modules</h1>

      <section>
        <h2>Introduction to Web Development</h2>
        <ul>
          <li>What is Web Development?</li>
          <li>Overview of Frontend vs Backend</li>
          <li>Web Browsers and How the Web Works (HTTP/S, Client-Server Model)</li>
        </ul>
      </section>

      <section>
        <h2>HTML5 & CSS3 Fundamentals</h2>
        <ul>
          <li>HTML tags, semantic elements</li>
          <li>CSS basics: selectors, properties, box model</li>
          <li>Responsive design with Flexbox and CSS Grid</li>
          <li>Media queries for mobile-first design</li>
        </ul>
      </section>

      <section>
        <h2>JavaScript Essentials</h2>
        <ul>
          <li>Syntax, variables, data types, operators</li>
          <li>Functions, loops, conditionals</li>
          <li>DOM manipulation and events</li>
          <li>ES6+ features: arrow functions, template literals, destructuring, modules</li>
        </ul>
      </section>

      <section>
        <h2>Advanced JavaScript & Asynchronous Programming</h2>
        <ul>
          <li>Closures, callbacks, promises, async/await</li>
          <li>Fetch API and AJAX for server communication</li>
        </ul>
      </section>

      <section>
        <h2>Frontend Frameworks</h2>
        <ul>
          <li>Introduction to React.js (or Angular/Vue)</li>
          <li>Components, props, state, lifecycle methods</li>
          <li>React Router and SPA concepts</li>
          <li>State management (Context API or Redux basics)</li>
        </ul>
      </section>

      <section>
        <h2>Version Control with Git & GitHub</h2>
        <ul>
          <li>Git basics: commit, branch, merge</li>
          <li>Collaborating with GitHub: pull requests, issues</li>
        </ul>
      </section>

      <section>
        <h2>Backend Development Basics</h2>
        <ul>
          <li>Node.js and Express.js fundamentals</li>
          <li>RESTful API design principles</li>
          <li>Handling routes, requests, and middleware</li>
          <li>Introduction to databases (MongoDB/SQL)</li>
        </ul>
      </section>

      <section>
        <h2>Authentication & Security</h2>
        <ul>
          <li>User authentication techniques (JWT, sessions)</li>
          <li>Secure password storage (bcrypt)</li>
          <li>Protecting against common vulnerabilities (XSS, CSRF)</li>
        </ul>
      </section>

      <section>
        <h2>Testing & Debugging</h2>
        <ul>
          <li>Debugging JavaScript and React apps</li>
          <li>Writing unit and integration tests with Jest, React Testing Library</li>
        </ul>
      </section>

      <section>
        <h2>Deployment & Hosting</h2>
        <ul>
          <li>Deploying frontend apps (Netlify, Vercel)</li>
          <li>Backend deployment basics (Heroku, AWS)</li>
          <li>Environment variables and production best practices</li>
        </ul>
      </section>

      <section>
        <h2>Performance & Optimization</h2>
        <ul>
          <li>Web performance basics: caching, lazy loading</li>
          <li>SEO fundamentals and accessibility (a11y)</li>
          <li>Monitoring and analytics overview</li>
        </ul>
      </section>

      <section>
        <h1>Learning Outcomes</h1>
        <ul>
          <li>Create fully responsive websites using HTML, CSS, and JavaScript</li>
          <li>Build dynamic web applications using modern frontend frameworks like React</li>
          <li>Develop backend APIs and interact with databases</li>
          <li>Use Git for version control and collaborate in teams</li>
          <li>Deploy web applications on cloud platforms</li>
          <li>Understand and implement security best practices in web apps</li>
          <li>Optimize web applications for performance and accessibility</li>
        </ul>
      </section>
          </>
        </div>
        <img
          src="/web.jpg"
          alt="dsa"
          className="dsa-images"
          style={{ width: "30rem" }}
        />
      </div>
      <Divider component="" style={{ marginTop: "1rem" }} />

      <div style={{ maxWidth: "950px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", padding: "2rem", color: "#222" }}>
          Web Development Topics
        </h2>
        <div
          style={{
            border: "1px solid #222",
            borderRadius: "10px",
            padding: "1rem",
            width: "100%",
          }}
        >
          {topics.map((topic) => (
            <div
              key={topic.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
                margin: "0.5rem 0",
                background: "#f9f9f9",
                borderRadius: "8px",
              }}
            >
              <div
                style={{ display: "flex", gap: "2rem", alignItems: "center" }}
              >
                <img
                  src="/os.jpg"
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
                <div>
                  <h3 style={{ marginBottom: "0.5rem" }}>{topic.name}</h3>
                  <p>
                    <FaVideo /> {topic.videos} Videos &nbsp;
                    <FaBook /> {topic.articles} Articles &nbsp;
                    {/*<FaCode /> {topic.problems} Problems*/}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleStart(topic.id)}
                style={{
                  backgroundColor: "#28a745",
                  color: "white",
                  padding: "0.4rem 1rem",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Start
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDev;