import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";

const topicData = {
  1: {
    name: "Basics of Computer Networks",
    description:
      "Understand the fundamentals of networking, types of networks (LAN, WAN, MAN), and basic terminologies.",
  },
  2: {
    name: "OSI and TCP/IP Models",
    description:
      "Study the layered architecture of OSI and TCP/IP models and the functionalities of each layer.",
  },
  3: {
    name: "IP Addressing and Subnetting",
    description:
      "Learn about IPv4/IPv6 addressing, subnetting, CIDR notation, and related calculations.",
  },
  4: {
    name: "MAC Address and ARP Protocol",
    description:
      "Understand MAC addressing, ARP (Address Resolution Protocol), and how data is mapped at the link layer.",
  },
  5: {
    name: "TCP vs UDP",
    description:
      "Compare the connection-oriented TCP and the connectionless UDP, with use-case scenarios.",
  },
  6: {
    name: "HTTP, HTTPS, FTP, SMTP, DNS, DHCP",
    description:
      "Explore application-layer protocols used in web communication, email, and domain resolution.",
  },
  7: {
    name: "Routing and Switching Concepts",
    description:
      "Learn how routing and switching work, including routing protocols like RIP, OSPF, and BGP.",
  },
  8: {
    name: "Congestion Control and Flow Control",
    description:
      "Understand techniques to manage network traffic efficiently and ensure reliable data transmission.",
  },
  9: {
    name: "Socket Programming Basics",
    description:
      "Get introduced to network socket programming for client-server communication in C, Python, or Java.",
  },
  10: {
    name: "Network Security Fundamentals",
    description:
      "Learn about firewalls, SSL/TLS, encryption, authentication, and secure communication principles.",
  },
  11: {
    name: "Wireless Networking and Mobile IP",
    description:
      "Explore wireless technologies (Wi-Fi, Bluetooth), mobile IP concepts, and cellular network basics.",
  },
  12: {
    name: "Client-Server Architecture and REST APIs",
    description:
      "Understand how clients and servers communicate using HTTP and how REST APIs are structured and used.",
  },
};

