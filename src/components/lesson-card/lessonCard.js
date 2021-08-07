import React from "react";
import "./lessonCard.css";
import male from "../../assets/male.jfif";

function LessonCard() {
  return (
    <div className="lesson-card">
      <div className="date-time">
        <h4>Aug, 07</h4>
        <h5>4:00 PM</h5>
      </div>
      <div className="data">
        <h5>Tutoring. Algebra</h5>
        <p>Kiersten Lange</p>
      </div>
      <img src={male} alt="" />
    </div>
  );
}

export default LessonCard;
