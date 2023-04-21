import React from "react";

const Counter = (props) => {
  return (
    <div>
      <h2>{props.readValue()}</h2>
      <button onClick={props.increment}>UP</button>
      <button onClick={props.decrement}>DOWN</button>
    </div>
  );
};

export default Counter;
