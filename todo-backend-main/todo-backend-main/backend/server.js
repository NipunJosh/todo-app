import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();
const app = express();

// CORS configuration
const corsOptions = {
  origin: 'https://todo-frontend-virid-rho.vercel.app', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use(cors(corsOptions));  // Use CORS globally for all routes

app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Connect to MongoDB with error handling
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);  // Exit the process if the connection fails
  });

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});

// Graceful shutdown (optional)
process.on('SIGINT', () => {
  console.log('Received SIGINT. Closing server...');
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
});
