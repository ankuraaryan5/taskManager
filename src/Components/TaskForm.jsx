import React, { useState } from "react";

function TaskForm({ onTaskAdd }) {
  const [task, setTask] = useState({
    description: "",
    status: "",
    priority: "",
  });

  const handleSubmit = () => {
    if (task.description === "" || task.status === "" || task.priority === "") {
      alert("Please fill all the fields");
      return;
    }
    onTaskAdd(task);
    setTask({ description: "", status: "", priority: "" });
    alert("Task added successfully");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-2xl font-bold">Add New Task</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 items-center">
        <input
          type="text"
          className="w-72 h-10 bg-gray-200 rounded-md"
          placeholder="Enter task description"
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          value={task.description}
          name="description"
        />
        <select
          className="w-72 h-10 bg-gray-200 rounded-md"
          onChange={(e) => setTask({ ...task, status: e.target.value })}
          value={task.status}
          name="status"
        >
          <option value="">Select task status</option>
          <option value="pending">Pending</option>
          <option value="in progress">In progress</option>
        </select>
        <select
          className="w-72 h-10 bg-gray-200 rounded-md"
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
          className="w-72 h-10 bg-blue-300 rounded-md"
          type="button"
          onClick={handleSubmit}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
