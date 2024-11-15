import React, { useState, useEffect } from "react";

function Tasks() {
  const [task, setTask] = useState({
    description: "",
    status: "",
    priority: "",
  });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const createNewTask = () => {
    if (task.description === "" || task.status === "" || task.priority === "") {
      alert("Please fill all the fields");
      return;
    }
    const newTask = {
      description: task.description,
      status: task.status,
      priority: task.priority,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTask({ description: "", status: "", priority: "" });
    alert("Task added successfully");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Add New Task</h2>
      <form className="flex flex-col md:flex-row items-center">
        <input
          type="text"
          className="w-80 h-10 bg-gray-200 rounded-md"
          placeholder="Enter task description"
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          value={task.description}
          name="description"
        />
        <select
          className="w-80 h-10 bg-gray-200 rounded-md"
          onChange={(e) => setTask({ ...task, status: e.target.value })}
          value={task.status}
          name="status"
        >
          <option value="">Select task status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="in progress">In progress</option>
        </select>
        <select
          className="w-80 h-10 bg-gray-200 rounded-md"
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
          value={task.priority}
          name="priority"
        >
          <option value="">Select task priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          className="w-80 h-10 bg-gray-200 rounded-md"
          type="button"
          onClick={createNewTask}
        >
          Add Task
        </button>
      </form>

      <h2 className="text-2xl font-bold">Tasks List</h2>
      <form className="flex flex-col mt-5 items-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {tasks.map((t, index) => (
            <li key={index}>
              <div className="flex flex-col w-80 h-40 gap-2 items-center justify-center text-xl p-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <p className="font-semibold mb-1">{t.description}</p>
                <p className="font-semibold text-sm mb-1">{t.status}</p>
                <p className="font-semibold text-sm">{t.priority}</p>
              </div>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Tasks;
