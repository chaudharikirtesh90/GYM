import Attendance from '../models/Attendance.js';

export const getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find().sort({ date: -1 });
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch attendance.' });
  }
};

export const createAttendance = async (req, res) => {
  try {
    const record = await Attendance.create(req.body);
    res.status(201).json({ message: 'Attendance recorded.', record });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Attendance creation failed.' });
  }
};

export const updateAttendance = async (req, res) => {
  try {
    const record = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!record) return res.status(404).json({ message: 'Attendance record not found.' });
    res.status(200).json({ message: 'Attendance updated.', record });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Attendance update failed.' });
  }
};

export const deleteAttendance = async (req, res) => {
  try {
    const record = await Attendance.findByIdAndDelete(req.params.id);
    if (!record) return res.status(404).json({ message: 'Attendance record not found.' });
    res.status(200).json({ message: 'Attendance deleted.' });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to delete attendance.' });
  }
};
