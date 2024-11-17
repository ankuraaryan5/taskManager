import React from "react";
import Tasks from "./Components/Tasks";
function App() {
  return (
    <div className="flex flex-col min-h-screen justify-start items-center bg-gradient-to-r from-cyan-500 to-blue-500 p-4 gap-2">
    <h1 className=" text-4xl font-bold text-gray-200">Welcome to Task Manager</h1>
    <h4 className="text-2xl italic text-gray-200">Your go to platform for day to day task management</h4>
      <Tasks />
      <footer className="text-gray-200">Made with ❤️ by <a href="https://github.com/ankuraaryan5" target="_blank" className="underline">Ankur</a></footer>
    </div>
  );
}
export default App;