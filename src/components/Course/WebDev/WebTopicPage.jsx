import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";

const topicData = {
  1: {
    name: "HTML5 and Semantic Elements",
    description:
      "Learn the structure of HTML5 documents and the importance of semantic elements for accessibility and SEO.",
  },
  2: {
    name: "CSS3 (Flexbox, Grid, Responsive Design)",
    description:
      "Understand CSS3 layout techniques including Flexbox and Grid, and how to create responsive designs for multiple devices.",
  },
  3: {
    name: "JavaScript Fundamentals (ES6+ features)",
    description:
      "Master JavaScript basics along with modern ES6+ features like arrow functions, template literals, destructuring, and modules.",
  },
  4: {
    name: "DOM Manipulation and Event Handling",
    description:
      "Learn how to interact with and modify the Document Object Model and respond to user events effectively.",
  },
  5: {
    name: "Asynchronous JavaScript (Promises, Async/Await, Callbacks)",
    description:
      "Explore asynchronous programming in JavaScript using callbacks, Promises, and async/await for handling non-blocking operations.",
  },
  6: {
    name: "RESTful APIs and AJAX",
    description:
      "Understand how to communicate with servers using RESTful APIs and AJAX techniques for dynamic web content.",
  },
  7: {
    name: "HTTP Protocol, Status Codes, and Web Security Basics (CORS, HTTPS)",
    description:
      "Learn the fundamentals of HTTP, common status codes, and basic web security practices including CORS and HTTPS.",
  },
  8: {
    name: "Frontend Frameworks (React, Angular, Vue)",
    description:
      "Get introduced to popular frontend frameworks for building scalable and maintainable web applications.",
  },
  9: {
    name: "State Management (Redux, Context API)",
    description:
      "Understand state management concepts and tools like Redux and React's Context API for managing app-wide state.",
  },
  10: {
    name: "Version Control with Git and GitHub",
    description:
      "Learn how to use Git for version control and collaborate on projects with GitHub using branching and pull requests.",
  },
  11: {
    name: "Package Managers and Build Tools (npm, Webpack, Babel)",
    description:
      "Explore tools like npm for package management and Webpack/Babel for bundling and transpiling modern JavaScript code.",
  },
  12: {
    name: "Testing (Jest, React Testing Library, Unit and Integration Testing)",
    description:
      "Learn testing fundamentals and tools for writing unit and integration tests for JavaScript and React applications.",
  },
  13: {
    name: "Web Performance Optimization",
    description:
      "Discover techniques to improve web application performance such as caching, lazy loading, and minimizing assets.",
  },
  14: {
    name: "Backend Basics (Node.js, Express.js)",
    description:
      "Get introduced to backend development using Node.js and Express.js for building server-side applications and APIs.",
  },
  15: {
    name: "Databases (SQL, NoSQL - MongoDB)",
    description:
      "Learn about relational and non-relational databases, how to design schemas and perform CRUD operations.",
  },
  16: {
    name: "Authentication and Authorization (JWT, OAuth)",
    description:
      "Understand methods for authenticating users and authorizing access including JWT and OAuth protocols.",
  },
  17: {
    name: "Deployment and Hosting (Netlify, Vercel, AWS)",
    description:
      "Explore how to deploy and host web applications on popular platforms like Netlify, Vercel, and AWS.",
  },
};

