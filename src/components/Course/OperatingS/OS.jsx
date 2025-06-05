import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { FaVideo, FaBook, FaCode } from "react-icons/fa";

const topics = [
  { id: 1, name: "Introduction to Operating System" },
  { id: 2, name: "Processes and Threads" },
  { id: 3, name: "CPU Scheduling Algorithms" },
  { id: 4, name: "Process Synchronization" },
  { id: 5, name: "Deadlock Detection and Prevention" },
  { id: 6, name: "Memory Management" },
  { id: 7, name: "Paging and Segmentation" },
  { id: 8, name: "Virtual Memory and Page Replacement" },
  { id: 9, name: "File System Interface and Implementation" },
  { id: 10, name: "Disk Scheduling Algorithms" },
  { id: 11, name: "System Calls and OS Services" },
  { id: 12, name: "Types of Operating Systems and Architectures" },
];

const OS = () => {
  const navigate = useNavigate();

  const handleStart = (id) => {
    navigate(`/study-material/os/topic/${id}`);
  };

  return (
    <div style={{ padding: "2rem", backgroundColor: "#ecf5f7" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>
        Operating System (OS)
      </h1>
      <Divider component="" style={{ marginTop: "1rem", color: "#fff" }} />
      <div className="dsa">
        <img src="/os.jpg" alt="dsa" className="dsa-image" />
        <div className="overview">
          <h2>Course Overview</h2>
          <p>
            The Operating System (OS) course provides a comprehensive
            understanding of the core software that manages computer hardware
            and software resources. As a critical component in computer science,
            this subject forms the backbone of modern computing devices — from
            personal computers and smartphones to large-scale servers and
            embedded systems. Through this course, students will explore how an
            operating system functions as an intermediary between users and the
            computer hardware. Topics covered include process management, memory
            management, file systems, I/O handling, and system security. It also
            delves into CPU scheduling algorithms, synchronization techniques,
            and deadlock handling, which are essential for designing efficient
            and reliable systems. Students will gain practical insights into how
            popular operating systems like Windows, Linux, and Unix operate,
            including the design of real-time and distributed operating systems.
            By understanding system calls, kernel operations, and resource
            allocation, learners will be equipped to build or work with robust
            software systems in real-world applications.
          </p>
        </div>
      </div>
      <Divider component="" style={{ marginTop: "1rem" }} />
      <div className="dsa">
        <div className="overview">
          <>
            <h3>✅ What You Will Learn</h3>
            <ul>
              <li>
                The role and purpose of operating systems in computer systems.
              </li>
              <li>Managing processes, threads, and CPU scheduling.</li>
              <li>
                Solving synchronization problems using semaphores, monitors, and
                mutexes.
              </li>
              <li>
                Techniques for deadlock prevention, detection, and recovery.
              </li>
              <li>
                Memory management including paging, segmentation, and virtual
                memory.
              </li>
              <li>
                Basics of file systems, disk scheduling, and I/O management.
              </li>
              <li>
                Architecture and use cases of different types of operating
                systems.
              </li>
            </ul>
            <h3>✅ Key Highlights:</h3>
            <ul>
              <li>
                Understanding the purpose and functions of an operating system
              </li>
              <li>
                Learning how OS manages processes, memory, files, and hardware
              </li>
              <li>
                In-depth study of process scheduling algorithms, threading, and
                synchronization
              </li>
              <li>
                Concepts of deadlock detection, prevention, and recovery
                techniques
              </li>
              <li>
                Study of memory management, including paging, segmentation, and
                virtual memory
              </li>
              <li>
                Insights into file systems, disk management, and system calls
              </li>
              <li>
                Overview of modern OS architectures like Linux, Unix, Windows,
                and real-time systems
              </li>
            </ul>

            <h3>🎯 Course Objectives:</h3>
            <ul>
              <li>
                To explain the fundamental role of an operating system in
                managing hardware and software
              </li>
              <li>
                To analyze and implement process management and scheduling
                techniques
              </li>
              <li>
                To understand synchronization problems and how OS handles
                concurrency
              </li>
              <li>
                To explore memory allocation techniques and virtual memory
                concepts
              </li>
              <li>
                To study file systems, I/O management, and disk scheduling
                algorithms
              </li>
              <li>
                To provide insights into the design and functioning of modern
                operating systems
              </li>
            </ul>

            <h3>📌 Why Learn Operating Systems?</h3>
            <ul>
              <li>System Programming and Kernel Development</li>
              <li>Backend and Embedded Systems Development</li>
              <li>Cybersecurity and System Design Roles</li>
              <li>
                Preparing for Technical Interviews in Product-Based Companies
              </li>
            </ul>
          </>
        </div>
        <img
          src="/os.jpg"
          alt="dsa"
          className="dsa-images"
          style={{ width: "30rem" }}
        />
      </div>
      <Divider component="" style={{ marginTop: "1rem" }} />

      <div style={{ maxWidth: "950px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", padding: "2rem", color: "#222" }}>
          OPERATING SYSTEM (OS)
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

export default OS;
