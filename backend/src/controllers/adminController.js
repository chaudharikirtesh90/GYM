import User from '../models/User.js';
import Membership from '../models/Membership.js';
import Payment from '../models/Payment.js';
import Coupon from '../models/Coupon.js';

export const getAdminOverview = async (req, res) => {
  try {
    const [users, memberships, payments] = await Promise.all([
      User.countDocuments(),
      Membership.countDocuments(),
      Payment.countDocuments(),
    ]);

    res.status(200).json({ users, memberships, payments });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch admin overview.' });
  }
};

export const getUsersAdmin = async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch users.' });
  }
};

export const getMembershipsAdmin = async (req, res) => {
  try {
    const memberships = await Membership.find().sort({ price: 1 });
    res.status(200).json(memberships);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch memberships.' });
  }
};

export const createCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.create(req.body);
    res.status(201).json({ message: 'Coupon created.', coupon });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Coupon creation failed.' });
  }
};

export const getAnalytics = async (req, res) => {
  try {
    const payments = await Payment.find().sort({ createdAt: 1 });
    const chartData = {
      revenue: payments.map((p) => ({ date: p.createdAt, amount: p.amount })),
      newMembers: [],
      attendance: [],
    };

    res.status(200).json(chartData);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch analytics.' });
  }
};
