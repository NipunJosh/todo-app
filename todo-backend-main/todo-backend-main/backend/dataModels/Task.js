import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },  // Default empty string for description
  dueDate: { type: Date, default: Date.now },  // Default to current date if not provided
  status: { type: String, enum: ['Open', 'Complete'], default: 'Open' },
  userId: { type: String, required: true }
});

export default mongoose.model('Task', taskSchema);
