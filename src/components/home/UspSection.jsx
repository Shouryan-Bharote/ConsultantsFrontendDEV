import React from "react";
import "./UspSection.css";

const UspSection = () => {
  return (
    <section className="usp-section">
      <div className="usp-image">
        <img src="/src/assets/images/uspimg.png" alt="Team discussion" />
      </div>

      <div className="usp-content">
        <h2 className="usp-heading">
          <span>W</span>hy Infinova Consultants <span>?</span>
        </h2>
        <div className="usp-text-box">
          <p>
            "I have a full-time job and 3 kids. I needed the flexibility offered
            by Coursera Plus in order to achieve my goals. My Coursera Plus
            subscription motivated me to keep learning."
          </p>
          <p>
            "I have a full-time job and 3 kids. I needed the flexibility offered
            by Coursera Plus in order to achieve my goals. My Coursera Plus
            subscription motivated me to keep learning. My Coursera Plus
            subscription motivated me to keep learning.My Coursera Plus
            subscription motivated me to keep learning"
          </p>
        </div>
      </div>
    </section>
  );
};

export default UspSection;
