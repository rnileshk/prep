import React from "react";

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Privacy Policy</h1>
      <p style={{ textAlign: "center" }}>Last Updated: May 29, 2025</p>

      <div>
        <h2>1. Introduction</h2>
        <p>
          We value your privacy and are committed to protecting your personal
          data. This Privacy Policy outlines how we collect, use, and safeguard
          your information when you use our services.
        </p>
      </div>

      <div>
        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Personal details (name, email, phone number, etc.)</li>
          <li>Usage data (pages visited, time spent, etc.)</li>
          <li>Cookies and tracking data</li>
        </ul>
      </div>

      <div>
        <h2>3. How We Use Your Information</h2>
        <p>Your data may be used to:</p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Improve user experience</li>
          <li>Send updates or promotional content (if subscribed)</li>
        </ul>
      </div>

      <div>
        <h2>4. Data Sharing & Security</h2>
        <p>
          We do not sell your personal data. Data may be shared with third-party
          services only to support our application (e.g., analytics, hosting)
          under strict confidentiality agreements. We use industry-standard
          measures to protect your data.
        </p>
      </div>

      <div>
        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the data we store about you</li>
          <li>Request corrections or deletions</li>
          <li>Withdraw consent at any time</li>
        </ul>
      </div>

      <div>
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about this policy, please contact us at{" interviewprep.ac@gmail.com "}
          <a href="mailto:interviewprep.ac@gmail.com">support@example.com</a>.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
