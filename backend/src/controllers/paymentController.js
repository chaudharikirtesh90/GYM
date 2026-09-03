import Stripe from 'stripe';
import Payment from '../models/Payment.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2024-06-20',
});

export const createCheckoutSession = async (req, res) => {
  try {
    const { amount, membershipId } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: 'Gym Membership' },
          unit_amount: Math.round(amount * 100),
        },
        quantity: 1,
      }],
      metadata: { userId: req.user._id.toString(), membershipId: membershipId || '' },
      success_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL || 'http://localhost:5173'}/pricing`,
    });

    res.status(200).json({ sessionId: session.id, url: session.url });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Payment session creation failed.' });
  }
};

export const createPayment = async (req, res) => {
  try {
    const payment = await Payment.create({ ...req.body, user: req.user._id, status: 'paid', paidAt: new Date() });
    res.status(201).json({ message: 'Payment recorded.', payment });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Payment recording failed.' });
  }
};

export const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch payments.' });
  }
};

export const refundPayment = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) return res.status(404).json({ message: 'Payment not found.' });

    payment.status = 'refunded';
    await payment.save();
    res.status(200).json({ message: 'Payment refunded.', payment });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Refund failed.' });
  }
};
