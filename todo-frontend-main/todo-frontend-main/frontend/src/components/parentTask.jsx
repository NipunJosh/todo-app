import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const ParentComponent = ({ user }) => {
  const [tasks, setTasks] = useState([]);

  // Function to fetch tasks
  const fetchTasks = async () => {
    try {
      const token = await user.getIdToken();
      console.log("Firebase Token:", token);

      if (!token) {
        alert("No token found. Please login again.");
        return;
      }

      const res = await fetch("https://todo-backend-h1ha.onrender.com/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        const data = await res.json();
        setTasks(data);
      } else {
        const errorData = await res.json();
        console.error("Error fetching tasks:", errorData);
        alert("Failed to fetch tasks. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      alert("An unexpected error occurred.");
    }
  };

  // This function will be passed to TaskForm to refresh TaskList
  const addNewTask = (task) => {
    setTasks([...tasks, task]);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <TaskForm user={user} addNewTask={addNewTask} />
      <TaskList tasks={tasks} user={user} fetchTasks={fetchTasks} />
    </div>
  );
};

export default ParentComponent;
