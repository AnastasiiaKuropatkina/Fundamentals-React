import React, { useState } from "react";
import Clicker from "./Clicker";
import Timer from "./Timer";
import "./App.css";

function App() {
  const [isClicker, setClicker] = useState(false);
  const [isTimer, setTimer] = useState(false);

  return (
    <div className="App">
      <h2>React App</h2>
      <button onClick={() => setClicker(!isClicker)}>Toggle clicker</button>
      {isClicker && <Clicker />}
      <h2>Timer</h2>
      <button onClick={() => setTimer(!isTimer)}>Toggle timer</button>
      {isTimer && <Timer />}
    </div>
  );
}

export default App;
