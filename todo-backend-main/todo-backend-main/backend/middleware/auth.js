import { getAuth } from 'firebase-admin/auth';
import admin from 'firebase-admin';
import cors from 'cors';

// Initialize Firebase Admin SDK with credentials from .env
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Handle multi-line private key properly
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
});

// Enable CORS for the backend
const corsOptions = {
  origin: 'https://todo-frontend-virid-rho.vercel.app', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

export default async function (req, res, next) {
  // Use the CORS middleware to allow cross-origin requests
  cors(corsOptions)(req, res, () => {});

  const token = req.headers.authorization?.split('Bearer ')[1];
  if (!token) return res.status(401).send("Unauthorized");

  try {
    // Verify the token using Firebase Admin SDK
    const decoded = await getAuth().verifyIdToken(token);
    req.user = decoded;  // Attach decoded user info to the request
    next();  // Proceed to the next middleware or route handler
  } catch (err) {
    console.error("Error verifying token:", err);
    res.status(401).send("Invalid token");
  }
}
