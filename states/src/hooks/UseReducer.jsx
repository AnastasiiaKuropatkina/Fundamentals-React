import React, { useReducer } from "react";
import "./styles.css";

// useReducer - state (обьект), dispatch (функция, action)
// если по мимо type нужно передать еще какие-то данные, то это ключ payload
// Reducer - имеет store, middleware и работает с несколькими редьюсерами (combineReducers)

const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
const step = 50;

const reducer = (state, { type, payload = step }) => {// 4 параметра: type, payload, meta, error
  switch (type) {
    case "INCREMENT_R":
      return {
        ...state,
        r: limitRGB(state.r + payload)
      };
    case "DECREMENT_R":
      return {
        ...state,
        r: limitRGB(state.r - payload)
      };
    case "INCREMENT_G":
      return {
        ...state,
        g: limitRGB(state.g + payload)
      };
    case "DECREMENT_G":
      return {
        ...state,
        g: limitRGB(state.g - payload)
      };
    case "INCREMENT_B":
      return {
        ...state,
        b: limitRGB(state.b + payload)
      };
    case "DECREMENT_B":
      return {
        ...state,
        b: limitRGB(state.b - payload)
      };
    default:
      return state;
  }
};

export default function App() {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 150, b: 200 });

  return (
    <div className="App">
      <h1
        style={{
          color: `rgb(${r}, ${g}, ${b})`
        }}
      >
        Hello CodeSandbox
      </h1>
      <div>
        <span>r </span>
        <button onClick={() => dispatch({ type: "INCREMENT_R", payload: 1 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT_R" })}>-</button>
      </div>
      <div>
        <span>g </span>
        <button onClick={() => dispatch({ type: "INCREMENT_G" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT_G" })}>-</button>
      </div>
      <div>
        <span>b </span>
        <button onClick={() => dispatch({ type: "INCREMENT_B" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT_B" })}>-</button>
      </div>
    </div>
  );
}