// topic-specific dummy content
const dummyContentByTopic = {
  1: {
    videos: [
      {
        title: "Introduction to Computer Networks",
        url: "https://www.youtube.com/embed/4D55Cmj2t-A?si=wcHnlwC8FhcJjT29",
      },
    ],
    articles: [
      {
        title: "What is a Computer Network?",
        content:
          "A computer network is a collection of interconnected devices that can communicate with each other. Networks can be classified into various types based on their size, range, and architecture.",
      },
      {
        title: "Types of Computer Networks",
        content:
          "There are several types of computer networks, including Local Area Networks (LAN), Wide Area Networks (WAN), and Metropolitan Area Networks",
      },
      {
        title: "Network Topologies",
        content:
          "Network topology refers to the arrangement of different elements (links, nodes, etc.) in a computer network. Common topologies include star, ring, bus, and mesh.",
      },
      {
        title: "Network Protocols",
        content:
          "Network protocols are rules that govern how data is transmitted and received over a network. Common protocols include TCP/IP, HTTP, and FTP.",
      },
      {
        title: "Network Devices",
        content:
          "Network devices such as routers, switches, and hubs play a crucial role in managing data traffic and ensuring efficient communication between devices.",
      },
      {
        title: "Network Security Basics",
        content:
          "Network security involves measures to protect data during transmission and prevent unauthorized access. Key concepts include firewalls, encryption, and secure protocols.",
      },
    ],
  },
  2: {
    videos: [
      {
        title: "OSI Model Explained",
        url: "https://www.youtube.com/embed/1msEo8PIcbw?si=zTHAueR79UVJhkX",
      },
      {
        title: "TCP/IP Model Overview",
        url: "https://www.youtube.com/embed/GfaHdjApnhU?si=iKjBspXpcC8NOL0U",
      },
    ],
    articles: [
      {
        title: "Understanding the OSI Model",
        content:
          "The OSI (Open Systems Interconnection) model is a conceptual framework used to understand and implement network protocols in seven layers.",
      },
      {
        title: "TCP/IP Protocol Suite",
        content:
          "The TCP/IP model is a set of communication protocols used for the internet and similar networks, consisting of four layers.",
      },
      {
        title: "Layer Functions in OSI Model",
        content:
          "Each layer in the OSI model has specific functions, such as data encapsulation, addressing, and error handling.",
      },
      {
        title: "Comparison of OSI and TCP/IP Models",
        content:
          "While both models serve similar purposes, they differ in structure and implementation. The OSI model is more theoretical, while TCP/IP is practical.",
      },
      {
        title: "Importance of Layered Architecture",
        content:
          "Layered architecture simplifies network design and troubleshooting by separating concerns and allowing independent development of each layer.",
      },
      {
        title: "Real-World Applications of OSI and TCP/IP",
        content:
          "Understanding these models is crucial for network engineers, as they form the basis for most modern networking protocols and technologies.",
      },
    ],
  },
  3: {
    videos: [
      {
        title: "IP Addressing Basics",
        url: "https://www.youtube.com/embed/P7g--FJdUXE?si=A7KZg3AdgXHiF1Ho",
      },
      {
        title: "Subnetting Explained",
        url: "https://www.youtube.com/embed/rdb2ki4iGuo?si=ZhN8luzMvgWj7Di3",
      },
    ],
    articles: [
      {
        title: "IPv4 Addressing",
        content:
          "IPv4 addresses are 32-bit numbers used to identify devices on a network. They are typically represented in dotted-decimal format.",
      },
      {
        title: "IPv6 Addressing",
        content:
          "IPv6 addresses are 128-bit numbers designed to replace IPv4 due to the exhaustion of available IPv4 addresses. They are represented in hexadecimal format.",
      },
      {
        title: "Subnetting Techniques",
        content:
          "Subnetting involves dividing a network into smaller, manageable sub-networks. It helps optimize network performance and security.",
      },
      {
        title: "CIDR Notation",
        content:
          "Classless Inter-Domain Routing (CIDR) notation is a compact representation of an IP address and its associated network mask.",
      },
      {
        title: "IP Address Classes",
        content:
          "IP addresses are categorized into classes (A, B, C, D, E) based on their range and intended use. Class A is for large networks, while Class C is for smaller networks.",
      },
      {
        title: "Practical Applications of IP Addressing",
        content:
          "Understanding IP addressing is essential for configuring networks, troubleshooting connectivity issues, and implementing security measures.",
      },
      {
        title: "Subnetting Examples",
        content:
          "Practical examples of subnetting calculations, including determining network addresses, broadcast addresses, and valid host ranges.",
      },
      {
        title: "IP Addressing Challenges",
        content:
          "Common challenges in IP addressing include address conflicts, subnetting errors, and understanding NAT (Network Address Translation).",
      },
      {
        title: "Future of IP Addressing",
        content:
          "With the increasing number of devices connected to the internet, IPv6 adoption is crucial for ensuring continued growth and connectivity.",
      },
    ],
  },
  4: {
    videos: [
      {
        title: "Understanding MAC Addresses",
        url: "https://www.youtube.com/embed/SPf11NllNjw?si=z5__HtIqzMp-yn2J",
      },
      {
        title: "ARP Protocol Explained",
        url: "https://www.youtube.com/embed/IUSyV2BVh4A?si=HqAwRYwzq2EoWfUW",
      },
    ],
    articles: [
      {
        title: "What is a MAC Address?",
        content:
          "A Media Access Control (MAC) address is a unique identifier assigned to network interfaces for communications at the data link layer.",
      },
      {
        title: "How ARP Works",
        content:
          "The Address Resolution Protocol (ARP) is used to map IP addresses to MAC addresses, enabling devices to communicate over a local network.",
      },
      {
        title: "MAC Address Structure",
        content:
          "A MAC address consists of 48 bits, typically represented in hexadecimal format. It includes an Organizationally Unique Identifier (OUI) and a Network Interface Controller (NIC) specific part.",
      },
      {
        title: "ARP Request and Reply Process",
        content:
          "When a device needs to communicate with another device on the same network, it sends an ARP request to find the corresponding MAC address. The target device responds with its MAC address.",
      },
      {
        title: "Security Implications of ARP",
        content:
          "ARP is susceptible to various attacks, such as ARP spoofing, where an attacker sends false ARP messages to associate their MAC address with the IP address of another device.",
      },
      {
        title: "Practical Applications of MAC and ARP",
        content:
          "Understanding MAC addresses and ARP is essential for network configuration, troubleshooting connectivity issues, and implementing security measures.",
      },
      {
        title: "MAC Address Filtering",
        content:
          "MAC address filtering is a security measure that allows or denies network access based on the MAC addresses of devices.",
      },
      {
        title: "Future of MAC Addresses and ARP",
        content:
          "As networks evolve, understanding the role of MAC addresses and ARP in modern networking technologies remains crucial for network engineers.",
      },
    ],
  },
  5: {
    videos: [
      {
        title: "TCP vs UDP Overview",
        url: "https://www.youtube.com/embed/jJyXpMmXJI0?si=negyN8aWeiDH5jje",
      },
      {
        title: "TCP Connection Establishment",
        url: "https://www.youtube.com/embed/qIEHUUt2Wfc?si=2xHvj3vlb78e8BYJ",
      },
    ],
    articles: [
      {
        title: "TCP (Transmission Control Protocol)",
        content:
          "TCP is a connection-oriented protocol that ensures reliable data transmission through error checking and flow control.",
      },
      {
        title: "UDP (User Datagram Protocol)",
        content:
          "UDP is a connectionless protocol that allows for faster data transmission without the overhead of error checking and flow control.",
      },
      {
        title: "Comparison of TCP and UDP",
        content:
          "TCP provides reliability, ordered delivery, and congestion control, while UDP offers low latency and is suitable for real-time applications.",
      },
      {
        title: "Use Cases for TCP",
        content:
          "TCP is commonly used in applications where data integrity and order are crucial, such as web browsing, email, and file transfers.",
      },
      {
        title: "Use Cases for UDP",
        content:
          "UDP is often used in applications where speed is more important than reliability, such as video streaming, online gaming, and VoIP.",
      },
      {
        title: "TCP Connection Establishment Process",
        content:
          "TCP uses a three-way handshake to establish a connection between the client and server before data transmission begins.",
      },
      {
        title: "UDP Datagram Structure",
        content:
          "UDP packets are called datagrams and consist of a header followed by the data payload. The header includes source and destination ports.",
      },
      {
        title: "TCP Flow Control and Congestion Control",
        content:
          "TCP implements flow control using sliding window protocols and congestion control mechanisms to manage network traffic effectively.",
      },
      {
        title: "Security Considerations for TCP and UDP",
        content:
          "Both protocols have security implications, with TCP being more susceptible to SYN flooding attacks, while UDP can be exploited for amplification attacks.",
      },
      {
        title: "Future Trends in TCP and UDP",
        content:
          "As networking technologies evolve, understanding the strengths and weaknesses of TCP and UDP remains essential for network engineers and developers.",
      },
    ],
  },
  6: {
    videos: [
      {
        title: "HTTP and HTTPS Protocols",
        url: "https://www.youtube.com/embed/FmgIQBQ87fo?si=MrVsOlxE5H3V9ZKG",
      },
      {
        title: "FTP Protocol Overview",
        url: "https://www.youtube.com/embed/tOj8MSEIbfA?si=v1jD8_md_7QvxNb_",
      },
      {
        title: "SMTP and DNS Basics",
        url: "https://www.youtube.com/embed/vhfRArT11jc?si=n2iSi7aJw7kgMUUH",
      },
      {
        title: "DHCP Protocol Explained",
        url: "https://www.youtube.com/embed/agxRmj_4iEU?si=Vy9qzfXtWPP-lKoj",
      },
    ],
    articles: [
      {
        title: "HTTP (Hypertext Transfer Protocol)",
        content:
          "HTTP is the foundation of data communication on the World Wide Web, enabling the transfer of hypertext documents.",
      },
      {
        title: "HTTPS (HTTP Secure)",
        content:
          "HTTPS is the secure version of HTTP, using SSL/TLS to encrypt data transmitted between the client and server.",
      },
      {
        title: "FTP (File Transfer Protocol)",
        content:
          "FTP is a standard network protocol used to transfer files from one host to another over a TCP-based network.",
      },
      {
        title: "SMTP (Simple Mail Transfer Protocol)",
        content:
          "SMTP is a protocol for sending emails across networks, ensuring reliable delivery of messages.",
      },
      {
        title: "DNS (Domain Name System)",
        content:
          "DNS translates human-readable domain names into IP addresses, allowing users to access websites using easy-to-remember names.",
      },
      {
        title: "DHCP (Dynamic Host Configuration Protocol)",
        content:
          "DHCP automates the process of assigning IP addresses to devices on a network, simplifying network management.",
      },
      {
        title: "Security Considerations for HTTP and HTTPS",
        content:
          "Understanding the security implications of HTTP and HTTPS is crucial for protecting sensitive data during web communication.",
      },
      {
        title: "FTP Security and Alternatives",
        content:
          "While FTP is widely used, it has security vulnerabilities. Alternatives like SFTP and FTPS provide secure file transfer options.",
      },
      {
        title: "DNS Security (DNSSEC)",
        content:
          "DNSSEC adds a layer of security to DNS by enabling the verification of the authenticity of DNS responses.",
      },
      {
        title: "Future Trends in Web Protocols",
        content:
          "As web technologies evolve, understanding the latest developments in HTTP/2, HTTP/3, and other protocols is essential for web developers and network engineers.",
      },
      {
        title: "Practical Applications of Web Protocols",
        content:
          "Web protocols are fundamental to web development, network administration, and cybersecurity, making them essential knowledge for IT professionals.",
      },
    ],
  },
  7: {
    videos: [
      {
        title: "Routing Basics",
        url: "https://www.youtube.com/embed/rA0p0ouD3aE?si=outGxsbguPRrPlzb",
      },
      {
        title: "Switching Concepts",
        url: "https://www.youtube.com/embed/Cug52cpjM_g?si=9uQO9idFZsq4CB_4",
      },
    ],
    articles: [
      {
        title: "Understanding Routing",
        content:
          "Routing is the process of selecting paths in a network along which to send data packets. It involves routers that forward packets based on their destination IP addresses.",
      },
      {
        title: "Types of Routing Protocols",
        content:
          "There are several types of routing protocols, including static routing, dynamic routing (RIP, OSPF, BGP), and distance-vector protocols.",
      },
      {
        title: "Switching Fundamentals",
        content:
          "Switching is the process of directing data packets between devices on the same network. Switches operate at the data link layer and use MAC addresses to forward frames.",
      },
      {
        title: "VLANs (Virtual Local Area Networks)",
        content:
          "VLANs allow network administrators to segment networks into smaller, manageable sections, improving performance and security.",
      },
      {
        title: "Routing vs Switching",
        content:
          "While routing connects different networks, switching connects devices within the same network. Understanding both concepts is crucial for network design.",
      },
      {
        title: "Practical Applications of Routing and Switching",
        content:
          "Knowledge of routing and switching is essential for configuring networks, troubleshooting connectivity issues, and implementing security measures.",
      },
      {
        title: "Routing Tables and Forwarding",
        content:
          "Routers maintain routing tables that contain information about the paths to various network destinations, enabling efficient packet forwarding.",
      },
      {
        title: "Switching Techniques (Cut-through, Store-and-Forward)",
        content:
          "Switches can use different techniques to forward frames, such as cut-through (low latency) and store-and-forward (error checking).",
      },
      {
        title: "Security Considerations in Routing and Switching",
        content:
          "Understanding security implications, such as routing attacks and switch port security, is crucial for maintaining network integrity.",
      },
      {
        title: "Future Trends in Routing and Switching",
        content:
          "As networks evolve, understanding the latest developments in routing protocols (like SDN) and switching technologies is essential for network engineers.",
      },
    ],
  },
  8: {
    videos: [
      {
        title: "Congestion Control Techniques",
        url: "https://www.youtube.com/embed/zjfPh7sar_Y?si=z1qNvX9nXRb1Dax7",
      },
      {
        title: "Flow Control Mechanisms",
        url: "https://www.youtube.com/embed/ReQiSK8W3Ag?si=z2VIocl-gYO2tFSq",
      },
    ],
    articles: [
      {
        title: "Understanding Congestion Control",
        content:
          "Congestion control is a network management technique that prevents network congestion by controlling the amount of data sent over the network.",
      },
      {
        title: "Flow Control Basics",
        content:
          "Flow control ensures that a sender does not overwhelm a receiver with too much data at once, preventing data loss and ensuring smooth communication.",
      },
      {
        title: "TCP Congestion Control Algorithms",
        content:
          "TCP uses various algorithms like Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery to manage congestion effectively.",
      },
      {
        title: "UDP Flow Control Challenges",
        content:
          "Unlike TCP, UDP does not have built-in flow control mechanisms, making it essential for applications to implement their own flow control strategies.",
      },
      {
        title: "Practical Applications of Congestion and Flow Control",
        content:
          "Understanding these concepts is crucial for network engineers to design efficient networks and ensure reliable data transmission.",
      },
      {
        title: "Real-World Examples of Congestion Control",
        content:
          "Examples of congestion control in action include traffic shaping, load balancing, and Quality of Service (QoS) implementations.",
      },
      {
        title: "Future Trends in Network Congestion Management",
        content:
          "As networks evolve, understanding the latest developments in congestion control techniques and flow control mechanisms remains essential for network engineers.",
      },
      {
        title: "Security Considerations in Congestion and Flow Control",
        content:
          "Understanding the security implications of congestion control and flow control is crucial for maintaining network integrity and preventing denial-of-service attacks.",
      },
    ],
  },
  9: {
    videos: [
      {
        title: "Socket Programming Basics",
        url: "https://www.youtube.com/embed/XTVTlEhGS6w?si=dlvZI1YNZvEcUVE4",
      },
      {
        title: "Client-Server Communication",
        url: "https://www.youtube.com/embed/5PVMIRYRXLU?si=hhgamGZcpOFEQhFI",
      },
    ],
    articles: [
      {
        title: "Introduction to Socket Programming",
        content:
          "Socket programming is a way to enable communication between devices over a network using sockets, which are endpoints for sending and receiving data.",
      },
      {
        title: "TCP Sockets vs UDP Sockets",
        content:
          "TCP sockets provide reliable, connection-oriented communication, while UDP sockets offer faster, connectionless communication with no guarantee of delivery.",
      },
      {
        title: "Creating a Socket in Python",
        content:
          "A simple example of creating a socket in Python using the socket library, including binding, listening, and accepting connections.",
      },
      {
        title: "Client-Server Architecture",
        content:
          "Understanding the client-server model, where clients request services from servers that provide resources or data.",
      },
      {
        title: "Socket Programming in C",
        content:
          "An overview of socket programming in C, including socket creation, binding, listening, and handling client requests.",
      },
      {
        title: "Real-World Applications of Socket Programming",
        content:
          "Socket programming is used in various applications such as web servers, chat applications, and online games.",
      },
      {
        title: "Security Considerations in Socket Programming",
        content:
          "Understanding security implications such as encryption, authentication, and protection against common attacks like DDoS.",
      },
      {
        title: "Socket Programming Challenges",
        content:
          "Common challenges in socket programming include handling multiple clients, managing connections, and ensuring data integrity.",
      },
      {
        title: "Future Trends in Socket Programming",
        content:
          "As networking technologies evolve, understanding the latest developments in socket programming and its applications remains essential for developers.",
      },
    ],
  },
  10: {
    videos: [
      {
        title: "Network Security Fundamentals",
        url: "https://www.youtube.com/embed/NQ1cvwEvh44?si=HjNvyOaNHbV2dm0o",
      },
      {
        title: "SSL/TLS Basics",
        url: "https://www.youtube.com/embed/G9Px24hHlUA?si=DE_AX7Gi9PWb2RP9",
      },
    ],
    articles: [
      {
        title: "Introduction to Network Security",
        content:
          "Network security involves measures to protect data during transmission and prevent unauthorized access to networks.",
      },
      {
        title: "Understanding SSL/TLS Protocols",
        content:
          "SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are protocols that provide secure communication over a computer network.",
      },
      {
        title: "Firewalls and Their Role in Network Security",
        content:
          "Firewalls are security devices that monitor and control incoming and outgoing network traffic based on predetermined security rules.",
      },
      {
        title: "Encryption Techniques in Network Security",
        content:
          "Encryption is the process of converting data into a code to prevent unauthorized access, ensuring confidentiality and integrity.",
      },
      {
        title: "Authentication Methods in Network Security",
        content:
          "Authentication verifies the identity of users or devices before granting access to network resources, using methods like passwords, tokens, or biometrics.",
      },
      {
        title: "Common Network Security Threats",
        content:
          "Understanding common threats such as malware, phishing, DDoS attacks, and how to mitigate them is crucial for maintaining network security.",
      },
      {
        title: "Best Practices for Network Security",
        content:
          "Implementing best practices like regular updates, strong passwords, and user education can significantly enhance network security.",
      },
      {
        title: "Future Trends in Network Security",
        content:
          "As cyber threats evolve, staying updated with the latest trends in network security technologies and practices is essential for IT professionals.",
      },
      {
        title: "Real-World Applications of Network Security",
        content:
          "Network security is critical in various industries, including finance, healthcare, and government, to protect sensitive data and maintain trust.",
      },
    ],
  },
  11: {
    videos: [
      {
        title: "Wireless Networking Basics",
        url: "https://www.youtube.com/embed/Uz-RTurph3c?si=vOYjhWsuS7mKiQPZ",
      },
      {
        title: "Mobile IP Concepts",
        url: "https://www.youtube.com/embed/5yp3Ti47ZZc?si=yBx5VEQPzHSYrtsH",
      },
    ],
    articles: [
      {
        title: "Introduction to Wireless Networking",
        content:
          "Wireless networking allows devices to connect and communicate without physical cables, using radio waves or infrared signals.",
      },
      {
        title: "Understanding Mobile IP",
        content:
          "Mobile IP enables mobile devices to maintain a constant IP address while moving between different networks, ensuring seamless connectivity.",
      },
      {
        title: "Wi-Fi Standards and Protocols",
        content:
          "Exploring various Wi-Fi standards (802.11a/b/g/n/ac/ax) and their implications for speed, range, and network capacity.",
      },
      {
        title: "Bluetooth Technology Overview",
        content:
          "Bluetooth is a short-range wireless technology used for exchanging data between devices over short distances.",
      },
      {
        title: "Security Challenges in Wireless Networks",
        content:
          "Wireless networks face unique security challenges, including eavesdropping, unauthorized access, and signal interference.",
      },
      {
        title: "Best Practices for Wireless Network Security",
        content:
          "Implementing strong encryption, secure authentication methods, and regular monitoring can enhance the security of wireless networks.",
      },
      {
        title: "Future Trends in Wireless Networking",
        content:
          "As wireless technologies evolve, understanding the latest developments in 5G, Wi-Fi 6/6E, and IoT (Internet of Things) is essential for network engineers.",
      },
      {
        title: "Real-World Applications of Wireless Networking",
        content:
          "Wireless networking is widely used in homes, businesses, healthcare, and smart cities to enable connectivity and mobility.",
      },
      {
        title: "Challenges in Mobile IP Implementation",
        content:
          "Implementing Mobile IP can be complex due to issues like handover management, security, and compatibility with existing networks.",
      },
      {
        title: "Case Studies in Wireless Networking",
        content:
          "Examining real-world case studies of wireless network deployments, including challenges faced and solutions implemented.",
      },
    ],
  },
  12: {
    videos: [
      {
        title: "Client-Server Architecture Explained",
        url: "https://www.youtube.com/embed/a5CgfS0Y4Uc?si=lSQ0k578_usljF5b",
      },
      {
        title: "REST APIs Overview",
        url: "https://www.youtube.com/embed/cJAyEOZQUQY?si=FmPoWUjp0T_-JWnE",
      },
    ],
    articles: [
      {
        title: "Understanding Client-Server Architecture",
        content:
          "Client-server architecture is a distributed application structure that partitions tasks between service providers (servers) and service requesters (clients).",
      },
      {
        title: "REST (Representational State Transfer) Principles",
        content:
          "REST is an architectural style for designing networked applications, using standard HTTP methods and stateless communication.",
      },
      {
        title: "Building RESTful APIs",
        content:
          "A guide to creating RESTful APIs, including resource representation, URI design, and response formats (JSON, XML).",
      },
      {
        title: "HTTP Methods in REST APIs",
        content:
          "Exploring the use of HTTP methods (GET, POST, PUT, DELETE) in RESTful APIs for performing CRUD operations.",
      },
      {
        title: "Authentication and Authorization in REST APIs",
        content:
          "Implementing security measures in REST APIs using tokens, OAuth, and API keys to control access to resources.",
      },
      {
        title: "Best Practices for Designing RESTful APIs",
        content:
          "Tips for designing efficient and user-friendly RESTful APIs, including versioning, error handling, and documentation.",
      },
      {
        title: "Real-World Applications of REST APIs",
        content:
          "REST APIs are widely used in web development, mobile applications, and cloud services to enable communication between clients and servers.",
      },
      {
        title: "Future Trends in Client-Server Architecture",
        content:
          "As web technologies evolve, understanding the latest developments in microservices architecture and serverless computing is essential for developers.",
      },
      {
        title: "Challenges in REST API Development",
        content:
          "Common challenges in REST API development include handling large datasets, ensuring performance, and maintaining backward compatibility.",
      },
      {
        title: "Case Studies in Client-Server Applications",
        content:
          "Examining real-world case studies of client-server applications, including challenges faced and solutions implemented.",
      },
      {
        title: "Tools and Frameworks for REST API Development",
        content:
          "An overview of popular tools and frameworks for building RESTful APIs, such as Flask, Express.js, and Django REST framework.",
      },
    ],
  },
};

