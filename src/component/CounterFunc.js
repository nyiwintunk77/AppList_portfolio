import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "PLUS":
      return { ...state, number: state.number + 1 };
    case "MINUS":
      return { ...state, number: state.number - 1 };
    case "INPUT":
      return {
        ...state,
        name: action.value,
      };

    default:
      return state;
  }
}

const CounterFunc = () => {
  const [state, dispatch] = useReducer(reducer, { number: 0, name: "" });

  const onChange = (e) => {
    dispatch({ type: "INPUT" }, e.target);
  };

  return (
    <div>
      <p>{state.number}</p>
      <button onClick={() => dispatch({ type: "PLUS" })}>+1</button>
      <button onClick={() => dispatch({ type: "MINUS" })}>-1</button>
      <input value={state.value} onChange={onChange}></input>
    </div>
  );
};
export default CounterFunc;
