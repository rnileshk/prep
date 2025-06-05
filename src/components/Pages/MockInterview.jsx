import { Button } from "@mui/material";
import React from "react";

const MockInterview = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "2rem" }}>
        Explore Our AI Mock Interview
      </h1>
      <div
        style={{
          textAlign: "center",
          padding: "0.2rem",
          margin: "0 5rem",
          fontSize: "1.5rem",
          fontWeight: "500",
          color: "#333",
        }}
      >
        <p style={{ textAlign: "center", padding: "0.5rem" }}>
          Our AI Mock Interview is designed to help you prepare for job
          interviews by simulating real interview scenarios. With a wide range
          of questions and feedback, you can practice and improve your interview
          skills.
        </p>
        <p style={{ textAlign: "center", padding: "0.5rem" }}>
          Click the button below to start your mock interview and take the first
          step towards acing your next job interview!
        </p>
      </div>
      <div className="mock">
        <img src="/robot.png" alt="robot" className="img" />
        <div
          style={{
            textAlign: "center",
            padding: "0.5rem",
            fontSize: "1.2rem",
            fontWeight: "500",
            color: "#333",
            justifyContent: "center",
          }}
          className="mock-content"
        >
          <h1 style={{ textAlign: "center" }}>
            Practise Your Next Mock Interview
          </h1>
          <p style={{ textAlign: "center", padding: "0.5rem" }}>
            Our AI Mock Interview is designed to help you prepare for job
            interviews by simulating real interview scenarios. With a wide range
            of questions and feedback, you can practice and improve your
            interview skills.
          </p>
          <p style={{ textAlign: "center", padding: "0.5rem" }}>
            Whether you're a fresh graduate or an experienced professional, our
            AI Mock Interview can help you gain confidence and perform better in
            your next interview.
          </p>
          <div>
            <Button
              className="custom-btn"
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "1rem",
                border: "2px solid black",
              }}
            >
              <a
                href="https://ai-generated-mock-interview.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Mock Interview
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockInterview;
