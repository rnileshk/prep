import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";

const topicData = {
  1: {
    name: "Introduction to Operating System",
    description:
      "Learn the basics of operating systems, their purpose, functions, and role in managing hardware and software.",
  },
  2: {
    name: "Processes and Threads",
    description:
      "Understand what processes and threads are, how they are created, scheduled, and terminated.",
  },
  3: {
    name: "CPU Scheduling Algorithms",
    description:
      "Study various CPU scheduling algorithms like FCFS, SJF, Round Robin, and Priority Scheduling.",
  },
  4: {
    name: "Process Synchronization",
    description:
      "Learn synchronization techniques including critical sections, semaphores, and monitors.",
  },
  5: {
    name: "Deadlock Detection and Prevention",
    description:
      "Explore causes of deadlocks and techniques to detect, prevent, and recover from them.",
  },
  6: {
    name: "Memory Management",
    description:
      "Understand how operating systems manage memory using allocation techniques and memory hierarchies.",
  },
  7: {
    name: "Paging and Segmentation",
    description:
      "Learn logical memory division using paging and segmentation, and how they affect performance.",
  },
  8: {
    name: "Virtual Memory and Page Replacement",
    description:
      "Study virtual memory concepts, demand paging, and common page replacement algorithms.",
  },
  9: {
    name: "File System Interface and Implementation",
    description:
      "Understand file organization, access methods, directory structures, and implementation techniques.",
  },
  10: {
    name: "Disk Scheduling Algorithms",
    description:
      "Learn about disk scheduling techniques like FCFS, SSTF, SCAN, and C-SCAN for efficient I/O.",
  },
  11: {
    name: "System Calls and OS Services",
    description:
      "Explore how user programs interact with OS through system calls and available OS services.",
  },
  12: {
    name: "Types of Operating Systems and Architectures",
    description:
      "Discover various types of OS like batch, time-sharing, real-time, and distributed systems.",
  },
};

