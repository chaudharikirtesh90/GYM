import User from '../models/User.js';
import Member from '../models/Member.js';
import Trainer from '../models/Trainer.js';
import Booking from '../models/Booking.js';

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch profile.' });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found.' });

    Object.keys(req.body).forEach((key) => {
      if (key !== 'password' && key !== 'email') user[key] = req.body[key];
    });

    await user.save();
    res.status(200).json({ message: 'Profile updated successfully.', user });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Profile update failed.' });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch users.' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found.' });
    res.status(200).json({ message: 'User deleted.' });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to delete user.' });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    const [memberCount, trainerCount, bookingCount] = await Promise.all([
      Member.countDocuments(),
      Trainer.countDocuments(),
      Booking.countDocuments(),
    ]);

    res.status(200).json({ memberCount, trainerCount, bookingCount });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch dashboard stats.' });
  }
};
