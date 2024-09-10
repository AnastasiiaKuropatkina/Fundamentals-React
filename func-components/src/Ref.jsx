import React, { useEffect, useRef } from "react";

const WithRef = () => {
  // const inputEl = useRef(null);
  // console.log(inputEl);
  // const numRef = userRef(0);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    //numRef.current = 1;
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    //console.log(inputEl);
    console.log(numRef.current);
  });

  return (
    <div>
      {/*<input placeholder="name" ref={inputEl} />*/}
      {/*<button onClick={() => numRef.current}>{numRef.current}</button>*/}
      <button onClick={handleClick}>{count}</button>
    </div>
  );
};
