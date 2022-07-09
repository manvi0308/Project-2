import React, { useState } from "react";
import "./Layout.css";
function Layout() {
  const [input, setinput] = useState();
  const [operator, setoperator] = useState();
  function add() {}
  function handleClick(event) {
    event.preventDefault();
    const value = event.target.innerText;
    switch (value) {
      case "+":
        console.log("Addition");
        setoperator(value);
        console.log(operator);
        //   add();
        break;
      case "-":
        console.log("Subtraction");
        setoperator(value);
        console.log(operator);
        break;
      case "*":
        console.log("Multiply");
        setoperator(value);
        console.log(operator);
        break;
      case "÷":
        console.log("Division");
        setoperator(value);
        console.log(operator);
        break;
      case "=":
        console.log("Show result");
        setoperator(value);
        console.log(operator);
        break;
      case ".":
        console.log("dot");
        break;
      default:
        console.log("Default case");
        setinput(...value);
        console.log(input);
        break;
    }
  }
  return (
    <div>
      <div className="layout">
        <div className="layout__Input">
          <input type="text" />
        </div>
        <div className="layout__Buttons">
          <div className="level1">
            <button onClick={handleClick}>7</button>
            <button onClick={handleClick}>8</button>
            <button onClick={handleClick}>9</button>
            <button onClick={handleClick}>÷ </button>
          </div>
          <div className="level2">
            <button onClick={handleClick}>4</button>
            <button onClick={handleClick}>5</button>
            <button onClick={handleClick}>6</button>
            <button onClick={handleClick}>*</button>
          </div>
          <div className="level3">
            <button onClick={handleClick}>1</button>
            <button onClick={handleClick}>2</button>
            <button onClick={handleClick}>3</button>
            <button onClick={handleClick}>-</button>
          </div>
          <div className="level4">
            <button onClick={handleClick}>0</button>
            <button onClick={handleClick}>.</button>
            <button onClick={handleClick}>=</button>
            <button onClick={handleClick}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
