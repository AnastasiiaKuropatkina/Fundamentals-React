import React, { useState, useEffect } from "react";

export const State = () => {
  // const [value, setValue] = useState(0); or
  // const [value, setValue] = useState(initialValue);

  // setValue((prevValue) => {
  //   return prevValue + 1;
  // }); or
  // setValue(9);

  /*
    const [value, setValue] = useState(() => {
    const userCount = localStorage.getItem("count");
    return +userCount || 0; // забираем значение из localStorage или 0
  });

  setValue((prevValue) => {
    return prevValue + 1;
  });
  */

  const [state, setState] = useState({
    // initial value
    count: 0,
    isCounting: false,
  });

  // setState - обновление значение, перерендер значения или функции

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

  useEffect(() => {
    console.log(state); // при изменении state сработает useEffect
  }, [state]);
  return (
    <div>
      <button onClick={handleCount}>click count</button>
      <button onClick={handleStatus}>click true/false</button>
    </div>
  );
};
