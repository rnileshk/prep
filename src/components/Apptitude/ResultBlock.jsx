import React from 'react';

const ResultBlock = ({ userAnswers, logs, questions }) => {
  const resultSummary = () => {
    const attempted = userAnswers.filter((a) => a.selected !== 'Skipped').length;
    const correct = userAnswers.filter((a) => a.isCorrect).length;
    const incorrect = attempted - correct;
    const unattempted = questions.length - attempted;
    return { attempted, correct, incorrect, unattempted };
  };

  const { attempted, correct, incorrect, unattempted } = resultSummary();

  return (
    <div className="result-container">
      <h2 className="result-heading">📊 Result Summary</h2>
      <ul className="result-summary">
        <li className="summary-item attempted">✔️ Attempted: {attempted}</li>
        <li className="summary-item correct">✅ Correct: {correct}</li>
        <li className="summary-item incorrect">❌ Incorrect: {incorrect}</li>
        <li className="summary-item unattempted">🕳️ Unattempted: {unattempted}</li>
      </ul>

      <h3 className="result-section-heading">📘 Answer Review</h3>
      <ul className="answer-review">
        {userAnswers.map((a, i) => (
          <li key={i} className={`answer-item ${a.isCorrect ? 'answer-correct' : 'answer-wrong'}`}>
            <p className="question-label"><strong>Q{i + 1}:</strong> {a.question}</p>
            <p>Your Answer: <span className="user-answer">{a.selected}</span> 
              <span className={`answer-status ${a.isCorrect ? 'correct' : 'wrong'}`}>
                {a.isCorrect ? '✅' : '❌'}
              </span>
            </p>
            <p>Correct Answer: <span className="correct-answer">{a.correct}</span></p>
            <p className="explanation">Explanation: <em>{a.explanation}</em></p>
          </li>
        ))}
      </ul>

        <h3 className="result-section-heading">🛑 Suspicious Activity Log</h3>

        <ul className="activity-log">
        {logs.length === 0 ? (
          <li className="no-log">No suspicious activity</li>
        ) : (
          logs.map((log, i) => (
            <li key={i} className="log-entry">
              <span className="log-time">[{log.timestamp}]</span> - <span className="log-type">{log.type}</span>
            </li>
          ))
        )}
      </ul>

    </div>
  );
};

export default ResultBlock;
