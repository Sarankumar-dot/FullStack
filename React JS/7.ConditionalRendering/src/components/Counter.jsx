import React, { useState } from "react";
import { use } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  width: 80px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid black;
  color: white;
`;

const Counter = () => {
  // conditional rendering means rendering content in ui based on certain conditions
  // we can achieve it bu using ifElse , logical && , switch and ternary operator
  // conditional rendering in react allows you to control which components are rendered based on certain conditions

  const [state, setState] = useState(0);
  const [data, setData] = useState("Failure");

  function handleIncrease() {
    setState(state + 1);
  }

  function Reset() {
    setState(0);
  }

  let message;

  let remainingCount = 10 - state;

  if (state < 10) {
    message = (
      <div>
        <h3>you have clicked {state}</h3>
        <h3>please click {remainingCount} many times</h3>
      </div>
    );
  } else if (state >= 10) {
    message = (
      <div>
        <h3>you unlocked a 20 % discount</h3>
      </div>
    );
  }

  //   switch case rendering
  let display = () => {
    switch (data) {
      case "Loading":
        return <Loading />;
        break;
      case "Success":
        return <Success />;
        break;
      case "Failure":
        return <Failure />;
        break;
    }
  };

  return (
    <div>
      <h1>Click to unlock rewards {state}</h1>
      <Button onClick={handleIncrease}>click Me</Button>
      <Button onClick={Reset}>Reset</Button>

      {/* conditional rendering */}
      {/* example for ternary operator */}
      {state >= 10 ? <p>you got 10 percent discount</p> : <p>click 10 times</p>}

      {/* example for logical && */}
      {state >= 10 && <p>whats upp broooo</p>}

      {/* eg for ifElse */}

      {message}

      {/* eg for switch */}

      {display()}
    </div>
  );
};

export default Counter;

// eg for switch case
function Loading() {
  return <h1>loading ......</h1>;
}

function Success() {
  return <h1>Success ......</h1>;
}

function Failure() {
  return <h1>Failure ......</h1>;
}
