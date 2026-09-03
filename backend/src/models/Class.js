import mongoose from 'mongoose';

const classSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: '' },
    trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer', required: true },
    capacity: { type: Number, required: true },
    enrolled: { type: Number, default: 0 },
    schedule: {
      day: { type: String, required: true },
      time: { type: String, required: true },
    },
    duration: { type: Number, default: 60 },
    category: { type: String, default: 'General' },
    image: { type: String, default: '' },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const GymClass = mongoose.model('Class', classSchema);
export default GymClass;
