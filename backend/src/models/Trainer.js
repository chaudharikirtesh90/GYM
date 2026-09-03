import mongoose from 'mongoose';

const trainerSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    expertise: [{ type: String }],
    certifications: [{ type: String }],
    experience: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    availability: [{ day: String, slots: [String] }],
    assignedMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  },
  { timestamps: true }
);

const Trainer = mongoose.model('Trainer', trainerSchema);
export default Trainer;
