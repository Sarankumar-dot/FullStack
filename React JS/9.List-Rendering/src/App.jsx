import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaTrashCanArrowUp } from "react-icons/fa6";

function App() {
  const [count, setCount] = useState(0);

  const [list, setList] = useState([
    { id: 1, course: "HTML", checked: true },
    { id: 2, course: "CSS", checked: true },
    { id: 3, course: "JavaScript", checked: false },
  ]);


  
  return (
    <>
      <div>
        <ul>
          {list.map((item) => {
            return (
              <li
                key={item.id}
                style={{ listStyleType: "none", textAlign: "left" }}
              >
                {item.course}
                <input id="in" type="checkbox" checked={item.checked} sty />
                <FaTrashCanArrowUp role="button" tabIndex={0} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
