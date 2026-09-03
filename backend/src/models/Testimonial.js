import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, default: 'Member' },
    message: { type: String, required: true },
    rating: { type: Number, default: 5 },
    image: { type: String, default: '' },
    isApproved: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Testimonial = mongoose.model('Testimonial', testimonialSchema);
export default Testimonial;
