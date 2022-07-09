import "./App.css";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  function increment() {
    console.log("Incrementedd");
    setValue(value + 1);
    console.log(value);
  }

  function decrement() {
    console.log("Decremented");
    if (value - 1 >= 0) {
      setValue(value - 1);
      console.log(value);
    } else {
      alert("Negatives ahead");
    }
  }
  function reset() {
    console.log("Reset");
    setValue(0);
    console.log(value);
  }
  return (
    <div className="App">
      <div className="mainContainer">
        <h1 className="mainContainer__IntroHeading">Counter App</h1>
        <div className="mainContainer__display">
          <h1>{value}</h1>
        </div>
        <div className="mainContainer__buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>

      <div className="madeWithSection">
        <p>Made with ❤️ by @manvi0308</p>
        <div className="madeWithSection__Icons">
        
        </div>
      </div>
    </div>
  );
}

export default App;
