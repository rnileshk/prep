import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";
import { FaVideo, FaBook, FaCode } from "react-icons/fa";

const topics = [
  { id: 1, name: "Introduction to DBMS" },
  { id: 2, name: "Data Models" },
  { id: 3, name: "Entity-Relationship Model" },
  { id: 4, name: "Relational Model" },
  { id: 5, name: "SQL and Relational Algebra" },
  { id: 6, name: "Normalization" },
  { id: 7, name: "Transaction Management" },
  { id: 8, name: "Concurrency Control" },
  { id: 9, name: "Indexing and Hashing" },
  { id: 10, name: "Query Processing and Optimization" },
  { id: 11, name: "NoSQL and Modern Databases" },
  { id: 12, name: "Distributed Databases" },
];

const Dbms = () => {

  const navigate = useNavigate();
  
  const handleStart = (id) => {
    navigate(`/study-material/dbms/topic/${id}`);
  };
  
  return (
    <div style={{ padding: "2rem", backgroundColor: "#ecf5f7" }}>
        <h1 style={{ textAlign: "center", color: "#333" }}>Database Management System (DBMS)</h1>
        <Divider component="" style={{ marginTop: "1rem", color: "#fff" }} />
      <div className="dsa">
        <img src="/dbms.jpg" alt="dsa" className="dsa-image" />
        <div className="overview">
            <h2>Course Overview</h2>
            <p>
                The Database Management System (DBMS) course provides a comprehensive understanding of how data is stored, organized, managed, and retrieved in computer systems. It introduces the fundamental concepts, models, and techniques used in modern database systems.
            </p>
        </div>
      </div>
      <Divider component="" style={{ marginTop: "1rem" }} />
      <div className="dsa">
        <div className="overview">
            <h2 className="text-2xl font-bold mb-4">✅ Key Highlights:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Understanding the role and importance of databases in software applications</li>
        <li>Learning data models: Hierarchical, Network, Relational, and Object-Oriented</li>
        <li>Writing and optimizing SQL (Structured Query Language) queries</li>
        <li>Concepts of normalization, ER modeling, and schema design</li>
        <li>Transaction management and concurrency control</li>
        <li>Indexing, hashing, and query optimization techniques</li>
        <li>Introduction to NoSQL and modern database architectures</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">🎯 Course Objectives:</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>To understand the need for databases and how DBMS solves data storage problems</li>
        <li>To design and implement relational databases using SQL</li>
        <li>To apply normalization and ER modeling techniques for efficient data modeling</li>
        <li>To learn how transactions and concurrency are handled in a DBMS</li>
        <li>To explore modern trends in databases like distributed DBMS and NoSQL</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">📌 Why Learn DBMS?</h2>
      <p className="mb-2">DBMS is a foundational subject in computer science and essential for careers in:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Backend and Full Stack Development</li>
        <li>Data Engineering</li>
        <li>Data Analysis and Business Intelligence</li>
        <li>System Design and Architecture</li>
      </ul>
        </div>
        <img src="/dbms.jpg" alt="dsa" className="dsa-images" style={{ width: "30rem"}} />
      </div>
      <Divider component="" style={{ marginTop: "1rem" }} />

      <div style={{ maxWidth: "950px", margin: "auto" }}>
            <h2 style={{ textAlign: "center", padding: "2rem", color: "#222" }}>DATABASE MANAGEMENT SYSTEM (DBMS)</h2>
            <div style={{ border: "1px solid #222", borderRadius: "10px", padding: "1rem", width: "100%" }}>
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
                  <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
                    <img src="/dbms.jpg" alt="" style={{ width: "50px", height: "50px" }} />
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
  )
}

export default Dbms
