import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="explore-section-container">
      <div className="explore-section-content">
        {/* Left Side with the Main Heading */}
        <div className="explore-left">
          <h1>
            Explore
            <br />
            Infinova
            <br />
            Global
          </h1>
        </div>

        {/* Right Side with Text and Button */}
        <div className="explore-right">
          <div className="vertical-divider"></div>
          <div className="text-content">
            <p>
              "I have a full-time job and 3 kids. I needed the flexibility offered
              by Coursera Plus in order to achieve my goals. My Coursera Plus
              subscription motivated me to keep learning."<br/>
              "I have a full-time job and 3 kids. I needed the flexibility offered
              by Coursera Plus in order to achieve my goals. My Coursera Plus
              subscription motivated me to keep learning."
            </p>
            
            <button className="explore-button">Explore All</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;