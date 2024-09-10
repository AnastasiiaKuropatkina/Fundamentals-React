import React, { useState, useEffect, useRef } from "react";

function setDefaultValue() {
  //componentDidMount()
  const userCount = localStorage.getItem("count");
  return userCount ? +userCount : 0;
}
/*componentDidMount() {
    const userCount = localStorage.getItem("count");
    if (userCount) this.setState({ count: +userCount });
  }*/

export default function Timer() {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCount] = useState(false);
  const timerIdRef = useRef(null);

  const handleReset = () => {
    setCount(0);
    setIsCount(false);
  };

  const handleStart = () => {//считаем Start
    setIsCount(true);
  };

  const handleStop = () => {// не считаем Stop
    setIsCount(false);
  };

  useEffect(() => { //useEffect записивает значение в localStorage
    //componentDidUpdate()
    console.log("update");
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => { //если isCounting true ми запускаем таймер
    if (isCounting) {
      timerIdRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => { // если изменилось значение (false) - очищаем интервал
      console.log("unmount");
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;

    };
  }, [isCounting]);

  /*componentDidMount() {
    const userCount = localStorage.getItem("count");
    if (userCount) this.setState({ count: +userCount });
  }
  componentDidUpdate() {
    localStorage.setItem("count", this.state.count);
  }

  componentWillUnmount() {
    clearInterval(this.counterId);
    this.handleStop();
  }*/

  return (
    <div className="timer">
      <h1>React Timer</h1>
      <h3>{count}</h3>
      {!isCounting ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
