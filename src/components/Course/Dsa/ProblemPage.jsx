import React from "react";
import { useParams } from "react-router-dom";

const dummyProblems = {
  1: {
    title: "Second Largest",
    description: "Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.",
    difficulty: "Easy",
    input: "[12, 35, 1, 10, 34, 1]",
    output: "34",
    explanation: "The largest element of the array is 35 and the second largest element is 34.",
  },
  2: {
    title: "Maximum Subarray",
    description: "Find the contiguous subarray with the largest sum.",
    difficulty: "Medium",
    input: "[-2,1,-3,4,-1,2,1,-5,4]",
    output: "6",
    explanation: "The subarray [4,-1,2,1] has the largest sum = 6.",
  },
};

const ProblemPage = () => {
  const { id } = useParams();
  const problem = dummyProblems[id];

  if (!problem) return <h2 style={{ padding: "2rem" }}>Problem not found</h2>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{problem.title}</h1>
      <p><strong>Difficulty:</strong> {problem.difficulty}</p>
      <p><strong>Description:</strong> {problem.description}</p>
      <p><strong>Input:</strong> {problem.input}</p>
      <p><strong>Output:</strong> {problem.output}</p>
      <p><strong>Explanation:</strong> {problem.explanation}</p>
    </div>
  );
};

export default ProblemPage;
