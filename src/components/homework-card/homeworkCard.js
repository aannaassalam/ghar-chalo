import React from "react";
import "./homeworkCard.css";
import { Box, CircularProgress } from "@material-ui/core";

function HomeworkCard() {
  return (
    <div className="homeworkCard">
      <Box position="relative" width={40}>
        <CircularProgress variant="determinate" value={25} />
        <h4 className="percentage">25%</h4>
      </Box>
      <div className="content">
        <h4>Biology</h4>
        <p className="date">September, 7 Monday</p>
      </div>
      <i className="fas fa-chevron-right"></i>
    </div>
  );
}

export default HomeworkCard;
