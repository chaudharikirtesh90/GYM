import ContactMessage from '../models/ContactMessage.js';

export const createContactMessage = async (req, res) => {
  try {
    const message = await ContactMessage.create(req.body);
    res.status(201).json({ message: 'Message sent successfully.', message });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Message submission failed.' });
  }
};

export const getContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch contact messages.' });
  }
};
