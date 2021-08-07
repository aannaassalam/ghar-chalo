import React from "react";
import "./asidebar.css";
import Calendar from "react-calendar";
import moment from "moment";
import HomeworkCard from "../homework-card/homeworkCard";

function Asidebar() {
  return (
    <div className="asidebar">
      <Calendar
        next2Label={null}
        prev2Label={null}
        nextLabel={<i className="fas fa-chevron-right"></i>}
        prevLabel={<i className="fas fa-chevron-left"></i>}
        formatShortWeekday={(locale, date) =>
          moment(date).format("dd").substr(0, 1)
        }
        calendarType="US"
      />
      {/* <div className="homework">
        <h2>Homework progress</h2>
        <HomeworkCard />
      </div> */}
    </div>
  );
}

export default Asidebar;
