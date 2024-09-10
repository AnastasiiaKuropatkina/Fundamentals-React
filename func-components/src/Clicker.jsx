import React, { useState, useEffect } from "react";

function Clicker() {
  const [count, setCount] = useState(0);

  {
    /*2 difference hooks unnamed;*/
  }

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("hello from cliker", count);
    // componentWillUnmount()
    return () => console.log("goodbye clicker");
  }, [count]);

  return (
    <div className="clicker">
      <button onClick={increment}> +</button>
      {/* () => setCount(count + 1) */}
      <span style={{ display: "inline-block", margin: "0 .5rem" }}>
        {count}
      </span>
      <button onClick={decrement}>- </button>
    </div>
  );
}
export default Clicker;
