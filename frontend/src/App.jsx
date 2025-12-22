import { useState } from "react";
import { Task } from "./components/task.jsx";
import "./App.css";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    const newTasks = [...allTasks, { task: task, id: crypto.randomUUID() }];
    setAllTasks(newTasks);
    setTask("");
  }

  function saveTask(event) {
    setTask(event.target.value);
  }

  function deleteTask(id) {
    setAllTasks(allTasks.filter((task) => task.id !== id));
  }

  return (
    <div className="container">
      <h1>Todo</h1>
      <input
        value={task}
        onChange={saveTask}
        type="text"
        placeholder="Add a new task..."
        onKeyDown={(event) => {
          if (event.key === "Enter") addTask();
          else if (event.key === "Escape") setTask("");
        }}
      />
      <div className="controls">
        <button onClick={addTask}>Add</button>
        <button onClick={() => setAllTasks([])}>Clear All</button>
      </div>
      <hr />
      {console.log(allTasks)}
      <Task tasks={allTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
