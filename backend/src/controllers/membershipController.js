import Membership from '../models/Membership.js';

export const getMemberships = async (req, res) => {
  try {
    const memberships = await Membership.find().sort({ price: 1 });
    res.status(200).json(memberships);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch memberships.' });
  }
};

export const getMembershipById = async (req, res) => {
  try {
    const membership = await Membership.findById(req.params.id);
    if (!membership) return res.status(404).json({ message: 'Membership not found.' });
    res.status(200).json(membership);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch membership.' });
  }
};

export const createMembership = async (req, res) => {
  try {
    const membership = await Membership.create(req.body);
    res.status(201).json({ message: 'Membership created.', membership });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Membership creation failed.' });
  }
};

export const updateMembership = async (req, res) => {
  try {
    const membership = await Membership.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!membership) return res.status(404).json({ message: 'Membership not found.' });
    res.status(200).json({ message: 'Membership updated.', membership });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Membership update failed.' });
  }
};

export const deleteMembership = async (req, res) => {
  try {
    const membership = await Membership.findByIdAndDelete(req.params.id);
    if (!membership) return res.status(404).json({ message: 'Membership not found.' });
    res.status(200).json({ message: 'Membership deleted.' });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to delete membership.' });
  }
};
