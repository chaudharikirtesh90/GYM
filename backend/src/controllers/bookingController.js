import Booking from '../models/Booking.js';

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch bookings.' });
  }
};

export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({ ...req.body, user: req.user._id });
    res.status(201).json({ message: 'Booking created.', booking });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Booking creation failed.' });
  }
};

export const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking) return res.status(404).json({ message: 'Booking not found.' });
    res.status(200).json({ message: 'Booking updated.', booking });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Booking update failed.' });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found.' });
    res.status(200).json({ message: 'Booking deleted.' });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to delete booking.' });
  }
};
