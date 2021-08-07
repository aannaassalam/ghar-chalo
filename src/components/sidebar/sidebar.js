import { Tab, Tabs } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import "./sidebar.css";

function Sidebar({ value, setValue, value2, setValue2 }) {
  return (
    <div className="sidebar">
      <Tabs
        value={value}
        orientation="vertical"
        onChange={(e, value) => setValue(value)}
        className="tabs"
        TabIndicatorProps={{
          style: {
            left: 0,
            right: "auto",
            backgroundColor: "#4CA1EC",
            width: 5,
          },
        }}
      >
        <Tab label={<i className="fas fa-graduation-cap"></i>} />
        <Tab label={<i className="far fa-comment"></i>} />
        <Tab label={<i className="far fa-star"></i>} />
        <Tab label={<i className="fas fa-bolt"></i>} />
      </Tabs>
    </div>
  );
}

export default Sidebar;
