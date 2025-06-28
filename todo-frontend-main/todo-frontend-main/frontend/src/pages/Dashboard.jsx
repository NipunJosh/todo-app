import React from "react";
import { auth } from "../firebase";
import ParentComponent from "../components/parentTask";

export default function Dashboard({ user }) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Welcome, {user.displayName}</h1>
        <button
          onClick={() => auth.signOut()}
          className="text-red-600 underline"
        >
          Logout
        </button>
      </div>
      <ParentComponent user={user} />
    </div>
  );
}
