
# ToDo App

This project is a part of a hackathon run by [Katomaran](https://www.katomaran.com).

## Project Overview

This **ToDo App** allows users to sign in with **Google Authentication** (via Firebase) and manage tasks. The frontend is built using **React** with **Vite** and the backend is a **Node.js + Express** API deployed on **Render**. It uses **MongoDB** for data storage.

---

## Table of Contents

1. [Backend Setup](#backend-setup)
2. [Frontend Setup](#frontend-setup)
3. [Environment Variables](#environment-variables)
4. [Deployment](#deployment)
5. [Architecture Diagram](#architecture-diagram)
6. [Demo Video](#demo-video)
7. [Assumptions](#assumptions)

---

## Backend Setup

To set up the **backend**:

1. **Clone the backend repo**:
   ```bash
   git clone https://github.com/your-username/todo-backend.git
   cd todo-backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up MongoDB Atlas**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free cluster.
   - Create a new **Database User** with read and write permissions.
   - Whitelist your IP (or allow access from anywhere).
   - Copy your **MongoDB URI** from the connection tab.

4. **Create a `.env` file** in the root of the backend project with the following content:
   ```env
   MONGO_URI=your_mongo_connection_string
   FIREBASE_PROJECT_ID=your_firebase_project_id
   PORT=5000
   ```

5. **Start the backend server**:
   ```bash
   node server.js
   ```

---

## Frontend Setup

To set up the **frontend**:

1. **Clone the frontend repo**:
   ```bash
   git clone https://github.com/your-username/todo-frontend.git
   cd todo-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
   - Add **Firebase Authentication** and enable **Google Sign-In**.
   - Copy the Firebase configuration from your project settings.

4. **Create a `.env` file** in the root of the frontend project with the following content:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

5. **Start the frontend**:
   ```bash
   npm run dev
   ```

6. **Visit the frontend in your browser**:  
   Go to `http://localhost:3000` to run the app locally.

---

## Environment Variables

### Backend:
- `MONGO_URI`: MongoDB connection string from MongoDB Atlas.
- `FIREBASE_PROJECT_ID`: Your Firebase project ID.

### Frontend:
- `VITE_FIREBASE_API_KEY`: Firebase API key for your project.
- `VITE_FIREBASE_AUTH_DOMAIN`: Firebase auth domain.
- `VITE_FIREBASE_PROJECT_ID`: Firebase project ID.
- `VITE_FIREBASE_APP_ID`: Firebase app ID.

---

## Deployment

### Backend Deployment (Render):

1. **Create an account** on [Render](https://render.com).
2. **Create a new web service** and connect your GitHub repo for the backend.
3. Set up the build and start commands:
   - Build command: `npm install`
   - Start command: `node server.js`
4. **Set up environment variables** on Render:
   - Add `MONGO_URI` and `FIREBASE_PROJECT_ID`.
5. **Deploy** the service.

### Frontend Deployment (Vercel):

1. **Create an account** on [Vercel](https://vercel.com).
2. **Create a new project** and connect your GitHub repo for the frontend.
3. Set up the build and output settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. **Deploy** the frontend.

---

## Architecture Diagram

![Architecture Diagram](./architecture-diagram.png)

This is the high-level architecture for the app. It shows how the **frontend** communicates with the **backend** and the **database**.

---

## Demo Video

Please refer to the following link to watch the demo of the app in action:

[Link to Loom Demo Video](https://www.loom.com/share/91ad4ab974854ed3a4c06d035fa78b31)

---

## Assumptions

- The app uses Firebase Authentication for login, and tasks are stored in MongoDB.
- Only **Google Authentication** is enabled in Firebase for simplicity.
- The task data is fetched, created, updated, and deleted via the backend API, which is protected by Firebase ID token validation.

---

### **This project is a part of a hackathon run by [Katomaran](https://www.katomaran.com)**
