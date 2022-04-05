import React from "react";
import "./TopNavbar.css";
function TopNavbar() {
  return (
    <div className="topNavbar">
      {/*Logo
      5 list items
      2 buttons*/}
      <div className="topNavbar__contents">
        <div className="topNavbar__logo">
          <img
            src="https://files.codingninjas.in/cn-logo-dark-9824.svg"
            alt=""
          />
        </div>
        <div className="topNavbar__list">
          <ol>
            <li>Courses</li>
            <li>Mock Interviews</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
          </ol>
        </div>
        <div className="topNavbar__button">Buttons</div>
      </div>
    </div>
  );
}

export default TopNavbar;
