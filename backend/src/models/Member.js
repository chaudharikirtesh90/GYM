import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    membership: { type: mongoose.Schema.Types.ObjectId, ref: 'Membership', default: null },
    assignedTrainer: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer', default: null },
    bmi: { type: Number, default: 0 },
    weight: { type: Number, default: 0 },
    height: { type: Number, default: 0 },
    fitnessGoal: { type: String, default: '' },
    currentPlan: { type: String, default: '' },
    attendanceCount: { type: Number, default: 0 },
    totalSessions: { type: Number, default: 0 },
    progress: [{
      date: { type: Date, default: Date.now },
      weight: Number,
      bmi: Number,
      note: String,
    }],
    joinedAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['active', 'inactive', 'paused'], default: 'active' },
  },
  { timestamps: true }
);

const Member = mongoose.model('Member', memberSchema);
export default Member;
