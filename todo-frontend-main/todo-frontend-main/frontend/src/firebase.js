import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBsLmC75IiLB9jMrolgSOuVwBgegWPvpD8",
  authDomain: "todo-app-3a301.firebaseapp.com",
  projectId: "todo-app-3a301",
  storageBucket: "todo-app-3a301.firebasestorage.app",
  messagingSenderId: "587695554166",
  appId: "1:587695554166:web:f2fe040ae02084d5eda957",
  measurementId: "G-NH57SV0XBM"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();