// src/components/QuizComponent.jsx

import React, { useState, useEffect } from "react";

const QuizComponent = ({ questions, onComplete }) => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [finished, setFinished] = useState(false);

  if (!questions || questions.length === 0 || !questions[index]) {
    return <p>No questions available. Please try a different topic.</p>;
  }

  const q = questions[index];

  const handleOptionClick = (opt) => {
    setSelected(opt);
    if (opt === q.correctAnswer) setScore(prev => prev + 1);
    setShowExplanation(true);
  };

  const next = () => {
    if (index + 1 >= questions.length) {
      setFinished(true);
    } else {
      setIndex(index + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  };

  useEffect(() => {
    if (finished) {
      onComplete(score);
    }
  }, [finished]);

  return (
    <div className="quiz-component">
      <div className="ques">
        <h3>Question {index + 1} of {questions.length}</h3>
        <h3 className="font" style={{ fontSize: "1.2rem" }}>{q.question}</h3>
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleOptionClick(opt)}
            className={`btn ${selected === opt ? "bg-blue-200" : ""}`}
            disabled={showExplanation}
          >
            {opt}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="explanation">
          <p>✅ Correct Answer: {q.correctAnswer}</p>
          <p>🧠 Explanation: {q.explanation}</p>
          <button onClick={next} className="btns">
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
