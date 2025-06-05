import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { FaVideo, FaBook, FaCode } from "react-icons/fa";

const topics = [
  { id: 1, name: "Basics of Computer Networks" },
  { id: 2, name: "OSI and TCP/IP Models" },
  { id: 3, name: "IP Addressing and Subnetting" },
  { id: 4, name: "MAC Address and ARP Protocol" },
  { id: 5, name: "TCP vs UDP" },
  { id: 6, name: "HTTP, HTTPS, FTP, SMTP, DNS, DHCP" },
  { id: 7, name: "Routing and Switching Concepts" },
  { id: 8, name: "Congestion Control and Flow Control" },
  { id: 9, name: "Socket Programming Basics" },
  { id: 10, name: "Network Security Fundamentals (SSL, Firewalls, Encryption)",},
  { id: 11, name: "Wireless Networking and Mobile IP" },
  { id: 12, name: "Client-Server Architecture and REST APIs" },
];

const ComputerN = () => {
  const navigate = useNavigate();

  const handleStart = (id) => {
    navigate(`/study-material/computer-network/topic/${id}`);
  };

  return (
    <div style={{ padding: "2rem", backgroundColor: "#ecf5f7" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Computer Network</h1>
      <Divider component="" style={{ marginTop: "1rem", color: "#fff" }} />
      <div className="dsa">
        <img src="/cn.jpg" alt="dsa" className="dsa-image" />
        <div className="overview">
          <h2>Course Overview</h2>
          <p>
            The Computer Networks course provides a comprehensive understanding
            of how data is transmitted and managed across interconnected
            computer systems. It covers the principles, protocols, and
            architecture of networks ranging from small local area networks
            (LANs) to large-scale wide area networks (WANs) and the internet.
            Students will explore the OSI and TCP/IP models, learn about network
            layers, and understand how data moves from one device to another.
            This course also dives into practical concepts like IP addressing,
            routing, switching, network security, and protocols like HTTP, FTP,
            TCP, and UDP. Whether you are aiming for a role in network
            engineering, cybersecurity, DevOps, or system administration, this
            course forms a solid foundation for mastering how communication
            happens in digital systems.
          </p>
        </div>
      </div>
      <Divider component="" style={{ marginTop: "1rem" }} />
      <div className="dsa">
        <div className="overview">
          <h2>About The Course</h2>
          <div>
            <h2>✅ Key Highlights:</h2>
            <ul>
              <li>
                Understanding the structure and functions of computer networks
              </li>
              <li>Detailed study of OSI and TCP/IP protocol models</li>
              <li>Working with network devices: routers, switches, hubs</li>
              <li>IP addressing, subnetting, and routing concepts</li>
              <li>Protocols like TCP, UDP, HTTP, FTP, DNS, DHCP</li>
              <li>
                Network security principles: firewalls, encryption, secure
                communication
              </li>
              <li>Introduction to wireless networks and cloud networking</li>
            </ul>

            <h2>🎯 Course Objectives:</h2>
            <ul>
              <li>
                To understand how data is transferred across networked systems
              </li>
              <li>
                To explore the functionalities of each layer in the network
                models
              </li>
              <li>
                To apply concepts of IP addressing, subnetting, and routing
                practically
              </li>
              <li>
                To gain hands-on knowledge of communication protocols and packet
                flow
              </li>
              <li>
                To develop a foundational knowledge of network security and
                management
              </li>
            </ul>

            <h2>📌 Why Learn Computer Networks?</h2>
            <p>Knowledge of Computer Networks is critical for careers in:</p>
            <ul>
              <li>Network & Systems Administration</li>
              <li>Cybersecurity</li>
              <li>Cloud Infrastructure & DevOps</li>
              <li>Software & Web Development (especially backend)</li>
              <li>IoT and Embedded Systems</li>
            </ul>
          </div>
        </div>
        <img src="/cn.jpg" alt="dsa" className="dsa-images" style={{ width: "30rem"}}/>
      </div>
      <Divider component="" style={{ marginTop: "1rem" }} />

      <div style={{ maxWidth: "950px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", padding: "2rem", color: "#222" }}>
          DATA STRUCTURE AND ALGORITHMS
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
                  src="/cn.jpg"
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

export default ComputerN;