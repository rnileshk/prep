import React, { useState } from "react";

function Faq() {
  const faqs = [
    {
      question: "What services does your platform offer?",
      answer:
        "We provide study materials, aptitude practice, resume building and analysis, mock interviews, and coding practice to help candidates prepare for competitive exams and job interviews.",
    },
    {
      question: "Is there any cost to use the services?",
      answer:
        "All services are completely free of charge. We believe in making quality resources accessible to everyone.",
    },
    {
      question: "Can I get personalized resume feedback?",
      answer:
        "Yes, our resume analysis service offers detailed feedback and suggestions tailored to your career goals and job role.",
    },
    {
      question: "How do I book a mock interview?",
      answer:
        "You can schedule a mock interview through the 'Mock Interview' service page. Choose a slot and follow the booking instructions.",
    },
    {
      question: "What programming languages do you support in coding practice?",
      answer:
        "We currently support problems in C, C++, Java. More languages will be added soon.",
    },
    {
      question: "Do I need to create an account to access materials?",
      answer:
        "Yes, creating an account helps us personalize your experience and save your progress across various services.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            {faq.question}
            <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;
