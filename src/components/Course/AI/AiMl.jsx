import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { FaVideo, FaBook, FaCode } from "react-icons/fa";

const topics = [
  { id: 1, name: "Supervised Learning" },
  { id: 2, name: "Unsupervised Learning" },
  { id: 3, name: "Reinforcement Learning" },
  { id: 4, name: "Model Evaluation" },
  { id: 5, name: "Overfitting and Underfitting" },
  { id: 6, name: "Feature Engineering" },
  { id: 7, name: "Ensemble Methods" },
  { id: 8, name: "Support Vector Machines (SVM)" },
  { id: 9, name: "Naive Bayes Classifier" },
  { id: 10, name: "Neural Networks and Deep Learning" },
  { id: 11, name: "K-Nearest Neighbors (KNN)" },
  { id: 12, name: "Gradient Descent and Optimization" },
];

const AiMl = () => {
  const navigate = useNavigate();

  const handleStart = (id) => {
    navigate(`/study-material/machine-learning/topic/${id}`);
  };

  return (
    <div style={{ padding: "2rem", backgroundColor: "#ecf5f7" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>
        Machine Learning (ML)
      </h1>
      <Divider component="" style={{ marginTop: "1rem", color: "#fff" }} />
      <div className="dsa">
        <img src="/ai.jpg" alt="dsa" className="dsa-image" />
        <div className="overview">
          <h2>Course Overview</h2>
          <p>
            Machine Learning (ML) is a subfield of Artificial Intelligence (AI)
            that focuses on building systems that learn from data and improve
            over time without being explicitly programmed. This course
            introduces fundamental concepts and techniques of machine learning,
            including both supervised and unsupervised learning, model
            evaluation, and practical implementation using tools like Python and
            scikit-learn.
          </p>
        </div>
      </div>
      <Divider component="" style={{ marginTop: "1rem" }} />
      <div className="dsa">
        <div className="overview">
          <h2>About The Course</h2>
          <div>
            <h2>✅ Key Highlights</h2>
            <ul>
              <li>
                Understanding the difference between AI, ML, and Deep Learning
              </li>
              <li>
                Types of Machine Learning: Supervised, Unsupervised, and
                Reinforcement Learning
              </li>
              <li>
                Data preprocessing, feature engineering, and exploratory data
                analysis
              </li>
              <li>
                Popular algorithms: Linear Regression, Logistic Regression,
                Decision Trees, SVM, KNN, Naive Bayes
              </li>
              <li>
                Clustering techniques like K-Means, DBSCAN, and Hierarchical
                Clustering
              </li>
              <li>Dimensionality reduction using PCA and t-SNE</li>
              <li>
                Model evaluation metrics: Accuracy, Precision, Recall, F1-score,
                ROC-AUC
              </li>
              <li>
                Avoiding overfitting using techniques like cross-validation and
                regularization
              </li>
              <li>Introduction to Neural Networks and Deep Learning</li>
              <li>
                Hands-on projects and real-world case studies using Python
              </li>
            </ul>

            <h2>🎯 Course Objectives</h2>
            <ul>
              <li>
                To understand core machine learning concepts and workflows
              </li>
              <li>To learn and implement various ML algorithms in Python</li>
              <li>
                To perform data preprocessing, visualization, and model tuning
              </li>
              <li>To evaluate and improve model performance</li>
              <li>
                To apply machine learning solutions to real-world problems
              </li>
              <li>
                To build confidence for interviews and advanced ML courses
              </li>
            </ul>

            <h2>📌 Why Learn Machine Learning?</h2>
            <p>Mastering machine learning opens doors to careers in:</p>
            <ul>
              <li>Data Science and AI Engineering</li>
              <li>Business Intelligence and Analytics</li>
              <li>Research and Innovation in AI</li>
              <li>Software Engineering with Smart Capabilities</li>
              <li>
                High-paying roles at product-based and tech-driven companies
              </li>
            </ul>
          </div>
        </div>
        <img src="/ai.jpg" alt="dsa" className="dsa-images" style={{ width: "30rem"}}/>
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
                  src="/ai.jpg"
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

export default AiMl;
