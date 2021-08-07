import React from "react";
import "./navbar.css";
import cap from "../../assets/mortarboard.png";
import user from "../../assets/userimg.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={cap} alt="" />
        <h4>Intely</h4>
      </div>

      <div className="links">
        <i className="far fa-heart"></i>
        <i className="far fa-bell"></i>
        <div className="user">
          <h4>Hugo Olafsson</h4>
          <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
