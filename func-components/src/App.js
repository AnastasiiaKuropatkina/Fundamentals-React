import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  {
    /*2 difference hooks unnamed;*/
  }

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <button onClick={increment}> +</button>
      {/* () => setCount(count + 1) */}
      <span style={{ display: "inline-block", margin: "0 .5rem" }}>
        {count}
      </span>
      <button onClick={decrement}>- </button>
    </div>
  );
}

export default App;
