import React, { useEffect, useReducer } from "react";

const countReducer = (state, {type}) => {
    if (type === 'START') {
        return {
            ...state,
            isCounting: true,
        }
    }

    if (type === 'STOP') {
        return {
            ...state,
            isCounting: false,
        }
    }

    if (type === 'RESET') {
        return {
             count: 0,
             isCounting: false,
        }
    }

    if (type === 'TICK') {
         return {
            ...state,
            count: state.count + 1,
         }
    }
    return state;
}

function setDefaultValue() {
    const userCount = localStorage.getItem("count");
    return userCount ? +userCount : 0;
}

export default function Timer() {
  const [{count, isCounting}, dispatch] = useReducer(countReducer, {count:  setDefaultValue(), isCounting: false});

  useEffect(() => { //useEffect записивает значение в localStorage
    console.log("update");
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => { //если isCounting true ми запускаем таймер
    let timerId = null;
    if (isCounting) {
      timerId = setInterval(() => {
        dispatch({type: 'TICK'});
      }, 1000);
    }

    return () => { // если изменилось значение (false) - очищаем интервал
      timerId && clearInterval(timerId);
      timerId = null;

    };
  }, [isCounting]);

  return (
    <div className="timer">
      <h1>React Timer</h1>
      <h3>{count}</h3>
      {!isCounting ? (
        <button onClick={() => dispatch({type: "START"})}>Start</button>
      ) : (
        <button onClick={() => dispatch({type: "STOP"})}>Stop</button>
      )}
      <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
    </div>
  );
}
