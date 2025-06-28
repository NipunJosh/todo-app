import Task from '../dataModels/Task.js';

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.uid });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
};

export const createTask = async (req, res) => {
  try {
    const newTask = new Task({ ...req.body, userId: req.user.uid });
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create task' });
  }
};

export const updateTask = async (req, res) => {
  try {
    const updated = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.uid },
      req.body,
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update task' });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deleted = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.uid });
    if (!deleted) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete task' });
  }
};