const CNTopicPage = () => {
  const { id } = useParams();
  const topic = topicData[id];
  const navigate = useNavigate();
  const content = dummyContentByTopic[id];
  const [activeTab, setActiveTab] = useState("videos");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [readArticles, setReadArticles] = useState([]);

  if (!topic || !content)
    return <h2 style={{ padding: "2rem" }}>Topic not found</h2>;

  const handleNextTopic = () => {
    const nextId = parseInt(id) + 1;
    if (topicData[nextId]) {
      navigate(`/study-material/computer-network/topic/${nextId}`);
      setActiveTab("videos");
      setReadArticles([]);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div
        style={{
          width: isSidebarOpen ? "200px" : "60px",
          background: "#f4f4f4",
          padding: "1rem",
          transition: "width 0.3s",
          overflow: "hidden",
          whiteSpace: "nowrap",
          borderRight: "2px solid aqua",
          borderRadius: "2rem",
        }}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{
            marginBottom: "1rem",
            cursor: "pointer",
            padding: "0.5rem",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            width: "100%",
          }}
        >
          {isSidebarOpen ? "◀" : "▶"}
        </button>

        {isSidebarOpen && (
          <h3
            style={{
              marginTop: "1rem",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            {topic.name}
          </h3>
        )}
        <Divider />

        <ul
          style={{
            listStyle: "none",
            padding: "auto",
            textAlign: "center",
            marginTop: "4rem",
            fontSize: "1.5rem",
          }}
        >
          <li
            onClick={() => setActiveTab("videos")}
            style={{
              cursor: "pointer",
              marginBottom: "1rem",
              fontWeight: activeTab === "videos" ? "bold" : "normal",
            }}
          >
            {isSidebarOpen ? "Videos" : "🎥"}
          </li>
          <li
            onClick={() => setActiveTab("articles")}
            style={{
              cursor: "pointer",
              marginBottom: "1rem",
              fontWeight: activeTab === "articles" ? "bold" : "normal",
            }}
          >
            {isSidebarOpen ? "Articles" : "📄"}
          </li>
        </ul>
      </div>

      {/* Content Panel */}
      <div style={{ flex: 1, padding: "4rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem" }}>
          {topic.name}
        </h2>
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
          {topic.description}
        </p>

        <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }} />

        {activeTab === "videos" && (
          <div>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>Videos</h3>
            {content.videos.map((video, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <p style={{ marginBottom: "1rem" }}>{video.title}</p>
                <iframe
                  width="100%"
                  height="315"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        )}

        {activeTab === "articles" && (
          <div>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.8rem" }}>
              Articles
            </h3>
            <ul>
              {content.articles.map((article, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "2rem",
                    marginBottom: "1.5rem",
                    backgroundColor: readArticles.includes(i)
                      ? "#f9f9f9"
                      : "#fff",
                  }}
                >
                  <h3>{article.title}</h3>
                  <div
                    style={{
                      color: "#333",
                      fontSize: "1.2rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {article.content}
                  </div>
                  <button
                    onClick={() =>
                      setReadArticles((prev) =>
                        prev.includes(i)
                          ? prev.filter((index) => index !== i)
                          : [...prev, i]
                      )
                    }
                    style={{
                      marginTop: "1rem",
                      padding: "0.4rem 1rem",
                      backgroundColor: readArticles.includes(i)
                        ? "#dc3545"
                        : "#28a745",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    {readArticles.includes(i)
                      ? "Mark as Unread"
                      : "Mark as Read"}
                  </button>
                </div>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "problems" && (
          <div>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
              Problems
            </h3>
            <ul>
              {content.problems.map((prob) => (
                <li key={prob.id}>
                  <a
                    href={`/problem/${prob.id}`}
                    style={{ textDecoration: "none", color: "#007bff" }}
                  >
                    {prob.title} ({prob.difficulty})
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Next Topic Button */}
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          {topicData[parseInt(id) + 1] && (
            <button
              onClick={handleNextTopic}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "0.75rem 1.5rem",
                border: "none",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Next Topic →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CNTopicPage;