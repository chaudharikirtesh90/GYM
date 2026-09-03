import GymClass from '../models/Class.js';

export const getClasses = async (req, res) => {
  try {
    const classes = await GymClass.find().sort({ createdAt: -1 });
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch classes.' });
  }
};

export const getClassById = async (req, res) => {
  try {
    const gymClass = await GymClass.findById(req.params.id);
    if (!gymClass) return res.status(404).json({ message: 'Class not found.' });
    res.status(200).json(gymClass);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch class.' });
  }
};

export const createClass = async (req, res) => {
  try {
    const gymClass = await GymClass.create(req.body);
    res.status(201).json({ message: 'Class created.', gymClass });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Class creation failed.' });
  }
};

export const updateClass = async (req, res) => {
  try {
    const gymClass = await GymClass.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!gymClass) return res.status(404).json({ message: 'Class not found.' });
    res.status(200).json({ message: 'Class updated.', gymClass });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Class update failed.' });
  }
};

export const deleteClass = async (req, res) => {
  try {
    const gymClass = await GymClass.findByIdAndDelete(req.params.id);
    if (!gymClass) return res.status(404).json({ message: 'Class not found.' });
    res.status(200).json({ message: 'Class deleted.' });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to delete class.' });
  }
};
