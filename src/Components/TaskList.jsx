import React from "react";

function TaskList({ tasks, onUpdateTask }) {
  const getStatusStyle = (status) => {
    switch (status) {
      case "pending":
        return "from-yellow-500 to-orange-500"; 
      case "in progress":
        return "from-blue-500 to-indigo-500"; 
      case "completed":
        return "from-green-500 to-emerald-500";
      default:
        return "from-gray-500 to-gray-700"; 
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold">Tasks List</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {tasks.map((task, index) => (
          <li key={index}>
            <div
              className={`flex flex-col w-72 h-48 gap-2 items-center justify-center text-xl p-4 bg-gradient-to-r text-white rounded shadow-md ${getStatusStyle(
                task.status
              )}`}
            >
              <p className="font-semibold">{task.description}</p>
              <p className="text-sm capitalize">{task.status}</p>
              <p className="text-sm capitalize">{task.priority}</p>
              {task.status !== "completed" && (
                <button
                  className="mt-2 px-4 py-2 bg-gray-200 rounded-md text-sm text-black"
                  onClick={() => onUpdateTask(index, "completed")}
                >
                  Mark as Completed
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
