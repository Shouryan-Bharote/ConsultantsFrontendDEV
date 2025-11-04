import React, { useState } from 'react';
import './CoursesSection.css';

const courseData = [
  {
    id: 1,
    title: "Senior Management Level",
    description:
      "Gain leadership and strategic management skills to take your career to the next level. Focus on organizational design, risk management, and financial leadership in a global context.",
  },
  {
    id: 2,
    title: "Mid-Career Professional",
    description:
      "Enhance your core business acumen with courses in project management, digital transformation, and advanced analytics. Prepare for higher-level responsibilities.",
  },
  {
    id: 3,
    title: "Entry-Level Associate",
    description:
      "Build a strong foundation in essential business concepts, communication, and basic technical skills required for success in a professional environment.",
  },
];

const CourseSection = () => {
  const [showAll, setShowAll] = useState(true); // Controls visibility of all or single course

  const cardsToDisplay = showAll ? courseData : courseData.slice(0, 1);
  const buttonText = showAll ? 'View Less' : 'View All';

  return (
    <div className="course-section">
      <h2 className="course-title">Courses For Upskilling</h2>

      <div className="course-container">
        {cardsToDisplay.map((course) => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button className="course-info-btn">Get Info</button>
          </div>
        ))}
      </div>

      {courseData.length > 1 && (
        <button
          className="toggle-view-btn"
          onClick={() => setShowAll(!showAll)}
          aria-label={buttonText}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default CourseSection;
