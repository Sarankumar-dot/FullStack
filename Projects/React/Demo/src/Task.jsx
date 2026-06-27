import React, { useState } from "react";

const Task = () => {
  const [state, setState] = useState(0);

  function changeCount() {
    setState(state + 1);
    console.log(state);
  }

  return (
    <div>
      <h1>{state}</h1>
      <h2>THIS IS TASK COMPONENT</h2>
      <button className="btn btn-primary" onClick={changeCount}>
        click
      </button>
    </div>
  );
};

export default Task;
