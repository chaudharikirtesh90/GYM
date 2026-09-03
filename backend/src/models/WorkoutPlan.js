import mongoose from 'mongoose';

const workoutPlanSchema = new mongoose.Schema(
  {
    member: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true },
    trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer', required: true },
    title: { type: String, required: true },
    goal: { type: String, default: '' },
    exercises: [{
      name: String,
      sets: Number,
      reps: String,
      rest: String,
      note: String,
    }],
    durationWeeks: { type: Number, default: 4 },
    startDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['active', 'completed', 'draft'], default: 'draft' },
  },
  { timestamps: true }
);

const WorkoutPlan = mongoose.model('WorkoutPlan', workoutPlanSchema);
export default WorkoutPlan;
