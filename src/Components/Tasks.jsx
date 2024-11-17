import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import SearchBar from "./SearchBar";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      return sortTasksByPriority(updatedTasks);
    });
  };

  const updateTaskStatus = (index, newStatus) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].status = newStatus;
      return updatedTasks;
    });
  };

  const sortTasksByPriority = (tasks) => {
    const priorityOrder = { low: 1, medium: 2, high: 3 };
    return tasks.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
  };

  const filteredTasks = tasks.filter((task) =>
    task.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TaskForm onTaskAdd={addTask} />
      <TaskList tasks={filteredTasks} onUpdateTask={updateTaskStatus} />
    </div>
  );
}

export default Tasks;
