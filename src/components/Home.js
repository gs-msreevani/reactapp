import React, { useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskColumn from "./TaskColumn";
import todoIcon from "../assets/direct-hit.png";
import doingIcon from "../assets/glowing-star.png";
import doneIcon from "../assets/check-mark-button.png";

const Home = () => {
  useEffect(() => {
    document.title = "Homepage"; // Set the page title
  }, []);
  return (
    <div>
      <h1>I am home page</h1>
      <TaskForm />
      <header className="app_header">Header Section</header>
      <main className="app_main">
        <TaskColumn title="To do" icon={todoIcon} />
        <TaskColumn title="Doing" icon={doingIcon} />
        <TaskColumn title="Done" icon={doneIcon} />
      </main>
    </div>
  );
};

export default Home;
