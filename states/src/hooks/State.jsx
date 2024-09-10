import React, { useState, useEffect } from "react";

export const State = () => {
  const [state, setState] = useState({
    //initial value
    count: 0,
    isCounting: false,
  });

  //setState - обновление значение, перерендер значения или функции

  const handleCount = () => {
    setState({
      ...state, //избегает перезаписивание всех states
      count: state.count + 1,
    }); // меняет count, удаляя isCounting
  };
  const handleStatus = () => {
    setState({
      ...state,
      isCounting: !state.isCounting,
    });
  };
  {
    /*
    const [value, setValue] = useState(() => {
    const userCount = localStorage.getItem("count");
    return +userCount || 0;
  });

  setValue((prevValue) => {
    return prevValue + 1;
  });
*/
  }
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div>
      <button onClick={handleCount}>click</button>
      <button onClick={handleStatus}>me too</button>
    </div>
  );
};
