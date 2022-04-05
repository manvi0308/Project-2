import React from "react";
import "./MainBodyContent.css";
function MainBodyContent() {
  return (
    <div className="MainBodyContent">
      <div className="headingsAndMascot">
        <div className="heading">
          <h1 className="mainBodyContent__h1">Events & News</h1>
          <h2 className="mainBodyContent__h2">Learn, Compete and Grow</h2>
          <button id="ninjaButton">Be a Ninja Coder</button>
        </div>

        <div className="Mascot">
          <img
            src="https://files.codingninjas.com/cdn-cgi/image/width=438/mascot-9644-9850.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MainBodyContent;
