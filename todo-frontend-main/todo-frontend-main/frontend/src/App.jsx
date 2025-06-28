import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false); // Set loading to false when auth state changes
    });

    return () => unsubscribe();
  }, []);

  // Show a loading spinner or nothing until authentication is finished
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a more customized loading screen
  }

  return user ? <Dashboard user={user} /> : <Login />;
}
