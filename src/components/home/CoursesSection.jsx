import React from 'react';
import './CoursesSection.css'; 

const CourseSection = () => {
  return (
    <div className="course-section">
      <h2 className="course-title">Courses For Upskilling</h2>

      <div className="course-container">
        {/* Card 1:  */}
        <div className="course-card">
          <h3>Senior Mangement Level</h3>
          <p>
            Gain leadership and strategic management skills to take your career to the next level.
            Focus on organizational design, risk management, and financial leadership in a global context.
          </p>
          <button className="course-info-btn">Get Info</button>
        </div>

        {/* Card 2:  */}
        <div className="course-card">
          <h3>Senior Mangement Level</h3>
          <p>
            Gain leadership and strategic management skills to take your career to the next level.
            Focus on organizational design, risk management, and financial leadership in a global context.          </p>
          <button className="course-info-btn">Get Info</button>
        </div>

        {/* Card 3:  */}
        <div className="course-card">
          <h3>Senior Mangement Level</h3>
          <p>
            Gain leadership and strategic management skills to take your career to the next level.
            Focus on organizational design, risk management, and financial leadership in a global context.          </p>
          <button className="course-info-btn">Get Info</button>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