// topic-specific dummy content
const dummyContentByTopic = {
  1: {
    videos: [
      {
        title: "Introduction to HTML5",
        url: "https://www.youtube.com/embed/E3ByCRqE7Lo?si=ajJdIEPCazeVcy_Z",
      },
      {
        title: "Semantic HTML Elements",
        url: "https://www.youtube.com/embed/aFBQbLIHXfk?si=TIPFS6qrAVIrjGwi",
      },
    ],
    articles: [
      {
        title: "Understanding HTML5 Semantic Elements",
        content: `HTML5 brought a significant improvement to web development with the introduction of semantic elements. Unlike generic tags such as <div> and <span>, semantic elements clearly define the purpose and structure of the content they enclose. Examples include <header>, <footer>, <article>, <section>, <nav>, and <aside>. Using semantic elements improves accessibility by helping screen readers and other assistive technologies better interpret the layout and importance of different parts of a webpage. This leads to a more inclusive web experience for users with disabilities. Moreover, semantic HTML enhances Search Engine Optimization (SEO). Search engines can more accurately understand the content hierarchy and relevance, which can improve the website’s ranking in search results. For instance, marking the main navigation within a <nav> tag or articles within <article> tags makes it easier for crawlers to parse and index the content effectively. In addition to accessibility and SEO benefits, semantic tags promote cleaner, more readable code that is easier to maintain and update. Adopting semantic HTML is a fundamental best practice for modern web developers aiming to build robust, scalable, and user-friendly websites. This article delves into the key semantic elements and practical examples of their use in real-world projects.`,
      },
      {
        title: "Best Practices for Using Semantic HTML",
        content: `When using semantic HTML, it’s essential to follow best practices to ensure your code is both effective and maintainable. Start by using the appropriate semantic tags that accurately describe the content they contain. For example, use <header> for introductory content, <nav> for navigation links, <article> for self-contained compositions, and <footer> for footer information. Avoid overusing generic tags like <div> when a more specific semantic tag is available. This not only improves accessibility but also enhances the clarity of your code. Additionally, ensure that your semantic elements are used in a logical order that reflects the structure of your content. This helps both users and search engines understand the hierarchy and flow of information on your page. Finally, always validate your HTML to check for errors or misuse of semantic elements. Tools like the W3C Markup Validation Service can help identify issues that may affect accessibility or SEO.`,
      },
      {
        title: "Semantic HTML and Accessibility",
        content: `Semantic HTML plays a crucial role in web accessibility. By using semantic elements, developers can create a more inclusive web experience for users with disabilities. Screen readers rely on semantic tags to interpret the structure and meaning of a webpage. For instance, when a screen reader encounters a <nav> tag, it understands that the content within is navigation-related, allowing users to navigate through links more efficiently. Similarly, using <article> tags helps screen readers identify distinct sections of content, making it easier for users to find relevant information. Furthermore, semantic HTML supports keyboard navigation, which is essential for users who cannot use a mouse. By structuring content with semantic elements, developers can ensure that all users, regardless of their abilities, can access and interact with web content effectively.`,
      },
      {
        title: "Semantic HTML and SEO",
        content: `Using semantic HTML is not only beneficial for accessibility but also plays a significant role in Search Engine Optimization (SEO). Search engines use semantic elements to better understand the content and context of a webpage. By marking up content with appropriate semantic tags, developers can help search engines index their pages more effectively. For example, using <article> tags for blog posts or news articles signals to search engines that this content is distinct and relevant. Similarly, using <header> and <footer> tags helps define the structure of the page, making it easier for search engines to parse the information. Additionally, semantic HTML can improve click-through rates by providing clearer context in search results, leading to better user engagement.`,
      },
      {
        title: "Future of Semantic HTML",
        content: `The future of semantic HTML looks promising as web standards continue to evolve. With the ongoing development of HTML5 and beyond, we can expect more semantic elements to be introduced, further enhancing the ability to structure content meaningfully. As web technologies advance, the importance of semantic HTML will only grow, especially with the rise of artificial intelligence and machine learning applications that rely on structured data. Developers are encouraged to stay updated with the latest HTML specifications and best practices to ensure their websites remain accessible, SEO-friendly, and future-proof.`,
      },
      {
        title: "Conclusion",
        content: `In conclusion, semantic HTML is a fundamental aspect of modern web development that enhances accessibility, SEO, and code maintainability. By using semantic elements appropriately, developers can create websites that are not only user-friendly but also optimized for search engines. As the web continues to evolve, embracing semantic HTML will be crucial for building robust and inclusive web applications.`,
      },
    ],
  },
  2: {
    videos: [
      {
        title: "CSS Flexbox Tutorial",
        url: "https://www.youtube.com/embed/DWk2mndNTHY?si=Ip7HQgELhSl6Z-BH",
      },
      {
        title: "CSS Grid Layout Tutorial",
        url: "https://www.youtube.com/embed/7AgEjgUtho4?si=uzHc8GMyHtc4UEss",
      },
    ],
    articles: [
      {
        title: "Understanding CSS Flexbox",
        content: `CSS Flexbox is a powerful layout module that allows developers to create flexible and responsive layouts with ease. It provides a one-dimensional layout model that can align items in rows or columns, making it ideal for building complex web designs. Flexbox simplifies the process of distributing space among items in a container, allowing for dynamic resizing and alignment based on available space. Key properties include 'display: flex', 'flex-direction', 'justify-content', and 'align-items', which control the layout and alignment of flex items. By mastering Flexbox, developers can create modern, responsive designs that adapt seamlessly to different screen sizes and orientations.`,
      },
      {
        title: "CSS Grid Layout Explained",
        content: `CSS Grid Layout is a two-dimensional layout system that enables developers to create complex grid-based designs with precision. Unlike Flexbox, which is primarily one-dimensional, Grid allows for both rows and columns to be defined, making it suitable for intricate layouts. Key features include defining grid tracks, placing items in specific grid areas, and controlling the size and alignment of grid items. With properties like 'grid-template-columns', 'grid-template-rows', and 'grid-area', developers can create responsive designs that adapt to various screen sizes. CSS Grid is a powerful tool for building modern web applications with sophisticated layouts.`,
      },
      {
        title: "Responsive Design with Media Queries",
        content: `Responsive design is essential for creating websites that provide an optimal viewing experience across different devices. Media queries are a key feature of CSS that allow developers to apply styles based on the characteristics of the device, such as screen size, resolution, and orientation. By using media queries, developers can adjust layouts, font sizes, colors, and other styles to ensure that content is accessible and visually appealing on all devices. This approach enhances user experience by providing a consistent look and feel, regardless of the device being used. Implementing responsive design with media queries is a best practice in modern web development, ensuring that websites are adaptable and user-friendly.`,
      },
      {
        title: "Best Practices for Responsive Web Design",
        content: `To create effective responsive web designs, developers should follow best practices such as using fluid grids, flexible images, and media queries. Fluid grids allow for proportional scaling of layout elements, ensuring that they adapt to different screen sizes. Flexible images can be set to a maximum width of 100% to prevent overflow and maintain aspect ratios. Media queries should be used strategically to apply styles based on device characteristics, enhancing usability across various platforms. Additionally, testing designs on multiple devices and screen sizes is crucial to ensure a consistent user experience. By adhering to these best practices, developers can build responsive websites that are accessible and visually appealing.`,
      },
      {
        title: "Common Challenges in Responsive Design",
        content: `While responsive design offers numerous benefits, it also presents challenges such as maintaining performance, handling complex layouts, and ensuring compatibility across browsers. Performance can be affected by large images or excessive media queries, so optimizing assets and minimizing CSS can help improve load times. Complex layouts may require careful planning and testing to ensure they function correctly on all devices. Additionally, browser compatibility issues can arise with certain CSS features, necessitating the use of fallbacks or polyfills. By addressing these challenges proactively, developers can create robust responsive designs that deliver a seamless user experience.`,
      },
      {
        title: "Future Trends in Responsive Web Design",
        content: `The future of responsive web design is likely to see advancements in CSS features, such as container queries and improved grid capabilities, allowing for even more flexible layouts. As web technologies evolve, the focus will shift towards creating adaptive designs that not only respond to screen size but also consider user context and preferences. This includes incorporating features like dark mode support and personalized content delivery. Additionally, the rise of progressive web apps (PWAs) will influence responsive design practices, emphasizing performance and offline capabilities. Staying updated with these trends will be essential for developers looking to create cutting-edge responsive web experiences.`,
      },
    ],
  },
  3: {
    videos: [
      {
        title: "JavaScript ES6 Features",
        url: "https://www.youtube.com/embed/tULW49jkKnA?si=zg50FTdP_i2h9h6I",
      },
      {
        title: "JavaScript Functions and Scope",
        url: "https://www.youtube.com/embed/Bn56WahG_t0?si=AcDEMRVDVKEGEn4M",
      },
    ],
    articles: [
      {
        title: "JavaScript ES6 Features Explained",
        content: `JavaScript ES6, also known as ECMAScript 2015, introduced several powerful features that enhance the language's capabilities. Key features include arrow functions, which provide a more concise syntax for writing functions; template literals, allowing for multi-line strings and string interpolation; destructuring assignment, enabling unpacking values from arrays or objects; and modules, which facilitate better code organization and reuse. These features not only improve code readability but also promote modern programming practices, making JavaScript development more efficient and enjoyable.`,
      },
      {
        title: "Understanding JavaScript Functions and Scope",
        content: `Functions are a fundamental building block of JavaScript, allowing developers to encapsulate reusable code. Understanding function scope is crucial for managing variable visibility and avoiding conflicts. JavaScript uses lexical scoping, meaning that a function's scope is determined by its position in the source code. This allows for nested functions to access variables from their parent scopes. Additionally, the concept of closures enables functions to retain access to their outer scope even after the outer function has executed. Mastering functions and scope is essential for writing clean, maintainable JavaScript code.`,
      },
      {
        title: "JavaScript Promises and Asynchronous Programming",
        content: `Promises are a key feature of JavaScript that simplify asynchronous programming by providing a way to handle operations that may complete in the future. A promise represents a value that may be available now, or in the future, or never. It can be in one of three states: pending, fulfilled, or rejected. Promises allow developers to write cleaner asynchronous code using methods like .then() for handling success and .catch() for errors. Understanding promises is essential for working with APIs, handling user interactions, and managing time-consuming tasks in web applications.`,
      },
      {
        title: "JavaScript Event Loop and Concurrency Model",
        content: `The JavaScript event loop is a crucial part of the language's concurrency model, allowing it to handle asynchronous operations efficiently. JavaScript is single-threaded, meaning it can only execute one piece of code at a time. However, the event loop enables it to manage multiple tasks by offloading time-consuming operations to the browser's APIs or Node.js event queue. When an asynchronous operation completes, the event loop checks the queue and executes the corresponding callback function. Understanding the event loop is essential for writing performant JavaScript applications and avoiding common pitfalls like callback hell.`,
      },
      {
        title: "JavaScript Error Handling and Debugging Techniques",
        content: `Error handling is a critical aspect of JavaScript development, ensuring that applications can gracefully handle unexpected situations. JavaScript provides mechanisms like try-catch blocks to catch and handle errors without crashing the application. Additionally, developers can use console methods for debugging, such as console.log(), console.error(), and console.warn(). Understanding how to effectively handle errors and debug code is essential for building robust and reliable JavaScript applications.`,
      },
      {
        title: "JavaScript Best Practices for Clean Code",
        content: `Writing clean, maintainable JavaScript code is essential for long-term project success. Best practices include using meaningful variable names, keeping functions small and focused, avoiding global variables, and adhering to consistent coding styles. Additionally, leveraging modern features like ES6 modules and arrow functions can enhance code readability. Following these best practices not only improves code quality but also makes collaboration easier among developers.`,
      },
      {
        title: "JavaScript Frameworks and Libraries Overview",
        content: `JavaScript frameworks and libraries provide powerful tools for building complex web applications efficiently. Popular frameworks like React, Angular, and Vue.js offer structured approaches to building user interfaces, while libraries like jQuery simplify DOM manipulation and event handling. Understanding the strengths and weaknesses of different frameworks and libraries is crucial for selecting the right tool for a project. Additionally, familiarity with state management solutions like Redux or MobX can enhance application scalability and maintainability.`,
      },
    ],
  },
  4: {
    videos: [
      {
        title: "DOM Manipulation with JavaScript",
        url: "https://www.youtube.com/embed/uoII7VSDF3k?si=WzUVtfJ1iqTEBGJH",
      },
      {
        title: "JavaScript Event Handling",
        url: "https://www.youtube.com/embed/Yixrwpt7e-g?si=OzmAyMBhXyrQGltt",
      },
    ],
    articles: [
      {
        title: "Introduction to DOM Manipulation",
        content: `The Document Object Model (DOM) is a programming interface for web documents, representing the structure of a webpage as a tree of objects. JavaScript provides powerful methods for manipulating the DOM, allowing developers to dynamically change the content, structure, and style of a webpage. Common operations include selecting elements using methods like getElementById(), querySelector(), and modifying their properties or attributes. Understanding DOM manipulation is essential for creating interactive and dynamic web applications.`,
      },
      {
        title: "Event Handling in JavaScript",
        content: `Event handling is a crucial aspect of web development, enabling developers to respond to user interactions such as clicks, key presses, and form submissions. JavaScript provides various event listeners that can be attached to DOM elements to execute code when specific events occur. Common events include click, mouseover, keydown, and submit. By mastering event handling, developers can create responsive and engaging user experiences on their websites.`,
      },
      {
        title: "Best Practices for DOM Manipulation",
        content: `When manipulating the DOM, it's important to follow best practices to ensure performance and maintainability. Minimizing direct DOM access by batching updates can significantly improve performance, especially in complex applications. Additionally, using event delegation allows for efficient event handling by attaching a single listener to a parent element instead of multiple listeners on child elements. This reduces memory usage and improves responsiveness. Finally, keeping the DOM manipulation code organized and modular enhances readability and maintainability.`,
      },
      {
        title: "Common DOM Manipulation Techniques",
        content: `Common techniques for DOM manipulation include creating, modifying, and removing elements. Developers can create new elements using document.createElement(), modify existing elements by changing their innerHTML or textContent, and remove elements using methods like removeChild() or remove(). Additionally, developers can clone elements with cloneNode() to create copies of existing nodes. These techniques are essential for building dynamic web applications that respond to user input and data changes.`,
      },
      {
        title: "Understanding the Event Propagation Model",
        content: `The event propagation model in JavaScript defines how events flow through the DOM tree. There are two main phases: capturing and bubbling. In the capturing phase, events travel from the root of the document down to the target element, while in the bubbling phase, events propagate back up from the target element to the root. Understanding this model is crucial for effective event handling, as it allows developers to control how events are processed and prevent unintended behavior.`,
      },
      {
        title: "Performance Considerations in DOM Manipulation",
        content: `Performance is a key consideration when manipulating the DOM, as excessive or inefficient operations can lead to slow page rendering and poor user experience. To optimize performance, developers should minimize layout thrashing by batching DOM reads and writes, use efficient selectors, and avoid unnecessary reflows. Additionally, leveraging modern libraries like React or Vue.js can help manage complex DOM manipulations more efficiently by using virtual DOM techniques.`,
      },
      {
        title: "Debugging DOM Manipulation Issues",
        content: `Debugging DOM manipulation issues can be challenging, but tools like browser developer consoles provide powerful features for inspecting and modifying the DOM in real-time. Common debugging techniques include logging element properties, using breakpoints to pause execution, and examining event listeners attached to elements. By mastering these debugging techniques, developers can quickly identify and resolve issues related to DOM manipulation in their applications.`,
      },
    ],
  },
  5: {
    videos: [
      {
        title: "Asynchronous JavaScript with Promises",
        url: "https://www.youtube.com/embed/9JaDBYPmiJ0?si=IYNUmuD6sEBKP-gP",
      },
      {
        title: "Async/Await in JavaScript",
        url: "https://www.youtube.com/embed/bWaucYA1YRI?si=_aiTgghBAgBv0fuY",
      },
    ],
    articles: [
      {
        title: "Understanding Asynchronous JavaScript",
        content: `Asynchronous programming is a key feature of JavaScript that allows developers to perform non-blocking operations, enabling smoother user experiences. By using callbacks, promises, and async/await syntax, developers can handle tasks like API requests, file reading, and timers without freezing the main thread. This article explores the fundamentals of asynchronous JavaScript, including how to create and manage asynchronous functions effectively.`,
      },
      {
        title: "JavaScript Promises Explained",
        content: `Promises are a powerful way to handle asynchronous operations in JavaScript. A promise represents a value that may be available now, or in the future, or never. It can be in one of three states: pending, fulfilled, or rejected. This article delves into how to create promises, handle their resolution with .then() and .catch() methods, and chain multiple promises together for complex workflows.`,
      },
      {
        title: "Using Async/Await for Cleaner Code",
        content: `Async/await is a modern syntax introduced in ES2017 that simplifies working with promises. It allows developers to write asynchronous code that looks synchronous, making it easier to read and maintain. This article covers how to use async functions, the await keyword, and error handling with try/catch blocks to manage asynchronous operations effectively.`,
      },
      {
        title: "Common Pitfalls in Asynchronous JavaScript",
        content: `While asynchronous programming offers many benefits, it also comes with challenges that developers need to be aware of. One of the most notorious issues is "callback hell," where deeply nested callbacks create code that is difficult to read, maintain, and debug. This problem often arises when multiple asynchronous operations depend on each other, resulting in a "pyramid of doom" structure. Another common pitfall is improper error handling. In asynchronous code, errors may not propagate the same way as in synchronous code, which can cause unhandled exceptions or silent failures if not properly managed. Using promises and async/await syntax helps in writing clearer, more manageable code and provides better mechanisms for catching and handling errors. Race conditions and timing issues are also frequent challenges, especially when multiple asynchronous operations interact or modify shared data without proper synchronization. Developers must be careful to ensure operations happen in the intended order. Additionally, developers may face issues like memory leaks due to forgotten event listeners or unresolved promises. Understanding these pitfalls and using modern JavaScript features like promises, async/await, and proper error handling techniques can greatly improve the reliability and maintainability of asynchronous applications.`,
      },
      {
        title: "Best Practices for Asynchronous JavaScript",
        content: `To write effective asynchronous JavaScript, developers should follow best practices such as using promises or async/await for better readability, handling errors gracefully, and avoiding deeply nested callbacks. Additionally, using libraries like Axios for HTTP requests can simplify asynchronous operations. It's also important to manage concurrency effectively, ensuring that multiple asynchronous tasks do not interfere with each other. By adhering to these best practices, developers can create robust and maintainable asynchronous code.`,
      },
      {
        title: "Debugging Asynchronous Code",
        content: `Debugging asynchronous code can be challenging due to the non-linear execution flow. Tools like browser developer consoles provide features for inspecting promises, setting breakpoints in async functions, and tracking the execution order of asynchronous operations. This article explores techniques for effectively debugging asynchronous JavaScript code, including using console logs, debugging tools, and understanding the event loop.`,
      },
      {
        title: "Future of Asynchronous JavaScript",
        content: `The future of asynchronous JavaScript looks promising with ongoing advancements in the language and ecosystem. Features like top-level await, which allows using await outside of async functions, are being introduced to simplify asynchronous code further. Additionally, the rise of reactive programming paradigms and libraries like RxJS is changing how developers approach asynchronous data streams. As JavaScript continues to evolve, mastering asynchronous programming will remain a crucial skill for developers.`,
      },
    ],
  },
  6: {
    videos: [
      {
        title: "Working with RESTful APIs",
        url: "https://www.youtube.com/embed/-mN3VyJuCjM?si=5JjbptBrB85IJpwC",
      },
      {
        title: "AJAX in JavaScript",
        url: "https://www.youtube.com/embed/5MmEUWfuZFk?si=hs2J29cjVXndQUVj",
      },
    ],
    articles: [
      {
        title: "Introduction to RESTful APIs",
        content: `RESTful APIs (Representational State Transfer) are a set of architectural principles for designing networked applications. They allow different software systems to communicate over the web using standard HTTP methods like GET, POST, PUT, and DELETE. This article explores the fundamentals of RESTful APIs, including how they work, their advantages, and best practices for designing and consuming them.`,
      },
      {
        title: "Making AJAX Requests in JavaScript",
        content: `AJAX (Asynchronous JavaScript and XML) is a technique that allows web applications to send and receive data asynchronously without refreshing the page. This article covers how to make AJAX requests using the XMLHttpRequest object and the Fetch API, enabling developers to create dynamic and interactive web applications.`,
      },
      {
        title: "Handling JSON Data in JavaScript",
        content: `JSON (JavaScript Object Notation) is a lightweight data interchange format widely used in web APIs. This article explains how to parse JSON data received from APIs, manipulate it in JavaScript, and convert JavaScript objects back into JSON format for sending to servers.`,
      },
      {
        title: "Error Handling in API Requests",
        content: `When working with APIs, it's essential to handle errors gracefully. This article discusses common error scenarios when making API requests, such as network issues, server errors, and invalid responses. It also covers best practices for error handling in JavaScript applications.`,
      },
      {
        title: "Best Practices for Consuming RESTful APIs",
        content: `Consuming RESTful APIs effectively requires following best practices such as using appropriate HTTP methods, structuring requests properly, and managing authentication. This article provides guidelines for building robust applications that interact with RESTful services.`,
      },
      {
        title: "Testing RESTful APIs with Postman",
        content:
          "Postman is a widely used API testing tool that simplifies the process of developing, testing, and documenting RESTful APIs. It provides an intuitive interface to send HTTP requests like GET, POST, PUT, DELETE, and more to specific endpoints and inspect responses in real time. Developers can use Postman to verify the behavior of APIs, test edge cases, and ensure that backend services are returning the correct data and status codes. One of the key features of Postman is the ability to create collections, which group related requests together for organized and reusable testing workflows. Variables, environments, and scripting capabilities using JavaScript enhance the flexibility of tests, enabling dynamic behavior across requests. Postman also supports writing tests using the built-in test editor, allowing developers to automate API validation through assertions. For example, one can check whether a response status is 200, or if the returned JSON contains expected properties. Additionally, Postman's collection runner and monitors allow continuous and automated testing at scheduled intervals or after deployment. It also provides support for authentication methods like API keys, OAuth, and JWT. Overall, Postman plays a critical role in API development and quality assurance, ensuring that applications interact with APIs smoothly and reliably.",
      },
      {
        title: "Future Trends in API Development",
        content: `The future of API development is likely to see advancements in areas such as GraphQL, which allows clients to request only the data they need, and WebSockets for real-time communication. This article explores emerging trends in API design and how they will shape the future of web development.`,
      },
    ],
  },
  7: {
    videos: [
      {
        title: "Introduction to HTTP and Web Servers",
        url: "https://www.youtube.com/embed/H7bDwI5nUl8?si=F6EDrOCeu4UJsrN1",
      },
    ],
    articles: [
      {
        title: "Understanding HTTP Protocol",
        content: `HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. It defines how messages are formatted and transmitted, and how web servers and browsers should respond to various requests. This article covers the basics of HTTP, including request methods (GET, POST, PUT, DELETE), status codes, headers, and the overall request-response cycle.`,
      },
      {
        title: "Setting Up a Basic Web Server",
        content: `Setting up a web server is essential for hosting websites and serving content over the internet. This article provides a step-by-step guide to setting up a basic web server using popular technologies like Node.js, Apache, or Nginx. It covers configuration, serving static files, and handling requests.`,
      },
      {
        title: "Web Server Security Best Practices",
        content: `Security is a critical aspect of web server management. This article discusses best practices for securing web servers, including configuring firewalls, using HTTPS, managing user permissions, and protecting against common vulnerabilities like SQL injection and cross-site scripting (XSS).`,
      },
      {
        title: "Understanding Web Hosting Options",
        content: `There are various web hosting options available, including shared hosting, VPS (Virtual Private Server), dedicated hosting, and cloud hosting. This article explores the pros and cons of each option to help developers choose the right hosting solution for their projects.`,
      },
      {
        title: "Monitoring and Maintaining Web Servers",
        content: `Regular monitoring and maintenance are crucial for ensuring the performance and reliability of web servers. This article covers tools and techniques for monitoring server health, analyzing logs, performing backups, and optimizing server performance.`,
      },
    ],
  },
  8: {
    videos: [
      {
        title: "React JS Crash Course",
        url: "https://www.youtube.com/embed/Xe8CkYZvCig?si=FUoNVUEatDE60dfv",
      },
      {
        title: "Angular Full Course - Learn Angular in 6 Hours",
        url: "https://www.youtube.com/embed/0LhBvp8qpro?si=A4UrgqNogH3qNWS7",
      },
      {
        title: "Vue JS Crash Course",
        url: "https://www.youtube.com/embed/VeNfHj6MhgA?si=TtU5mzTXMbNH_6ch",
      },
    ],
    articles: [
      {
        title: "Introduction to Frontend Frameworks",
        content: `Frontend frameworks like React, Angular, and Vue help developers build scalable and maintainable web applications. These frameworks offer reusable components, efficient DOM manipulation, and tools to manage complex UIs. Understanding their core concepts is key to choosing the right tool for your project.`,
      },
      {
        title: "React: Component-Based UI Development",
        content: `React is a popular JavaScript library for building user interfaces using reusable components. It uses a virtual DOM for efficient rendering and supports unidirectional data flow. This article explores props, state, JSX, and React hooks to help you build interactive UI elements.`,
      },
      {
        title: "Angular: A Comprehensive Frontend Framework",
        content: `Angular is a full-featured MVC framework developed by Google. It offers a complete toolset for building large-scale web applications, including dependency injection, two-way data binding, and built-in HTTP services. Learn how Angular uses TypeScript and decorators to structure applications.`,
      },
      {
        title: "Vue.js: Lightweight and Easy to Integrate",
        content: `Vue.js is a progressive framework that is easy to integrate into projects. It provides a flexible and simple API for reactive UI development. This article covers Vue's template syntax, directives, component system, and how it compares with React and Angular.`,
      },
      {
        title: "Choosing Between React, Angular, and Vue",
        content: `React, Angular, and Vue each have their strengths. React excels in flexibility and community support, Angular is suited for enterprise-level apps, and Vue is known for its simplicity and ease of integration. This article helps you decide which framework fits your project needs best.`,
      },
    ],
  },
  9: {
    videos: [
      {
        title: "Redux Crash Course With React",
        url: "https://www.youtube.com/embed/poQXNp9ItL4",
      },
      {
        title: "React Context API Tutorial",
        url: "https://www.youtube.com/embed/5LrDIWkK_Bc",
      },
    ],
    articles: [
      {
        title: "Introduction to State Management in React",
        content: `State management is crucial for handling and sharing data across components in modern web applications. React's built-in state works well for simple apps, but as complexity grows, tools like Context API and Redux provide structured ways to manage state at scale.`,
      },
      {
        title: "Understanding React Context API",
        content: `The Context API is a built-in solution in React that allows developers to pass data through the component tree without using props manually at every level. It's great for theming, user authentication, or any data that needs to be accessible throughout the app.`,
      },
      {
        title: "Managing Global State with Redux",
        content: `Redux is a powerful state management library that helps manage global state using a single source of truth. It relies on actions, reducers, and a store. This article explains how Redux works, its benefits, and when to use it in large-scale applications.`,
      },
      {
        title: "Context API vs Redux: When to Choose What",
        content: `Choosing between Context API and Redux depends on your app's complexity. Context API is simple and ideal for light use cases, while Redux is more scalable and suitable for apps with complex state logic. Learn the pros and cons of both solutions in this article.`,
      },
      {
        title: "Best Practices for React State Management",
        content: `Effective state management improves performance, maintainability, and debugging. This article shares best practices, such as keeping local state close to where it’s used, normalizing complex data, and avoiding unnecessary re-renders using memoization and selectors.`,
      },
    ],
  },
  10: {
    videos: [
      {
        title: "Git and GitHub for Beginners – Crash Course",
        url: "https://www.youtube.com/embed/RGOj5yH7evk",
      },
      {
        title: "Learn Git in 20 Minutes",
        url: "https://www.youtube.com/embed/Y9XZQO1n_7c",
      },
      {
        title: "Git Tutorial for Beginners: Learn Git in 1 Hour",
        url: "https://www.youtube.com/embed/USjZcfj8yxE",
      },
    ],
    articles: [
      {
        title: "Introduction to Version Control with Git",
        content: `Version control is the practice of tracking and managing changes to software code. Git is a distributed version control system widely used by developers to collaborate and maintain history. This article introduces Git, its advantages, and how it helps manage code efficiently.`,
      },
      {
        title: "Getting Started with Git and GitHub",
        content: `GitHub is a cloud-based platform that hosts Git repositories and enhances collaboration with features like pull requests, issues, and actions. Learn how to create a GitHub account, initialize a repository, and push your code from local to remote.`,
      },
      {
        title: "Essential Git Commands Every Developer Should Know",
        content: `Git offers powerful commands for version control. This article covers essential Git commands such as git init, clone, add, commit, push, pull, branch, and merge. It includes use cases and practical tips to help developers work efficiently.`,
      },
      {
        title: "Branching and Merging in Git",
        content: `Branching allows developers to work on different features or fixes independently. This article explains how to create branches, switch between them, and merge changes using Git. It also discusses conflict resolution during merges.`,
      },
      {
        title: "Best Practices for Using Git and GitHub",
        content: `Effective use of Git and GitHub involves consistent commit messages, using .gitignore files, frequent pushing, and code reviews through pull requests. This article explores team workflows like Git Flow and how to manage collaboration smoothly on GitHub.`,
      },
    ],
  },
  11: {
    videos: [
      {
        title: "What is npm?",
        url: "https://www.youtube.com/embed/P3aKRdUyr0s?si=pkaCbFLQ48UuvJwz",
      },
      {
        title: "Webpack Crash Course for Beginners",
        url: "https://www.youtube.com/embed/IZGNcSuwBZs",
      },
    ],
    articles: [
      {
        title: "Understanding npm and Package Management",
        content: `npm (Node Package Manager) is the default package manager for Node.js. It allows developers to install, share, and manage dependencies in JavaScript projects. This article covers how to use npm to install packages, manage package.json, and explore popular npm scripts.`,
      },
      {
        title: "Introduction to Webpack: The Module Bundler",
        content: `Webpack is a powerful build tool for bundling JavaScript files and assets for deployment. It processes modules, transpiles code, and optimizes output. This article walks through the setup of Webpack, understanding entry/output, loaders, and plugins.`,
      },
      {
        title: "Babel: JavaScript Compiler Explained",
        content: `Babel is a JavaScript compiler that allows you to use modern ES6+ syntax in older environments by transpiling the code. This article explains how Babel works, how to configure it using .babelrc, and how it integrates with Webpack in modern front-end development.`,
      },
      {
        title: "Setting Up a Frontend Project with npm and Webpack",
        content: `A step-by-step guide to initializing a project using npm, configuring Webpack for bundling, and using Babel for transpilation. This article includes how to handle CSS, images, and code splitting for performance optimization.`,
      },
      {
        title: "Comparing Build Tools: npm Scripts vs Webpack vs Gulp",
        content: `There are multiple tools available for managing and automating build tasks in JavaScript projects. This article compares npm scripts, Webpack, and Gulp, highlighting when to use each and best practices for managing builds effectively.`,
      },
    ],
  },
  12: {
    videos: [
      {
        title: "React Testing Crash Course with Jest and React Testing Library",
        url: "https://www.youtube.com/embed/YYnOIc8-SCw?si=dmytCWhg_cnw46XJ",
      },
      {
        title: "Unit Testing Explained",
        url: "https://www.youtube.com/embed/So0gxfFGmLs?si=huLU-FPIEK_isiKS",
      },
    ],
    articles: [
      {
        title: "Introduction to Jest: JavaScript Testing Framework",
        content: `Jest is a popular testing framework developed by Facebook, used primarily for testing JavaScript and React applications. This article introduces key Jest concepts such as test suites, matchers, mocking functions, and running tests using CLI.`,
      },
      {
        title: "Getting Started with React Testing Library",
        content: `React Testing Library focuses on testing UI components from the user's perspective. This article explains how to write tests that query elements by role, label, and text, and how to simulate user interactions like clicks and typing.`,
      },
      {
        title: "Understanding Unit Testing in JavaScript",
        content: `Unit testing involves testing individual functions or components in isolation. This article explains the principles of unit testing, how to write clean tests using Jest, and best practices for ensuring test reliability and speed.`,
      },
      {
        title: "Integration Testing with React",
        content: `Integration testing checks the interaction between multiple components. This article shows how to simulate API calls, verify component communication, and ensure that the overall functionality works as expected using React Testing Library and Jest.`,
      },
      {
        title: "Mocking and Coverage Reporting in Jest",
        content: `Mocking allows developers to simulate external modules or functions during tests. This article explores mocking techniques in Jest, how to generate test coverage reports, and how to ensure your codebase is well-tested and maintainable.`,
      },
    ],
  },
  13: {
    videos: [
      {
        title: "Web Performance Optimization Techniques",
        url: "https://www.youtube.com/embed/XSVkWiW-t4k?si=ErrNmn7YNkLOSueG",
      },
      {
        title: "Core Web Vitals Explained",
        url: "https://www.youtube.com/embed/NItNEiWmJdU?si=A_wZSj6xScuaVLlx",
      },
    ],
    articles: [
      {
        title: "Introduction to Web Performance Optimization",
        content: `Web performance optimization focuses on reducing load times, enhancing responsiveness, and delivering better user experiences. This article outlines the importance of performance in modern web development and introduces key strategies like code splitting, lazy loading, and asset minification.`,
      },
      {
        title: "Using Lighthouse to Audit Web Performance",
        content: `Lighthouse is a powerful tool provided by Google to audit web apps for performance, accessibility, SEO, and more. This article walks through setting up Lighthouse audits, interpreting performance scores, and implementing recommended fixes.`,
      },
      {
        title: "Optimizing Images for the Web",
        content: `Images can significantly affect website speed. This article explores techniques such as compression, responsive images (srcset), modern formats like WebP, and lazy loading to improve image delivery and performance.`,
      },
      {
        title: "Caching Strategies for Faster Load Times",
        content: `Effective caching reduces server load and speeds up website access. This article explains browser caching, server-side caching, and the use of service workers and Content Delivery Networks (CDNs) to optimize load times.`,
      },
      {
        title: "Improving Core Web Vitals",
        content: `Core Web Vitals are a set of metrics related to loading, interactivity, and visual stability. This article discusses how to improve metrics like Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) for better performance and SEO rankings.`,
      },
    ],
  },
  14: {
    videos: [
      {
        title: "Node.js Crash Course",
        url: "https://www.youtube.com/embed/32M1al-Y6Ag?si=duEC2lXZFNWOhV-X",
      },
      {
        title: "Express.js Crash Course",
        url: "https://www.youtube.com/embed/CnH3kAXSrmU?si=3PMXKWF1yBd1Ibsv",
      },
      {
        title: "Build a REST API with Node and Express",
        url: "https://www.youtube.com/embed/uNCrMvkPUAE?si=M9bJuvceMMdTsFNE",
      },
    ],
    articles: [
      {
        title: "Introduction to Node.js and Server-Side JavaScript",
        content: `Node.js is a JavaScript runtime that allows developers to write server-side applications using JavaScript. This article explores the architecture of Node.js, event-driven programming, and why it's ideal for building fast, scalable web applications.`,
      },
      {
        title: "Setting Up a Basic Express Server",
        content: `Express.js is a minimal and flexible Node.js web application framework. This article walks through setting up an Express server, handling routes, sending responses, and structuring a simple backend app.`,
      },
      {
        title: "Understanding Middleware in Express",
        content: `Middleware functions in Express.js are essential for handling requests, modifying responses, and error handling. This article explains how to use and chain middleware functions effectively in a Node.js application.`,
      },
      {
        title: "RESTful API Basics with Node and Express",
        content: `Creating RESTful APIs is a common use case for Node.js and Express. This article discusses REST principles, setting up routes for CRUD operations, and integrating the API with frontend clients.`,
      },
      {
        title: "Connecting Node.js with Databases",
        content: `Backend applications often require persistent storage. This article covers connecting Node.js to databases like MongoDB and SQL, performing basic queries, and organizing data access using models and controllers.`,
      },
    ],
  },
  15: {
    videos: [
      {
        title: "SQL vs NoSQL Explained",
        url: "https://www.youtube.com/embed/Q5aTUc7c4jg?si=ZmvfyLIwXoh5K3Jy",
      },
      {
        title: "MySQL Full Course for Beginners",
        url: "https://www.youtube.com/embed/5OdVJbNCSso?si=IJ2fz-29IsO-vE8U",
      },
      {
        title: "MongoDB Tutorial for Beginners",
        url: "https://www.youtube.com/embed/J6mDkcqU_ZE?si=Gft1WQlBaaXSLXzZ",
      },
    ],
    articles: [
      {
        title: "Understanding Relational Databases and SQL",
        content: `SQL (Structured Query Language) databases are relational, using tables to store data with predefined schemas. This article introduces key concepts such as tables, rows, columns, primary keys, foreign keys, and common operations like SELECT, INSERT, UPDATE, and DELETE.`,
      },
      {
        title: "Introduction to NoSQL and MongoDB",
        content: `NoSQL databases like MongoDB are non-relational and store data in flexible, JSON-like documents. This article explores the advantages of NoSQL, MongoDB architecture, collections, documents, and basic CRUD operations using the MongoDB shell or drivers.`,
      },
      {
        title: "Differences Between SQL and NoSQL Databases",
        content: `This article highlights the core differences between SQL and NoSQL databases, including data models, scalability, flexibility, performance, and use cases. It helps developers choose the right database for specific project needs.`,
      },
      {
        title: "Performing CRUD Operations in MongoDB",
        content: `MongoDB allows developers to create, read, update, and delete documents efficiently. This article provides examples of CRUD operations using the MongoDB shell and Node.js, along with best practices for document modeling.`,
      },
      {
        title: "Database Design Best Practices",
        content: `Good database design is crucial for performance and maintainability. This article covers normalization, indexing, relationships, schema design in SQL, and denormalization strategies for NoSQL systems like MongoDB.`,
      },
    ],
  },
  16: {
    videos: [
      {
        title: "Introduction to Authentication & Authorization",
        url: "https://www.youtube.com/embed/36ziktbm1To?si=5CFa_IOjIIbDVxx8",
      },
      {
        title: "JWT Authentication Tutorial",
        url: "https://www.youtube.com/embed/mbsmsi7l3r4?si=VvSGaP2Kk2vPTglc",
      },
      {
        title: "OAuth 2.0 Explained",
        url: "https://www.youtube.com/embed/UGaO0H_1aFQ?si=KhwC1-iON6gd6QqN",
      },
    ],
    articles: [
      {
        title: "Understanding Authentication vs Authorization",
        content: `Authentication is the process of verifying who a user is, while authorization determines what an authenticated user is allowed to do. This article explains the differences and why both are essential for secure applications.`,
      },
      {
        title: "JSON Web Tokens (JWT) Basics",
        content: `JWTs are compact, URL-safe tokens used for securely transmitting information between parties. This article explains how JWTs work, their structure (header, payload, signature), and how they enable stateless authentication in modern web applications.`,
      },
      {
        title: "Implementing JWT Authentication in Node.js",
        content: `Learn how to create and verify JWT tokens in a Node.js backend using libraries like jsonwebtoken. This article walks through user login, token generation, middleware for protecting routes, and token expiration strategies.`,
      },
      {
        title: "OAuth 2.0 Framework Overview",
        content: `OAuth 2.0 is an authorization framework that enables third-party applications to obtain limited access to user resources without sharing credentials. This article covers OAuth roles, grant types, and the authorization code flow used by many web apps.`,
      },
      {
        title: "Security Best Practices for Authentication and Authorization",
        content: `This article discusses key security measures such as using HTTPS, secure storage of tokens, implementing refresh tokens, protecting against CSRF and XSS attacks, and monitoring for suspicious activity to safeguard user data.`,
      },
    ],
  },
  17: {
    videos: [
      {
        title: "Deploying Websites with Netlify",
        url: "https://www.youtube.com/embed/eSeBVcKZx9Y?si=QvPZB8YE5HzEhwMk",
      },
      {
        title: "Vercel Deployment Tutorial for React Apps",
        url: "https://www.youtube.com/embed/hAuyNf0Uk-w?si=XVlxz6q66ixpayhd",
      },
      {
        title: "AWS for Beginners - Hosting a Web Application",
        url: "https://www.youtube.com/embed/_LIuNAu5Ktc?si=TVBiSbEBjD3xsZ3F",
      },
    ],
    articles: [
      {
        title: "Introduction to Web Deployment and Hosting",
        content: `Web deployment is the process of publishing your web application to a server so users can access it online. This article covers the basics of deployment, different types of hosting options, and why choosing the right hosting service matters for performance, scalability, and security.`,
      },
      {
        title: "Getting Started with Netlify for Frontend Deployment",
        content: `Netlify is a popular platform for deploying static websites and frontend applications quickly and easily. This article guides you through creating a Netlify account, connecting your Git repository, setting up continuous deployment, and configuring domain settings.`,
      },
      {
        title: "Deploying React Applications on Vercel",
        content: `Vercel is optimized for deploying modern frontend frameworks like React. This article explains how to deploy React apps on Vercel, use serverless functions, configure environment variables, and manage deployments via the Vercel dashboard.`,
      },
      {
        title: "Hosting Full-stack Applications on AWS",
        content: `Amazon Web Services (AWS) offers powerful infrastructure for hosting full-stack applications with flexible scaling options. This article introduces AWS services like EC2, S3, and Elastic Beanstalk, and provides step-by-step instructions for deploying backend and frontend apps.`,
      },
      {
        title: "Best Practices for Deployment and Hosting",
        content: `To ensure reliable and secure deployments, it’s essential to follow best practices such as using HTTPS, environment variables for secrets, setting up continuous integration/continuous deployment (CI/CD) pipelines, monitoring uptime, and optimizing performance through caching and CDN usage.`,
      },
    ],
  },
};

const WebTopicPage = () => {
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
      navigate(`/study-material/web-dev/topic/${nextId}`);
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

export default WebTopicPage;
