import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";  // Import Firebase auth and provider

export default function Login() {
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();  // Get Firebase ID token
      localStorage.setItem('firebase_token', token);  // Store token in localStorage for future API requests

      // After successful login, redirect the user to the Dashboard or another page
      //window.location.href = '/';  // Change to your dashboard route
    } catch (error) {
      console.error("Login failed:", error);
      alert(error.message);  // Show any login error
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <button
        onClick={login}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg"
      >
        Sign in with Google
      </button>
    </div>
  );
}
