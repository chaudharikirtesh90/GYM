import mongoose from 'mongoose';

const membershipSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: '' },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    durationUnit: { type: String, enum: ['days', 'months', 'years'], default: 'months' },
    features: [{ type: String }],
    badge: { type: String, default: '' },
    isPopular: { type: Boolean, default: false },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  },
  { timestamps: true }
);

const Membership = mongoose.model('Membership', membershipSchema);
export default Membership;
