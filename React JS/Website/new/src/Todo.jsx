import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTasks() {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  }

  function deleteAll() {
    setTasks([]);
  }

  function deleteTask(index){
    setTasks(tasks.filter((value,i) => i !== index))
  }
  return (
    <>
      <input
        className="form-control"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="text"
        required
        style={{width : "400px"}}
      ></input>
      <button className="btn btn-secondary" type="button" onClick={addTasks}>
        add tasks
      </button>
      <button className="btn btn-danger" type="button" onClick={deleteAll}>
        delete all tasks
      </button>

      {tasks.length === 0 && <p>no tasks to display</p>}
      {tasks.length > 0 &&
        tasks.map((value, index) => (
          <div key={index}>
            <p >
              {index + 1}.{value}
            </p>
            <button onClick={() => deleteTask(index)}>deleteTask</button>
          </div>
        ))}
    </>
  );
};

export default Todo;