// topic-specific dummy content
const dummyContentByTopic = {
  1: {
    videos: [
      {
        title: "Introduction to Operating Systems",
        url: "https://www.youtube.com/embed/WJ-UaAaumNA?si=W4srI15dBAXRuFNC",
      },
    ],
    articles: [
      {
        title: "Understanding Operating Systems",
        content:
          "An operating system (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs. It acts as an intermediary between users and the computer hardware.",
      },
      {
        title: "Functions of an Operating System",
        content:
          "The main functions of an operating system include process management, memory management, file system management, device management, and security management.",
      },
      {
        title: "Types of Operating Systems",
        content:
          "Operating systems can be classified into various types such as batch operating systems, time-sharing operating systems, distributed operating systems, and real-time operating systems.",
      },
      {
        title: "History of Operating Systems",
        content:
          "The history of operating systems dates back to the 1950s with early batch processing systems. Over the decades, operating systems have evolved significantly, leading to modern systems like Windows, macOS, and Linux.",
      },
      {
        title: "Future of Operating Systems",
        content:
          "The future of operating systems is likely to involve more cloud-based solutions, increased security measures, and better integration with artificial intelligence and machine learning technologies.",
      },
    ],
  },
  2: {
    videos: [
      {
        title: "Processes and Threads Explained",
        url: "https://www.youtube.com/embed/ITc09gOrqZk?si=46kr1w8QP8zPQlXS",
      },
    ],
    articles: [
      {
        title: "Understanding Processes",
        content:
          "A process is a program in execution, which includes the program code, current activity, and allocated resources. It is the basic unit of work in an operating system.",
      },
      {
        title: "Threads in Operating Systems",
        content:
          "Threads are the smallest unit of processing that can be scheduled by an operating system. They share the same memory space but can execute independently.",
      },
      {
        title: "Process Scheduling",
        content:
          "Process scheduling is the method by which an operating system decides which process runs at any given time. It involves various algorithms to optimize CPU usage.",
      },
      {
        title: "Inter-process Communication (IPC)",
        content:
          "IPC allows processes to communicate with each other and synchronize their actions. Common IPC mechanisms include pipes, message queues, and shared memory.",
      },
      {
        title: "Concurrency in Operating Systems",
        content:
          "Concurrency refers to the ability of an operating system to manage multiple processes or threads simultaneously, improving resource utilization and performance.",
      },
      {
        title: "Process Control Block (PCB)",
        content:
          "The PCB is a data structure used by the operating system to store all the information about a process, including its state, program counter, CPU registers, and memory management information.",
      },
      {
        title: "Thread Management",
        content:
          "Thread management involves creating, scheduling, and terminating threads. It is crucial for efficient multitasking and resource sharing in modern operating systems.",
      },
    ],
  },
  3: {
    videos: [
      {
        title: "CPU Scheduling Algorithms",
        url: "https://www.youtube.com/embed/pPAKs7tT8sw?si=oNknSBcCxJlEFX05",
      },
    ],
    articles: [
      {
        title: "Introduction to CPU Scheduling",
        content:
          "CPU scheduling is the process of determining which process in the ready state should be allocated to the CPU next. It is crucial for efficient CPU utilization.",
      },
      {
        title: "First-Come, First-Served (FCFS)",
        content:
          "FCFS is the simplest CPU scheduling algorithm where processes are executed in the order they arrive in the ready queue.",
      },
      {
        title: "Shortest Job Next (SJN)",
        content:
          "SJN, also known as Shortest Job First (SJF), selects the process with the smallest execution time next. It can lead to optimal turnaround time but may cause starvation.",
      },
      {
        title: "Round Robin (RR)",
        content:
          "RR is a preemptive scheduling algorithm that assigns a fixed time slice to each process in the ready queue, allowing for fair sharing of CPU time.",
      },
      {
        title: "Priority Scheduling",
        content:
          "In priority scheduling, each process is assigned a priority, and the CPU is allocated to the process with the highest priority. It can be preemptive or non-preemptive.",
      },
      {
        title: "Multilevel Queue Scheduling",
        content:
          "Multilevel queue scheduling divides processes into different queues based on their priority or type, allowing for more complex scheduling strategies.",
      },
    ],
  },
  4: {
    videos: [
      {
        title: "Process Synchronization Techniques",
        url: "https://www.youtube.com/embed/3Eaw1SSIqRg?si=yVCqwux-Lm89V5s7",
      },
    ],
    articles: [
      {
        title: "Introduction to Process Synchronization",
        content:
          "Process synchronization is essential for coordinating the execution of processes to avoid conflicts when accessing shared resources.",
      },
      {
        title: "Critical Section Problem",
        content:
          "The critical section problem arises when multiple processes access shared resources concurrently, leading to potential data inconsistency.",
      },
      {
        title: "Semaphores",
        content:
          "Semaphores are synchronization primitives that can be used to control access to shared resources by multiple processes.",
      },
      {
        title: "Mutexes",
        content:
          "Mutexes (mutual exclusions) are locks that allow only one process to access a resource at a time, preventing.",
      },
      {
        title: "Monitors",
        content:
          "Monitors are high-level synchronization constructs that allow safe access to shared resources by encapsulating the resource and its operations.",
      },
      {
        title: "Deadlock in Synchronization",
        content:
          "Deadlock occurs when two or more processes are waiting indefinitely for resources held by each other, preventing any of them from proceeding.",
      },
      {
        title: "Starvation and Livelock",
        content:
          "Starvation occurs when a process is perpetually denied necessary resources, while livelock is a situation where processes keep changing states without making progress.",
      },
      {
        title: "Synchronization in Multithreading",
        content:
          "In multithreading, synchronization is crucial to ensure that threads can safely share resources without causing data corruption or inconsistencies.",
      },
      { title: "Synchronization Algorithms",
        content:
          "Various algorithms like Peterson's algorithm, Lamport's bakery algorithm, and the dining philosophers problem illustrate different approaches to process synchronization.",
      },
      { title: "Practical Applications of Synchronization",
        content:
          "Synchronization techniques are widely used in operating systems, databases, and distributed systems to ensure data integrity and consistency.",
      },
    ],
  },
  5: {
    videos: [
      {
        title: "Deadlock Detection and Prevention",
        url: "https://www.youtube.com/embed/pPM9Ajqmy_4?si=SzPPdmGJYMhAXCSa",
      },
    ],
    articles: [
      {
        title: "Understanding Deadlocks",
        content:
          "A deadlock is a situation in which two or more processes are unable to proceed because each is waiting for the other to release resources.",
      },
      {
        title: "Conditions for Deadlock",
        content:
          "Deadlocks occur when four conditions hold simultaneously: mutual exclusion, hold and wait, no preemption, and circular wait.",
      },
      {
        title: "Deadlock Prevention Techniques",
        content:
          "Deadlock prevention strategies include ensuring that at least one of the four necessary conditions does not hold, such as using resource allocation graphs.",
      },
      {
        title: "Deadlock Avoidance Algorithms",
        content:
          "Deadlock avoidance algorithms like Banker's algorithm dynamically allocate resources based on current system state to avoid deadlocks.",
      },
      {
        title: "Deadlock Detection Algorithms",
        content:
          "Deadlock detection algorithms periodically check the system state to identify deadlocks and take corrective actions.",
      },
      {
        title: "Recovery from Deadlock",
        content:
          "Recovery from deadlock can involve terminating processes, rolling back processes to a safe state, or preempting resources from some processes.",
      },
      { title: "Starvation vs. Deadlock",
        content:
          "Starvation occurs when a process is perpetually denied resources, while deadlock involves processes waiting for each other indefinitely.",
      },
      { title: "Practical Examples of Deadlock",
        content:
          "Real-world examples of deadlocks can be found in database systems, operating systems, and distributed systems where resource contention occurs.",
      },
    ],
  },
  6: {
    videos: [
      {
        title: "Memory Management in Operating Systems",
        url: "https://www.youtube.com/embed/eESIFJz7mJw?si=0CyN4Rzc_VNZ2fiW",
      },
    ],
    articles: [
      {
        title: "Introduction to Memory Management",
        content:
          "Memory management is the process of coordinating and handling computer memory, including allocation, deallocation, and organization of memory resources.",
      },
      {
        title: "Memory Hierarchy",
        content:
          "The memory hierarchy consists of different levels of memory storage, including registers, cache, main memory (RAM), and secondary storage (hard drives).",
      },
      {
        title: "Paging and Segmentation",
        content:
          "Paging divides memory into fixed-size pages, while segmentation divides it into variable-sized segments, allowing for efficient memory allocation.",
      },
      {
        title: "Virtual Memory",
        content:
          "Virtual memory allows the execution of processes that may not be completely in physical memory by using disk space as an extension of RAM.",
      },
      {
        title: "Memory Allocation Techniques",
        content:
          "Common memory allocation techniques include contiguous allocation, paging, segmentation, and dynamic partitioning.",
      },
      {
        title: "Fragmentation in Memory Management",
        content:
          "Fragmentation occurs when free memory is divided into small blocks, leading to inefficient use of memory resources. It can be internal or external fragmentation.",
      },
      {
        title: "Memory Protection Mechanisms",
        content:
          "Memory protection mechanisms ensure that processes do not interfere with each other's memory space, preventing unauthorized access and corruption.",
      },
      { title: "Swapping and Thrashing",
        content:
          "Swapping involves moving processes between main memory and disk to free up memory, while thrashing occurs when excessive swapping leads to performance degradation.",
      },
      { title: "Memory Management in Multitasking", 
        content:
          "In multitasking environments, efficient memory management is crucial for ensuring that multiple processes can run concurrently without conflicts.",
      },
    ],
  },
  7: {
    videos: [
      {
        title: "Paging and Segmentation Explained",
        url: "https://www.youtube.com/embed/dz9Tk6KCMlQ?si=9haRtbmJfYnblhvQ",
      },
    ],
    articles: [
      {
        title: "Understanding Paging",
        content:
          "Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory, allowing processes to be divided into fixed-size pages.",
      },
      {
        title: "Segmentation in Memory Management",
        content:
          "Segmentation divides a process into variable-sized segments based on logical divisions, such as functions or data structures, allowing for more flexible memory allocation.",
      },
      {
        title: "Page Tables and Page Replacement",
        content:
          "Page tables map virtual addresses to physical addresses, and page replacement algorithms determine which pages to swap out when memory is full.",
      },
      {
        title: "Advantages of Paging and Segmentation",
        content:
          "Paging and segmentation improve memory utilization, simplify memory management, and allow for efficient sharing of code and data among processes.",
      },
      {
        title: "Challenges in Paging and Segmentation",
        content:
          "Challenges include page table overhead, fragmentation, and the complexity of managing multiple segments or pages in memory.",
      },
      {
        title: "Paging vs. Segmentation",
        content:
          "Paging uses fixed-size pages, while segmentation uses variable-sized segments. Both techniques can be used together in modern operating systems.",
      },
      {
        title: "Applications of Paging and Segmentation",
        content:
          "Paging and segmentation are widely used in modern operating systems to manage memory efficiently, especially in multitasking environments.",
      },
      {
        title: "Real-World Examples of Paging and Segmentation",
        content:
          "Examples include operating systems like Windows, Linux, and macOS, which implement paging and segmentation to manage memory for running applications.",
      },
    ],
  },
  8: {
    videos: [
      {
        title: "Virtual Memory and Page Replacement Algorithms",
        url: "https://www.youtube.com/embed/o2_iCzS9-ZQ?si=2cYQbyF5oTEp_dR9",
      },
    ],
    articles: [
      {
        title: "Introduction to Virtual Memory",
        content:
          "Virtual memory is a memory management technique that allows the execution of processes that may not be completely in physical memory by using disk space as an extension of RAM.",
      },
      {
        title: "Page Replacement Algorithms",
        content:
          "Page replacement algorithms determine which pages to swap out of physical memory when new pages need to be loaded, optimizing memory usage and performance.",
      },
      {
        title: "Common Page Replacement Algorithms",
        content:
          "Common algorithms include Least Recently Used (LRU), First-In-First-Out (FIFO), and Optimal Page Replacement, each with its own advantages and disadvantages.",
      },
      {
        title: "Thrashing in Virtual Memory",
        content:
          "Thrashing occurs when excessive page swapping leads to performance degradation, as the system spends more time swapping pages than executing processes.",
      },
      {
        title: "Benefits of Virtual Memory",
        content:
          "Virtual memory allows for larger address spaces, efficient multitasking, and better isolation between processes, enhancing overall system performance.",
      },
      {
        title: "Challenges in Virtual Memory Management",
        content:
          "Challenges include managing page tables, handling page faults efficiently, and minimizing thrashing in high-demand scenarios.",
      },
      {
        title: "Applications of Virtual Memory",
        content:
          "Virtual memory is widely used in modern operating systems like Windows, Linux, and macOS to manage memory for running applications effectively.",
      },
      {
        title: "Real-World Examples of Virtual Memory",
        content:
          "Examples include how operating systems handle large applications, multitasking environments, and memory-intensive tasks like video editing or gaming.",
      },
    ],
  },
  9: {
    videos: [
      {
        title: "File System Interface and Implementation",
        url: "https://www.youtube.com/embed/0LtuQhNFFe0?si=a8gFXWWMACaLwa7p",
      },
    ],
    articles: [
      {
        title: "Understanding File Systems",
        content:
          "A file system is a method of storing and organizing files on a storage device, allowing for efficient access and management of data.",
      },
      {
        title: "File System Interface",
        content:
          "The file system interface provides a way for users and applications to interact with files, including operations like creating, reading, writing, and deleting files.",
      },
      {
        title: "File Organization Methods",
        content:
          "Common file organization methods include sequential, indexed, and hashed file organization, each with its own advantages and use cases.",
      },
      {
        title: "Directory Structures",
        content:
          "Directory structures organize files into a hierarchy, allowing for easy navigation and management of files within the file system.",
      },
      {
        title: "File System Implementation Techniques",
        content:
          "File system implementation techniques involve managing metadata, handling file allocation, and ensuring data integrity through journaling or logging.",
      },
      {
        title: "Challenges in File System Design",
        content:
          "Challenges include ensuring data consistency, managing concurrent access to files, and optimizing performance for large-scale storage systems.",
      },
      {
        title: "Applications of File Systems",
        content:
          "File systems are used in various applications, from personal computers to enterprise servers, enabling efficient data storage and retrieval.",
      },
    ],
  },
  10: {
    videos: [
      {
        title: "Disk Scheduling Algorithms",
        url: "https://www.youtube.com/embed/9uoa_p8q47Y?si=QPzl8jSgFrxmYXsc",
      },
    ],
    articles: [
      {
        title: "Introduction to Disk Scheduling",
        content:
          "Disk scheduling is the method by which an operating system decides the order in which disk I/O requests are processed, optimizing performance and minimizing latency.",
      },
      {
        title: "First-Come, First-Served (FCFS) Scheduling",
        content:
          "FCFS is the simplest disk scheduling algorithm where requests are processed in the order they arrive, but it may lead to long wait times for some requests.",
      },
      {
        title: "Shortest Seek Time First (SSTF) Scheduling",
        content:
          "SSTF selects the disk I/O request that is closest to the current head position, reducing seek time but potentially causing starvation for distant requests.",
      },
      {
        title: "SCAN and C-SCAN Scheduling",
        content:
          "SCAN moves the disk arm in one direction servicing requests until it reaches the end, then reverses direction. C-SCAN (Circular SCAN) services requests in a circular manner, providing a more uniform wait time.",
      },
      {
        title: "LOOK and C-LOOK Scheduling",
        content:
          "LOOK and C-LOOK are variations of SCAN and C-SCAN that only service requests in the direction of movement, reducing unnecessary seek time.",
      },
      {
        title: "Applications of Disk Scheduling Algorithms",
        content:
          "Disk scheduling algorithms are crucial in operating systems, databases, and file systems to ensure efficient data access and management.",
      },
      { title: "Challenges in Disk Scheduling",
        content:
          "Challenges include balancing performance with fairness, minimizing seek time, and handling concurrent requests efficiently.",
      },
      { title: "Real-World Examples of Disk Scheduling", 
        content:
          "Examples include how operating systems like Windows and Linux implement disk scheduling algorithms to manage file system operations and optimize disk I/O performance.",
      },
    ],
  },
  11: {
    videos: [
      {
        title: "System Calls and OS Services",
        url: "https://www.youtube.com/embed/tWPa-rZiGM8?si=rUZgjpBIm_ghC1iu",
      },
    ],
    articles: [
      {
        title: "Understanding System Calls",
        content:
          "System calls provide an interface between user applications and the operating system, allowing programs to request services like file operations, process management, and communication.",
      },
      {
        title: "Types of System Calls",
        content:
          "System calls can be categorized into various types, including process control, file manipulation, device management, information maintenance, and communication.",
      },
      {
        title: "How System Calls Work",
        content:
          "When a program makes a system call, it triggers a context switch from user mode to kernel mode, allowing the operating system to execute the requested service.",
      },
      {
        title: "OS Services Provided through System Calls",
        content:
          "Operating systems provide various services through system calls, such as creating and managing processes, handling files and directories, and managing memory.",
      },
      {
        title: "Challenges in System Call Implementation",
        content:
          "Challenges include ensuring security and isolation between user applications and the kernel, managing concurrency, and optimizing performance.",
      },
      {
        title: "Applications of System Calls",
        content:
          "System calls are used in various applications, from simple command-line tools to complex server applications that require interaction with the operating system.",
      },
      { title: "Real-World Examples of System Calls",
        content:
          "Examples include how operating systems like Linux, Windows, and macOS implement system calls to provide essential services to user applications.",
      },
    ],
  },
  12: {
    videos: [
      {
        title: "Types of Operating Systems and Architectures",
        url: "https://www.youtube.com/embed/YQZbIT9FcUk?si=4Qoc-ubb5uF4KbEP",
      },
    ],
    articles: [
      {
        title: "Types of Operating Systems",
        content:
          "Operating systems can be classified into various types, including batch operating systems, time-sharing operating systems, real-time operating systems, and distributed operating systems.",
      },
      {
        title: "Batch Operating Systems",
        content:
          "Batch operating systems execute jobs in batches without user interaction, optimizing resource utilization by grouping similar tasks together.",
      },
      {
        title: "Time-Sharing Operating Systems",
        content:
          "Time-sharing operating systems allow multiple users to interact with the system simultaneously, providing each user with a time slice of CPU time.",
      },
      {
        title: "Real-Time Operating Systems (RTOS)",
        content:
          "RTOS are designed for applications that require immediate response to events, ensuring that critical tasks are completed within strict timing constraints.",
      },
      {
        title: "Distributed Operating Systems",
        content:
          "Distributed operating systems manage a collection of independent computers that appear to users as a single coherent system, enabling resource sharing and communication.",
      },
      {
        title: "Microkernel vs. Monolithic Kernel Architectures",
        content:
          "Microkernel architectures have minimal functionality in the kernel, while monolithic kernels include all essential services in a single large kernel.",
      },
      {
        title: "Hybrid Operating Systems",
        content:
          "Hybrid operating systems combine features of both microkernel and monolithic architectures, providing flexibility and performance benefits.",
      },
    ],
  },
};

const OsTopicPage = () => {
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
      navigate(`/study-material/os/topic/${nextId}`);
      setActiveTab("videos");
      setReadArticles([]);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div
        style={{
          width: isSidebarOpen ? "20rem" : "60px",
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
            <h3
              style={{
                marginBottom: "1rem",
                fontSize: "1.8rem",
                width: "20rem",
              }}
            >
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

export default OsTopicPage;
