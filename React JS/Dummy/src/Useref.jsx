import { useRef } from "react";

function Useref() {
  const inputRef = useRef();
  const number = useRef(0);

  const focusInput = () => {
    inputRef.current.focus();
  };

  function increase() {
    number.current++;
  }

  return (
    <>
      <input ref={inputRef} />

      <button onClick={focusInput}>Focus</button>

      <p>{number.current}</p>
      <button onClick={increase}>click me</button>
    </>
  );
}

export default Useref;
