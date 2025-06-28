import React, { useState } from "react";

export default function TaskForm({ user, addNewTask }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title) return alert("Title is required");

    try {
      const token = await user.getIdToken();
      console.log("Firebase Token:", token);

      if (!token) {
        alert("No token found. Please login again.");
        return;
      }

      const res = await fetch("https://todo-backend-h1ha.onrender.com/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const newTask = await res.json();
        addNewTask(newTask); // Call the function to add the new task
        setFormData({ title: "", description: "", dueDate: "" });
      } else {
        const errorData = await res.json();
        console.error("Error response:", errorData);
        alert("Failed to create task. Please try again.");
      }
    } catch (error) {
      console.error("Error creating task:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold mb-2">Add New Task</h2>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="border p-2 w-full mb-2"
        required
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-2 w-full mb-2"
      />
      <input
        name="dueDate"
        type="date"
        value={formData.dueDate}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
}
