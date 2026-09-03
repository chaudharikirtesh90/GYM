import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    membership: { type: mongoose.Schema.Types.ObjectId, ref: 'Membership', default: null },
    amount: { type: Number, required: true },
    currency: { type: String, default: 'usd' },
    status: { type: String, enum: ['pending', 'paid', 'failed', 'refunded'], default: 'pending' },
    paymentMethod: { type: String, default: 'stripe' },
    invoiceId: { type: String, default: '' },
    stripePaymentIntentId: { type: String, default: '' },
    couponCode: { type: String, default: '' },
    paidAt: { type: Date, default: null },
  },
  { timestamps: true }
);

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;
