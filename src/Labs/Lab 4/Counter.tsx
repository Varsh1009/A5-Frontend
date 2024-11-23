import React, { useState } from "react";
export default function Counter() {
  //   let count = 7;
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          //   count++;
          setCount(count + 1);
          console.log(count);
        }}
        id="wd-counter-up-click"
        className="btn btn-success mx-1"
      >
        Up
      </button>
      <button
        onClick={() => {
          //   count--;
          setCount(count - 1);
          console.log(count);
        }}
        id="wd-counter-down-click"
        className="btn btn-danger mx-1"
      >
        Down
      </button>
      <hr />
    </div>
  );
}
