import mongoose from 'mongoose';

const dietPlanSchema = new mongoose.Schema(
  {
    member: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true },
    trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer', required: true },
    title: { type: String, required: true },
    goal: { type: String, default: '' },
    meals: [{
      meal: String,
      items: [String],
    }],
    calories: { type: Number, default: 0 },
    notes: { type: String, default: '' },
    startDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['active', 'completed', 'draft'], default: 'draft' },
  },
  { timestamps: true }
);

const DietPlan = mongoose.model('DietPlan', dietPlanSchema);
export default DietPlan;
