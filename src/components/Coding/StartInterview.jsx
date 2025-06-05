import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "./utils/db";
import { Coding } from "./utils/schema";
import { eq } from "drizzle-orm";
import { Button } from "@mui/material";
import QuestionSection from "./QuestionSection";
import CodeEditor from "./CodeEditor";

const StartInterview = () => {
  const { interviewId } = useParams();
  const [interviewData, setInterviewData] = useState();
  const [codingQuestion, setCodingQuestion] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  useEffect(() => {
    getInterviewDetails();
  }, []);

  const getInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(Coding)
        .where(eq(Coding.mockId, interviewId));

      const jsonMockResp = JSON.parse(result[0].jsonMockResp);
      setCodingQuestion(jsonMockResp);
      setInterviewData(result[0]);
    } catch (error) {
      console.error("Error fetching interview data:", error);
    }
  };

  const handleAnswerRecorded = (answer) => {
    setUserAnswers((prev) => ({
      ...prev,
      [activeQuestionIndex]: answer,
    }));
  };

  return (
    <div className="interview-wrapper">
      <h1 className="interview-title">Start Coding Practice</h1>

      <div className="question-header">
        <div className="interview-layout">
        <div className="question-section">
          <QuestionSection
            codingQuestion={codingQuestion}
            activeQuestionIndex={activeQuestionIndex}
            setActiveQuestionIndex={setActiveQuestionIndex}
          />


          <div className="interview-controls">
            {activeQuestionIndex > 0 && (
              <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)} style={{ border: "1px solid blue", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Previous Question
              </Button>
            )}

            {codingQuestion &&
              activeQuestionIndex !== codingQuestion.length - 1 && (
                <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)} style={{ border: "1px solid blue", padding: "0.5rem", borderRadius: "0.5rem" }}>
                  Next Question
                </Button>
              )}

            {codingQuestion &&
              activeQuestionIndex === codingQuestion.length - 1 &&
              interviewData?.mockId && (
                <Link to={`/`}>
                  <Button style={{ border: "1px solid blue", padding: "0.5rem", borderRadius: "0.5rem" }}>End Interview</Button>
                </Link>
              )}
          </div>
        </div>
        </div>
        <div className="code-editor-section">
          <CodeEditor />
        </div>
      </div>
    </div>
  );
};

export default StartInterview;
