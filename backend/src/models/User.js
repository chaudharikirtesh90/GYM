import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    phone: { type: String, default: '' },
    role: {
      type: String,
      enum: ['admin', 'trainer', 'member'],
      default: 'member',
    },
    profileImage: { type: String, default: '' },
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String, default: '' },
    resetPasswordToken: { type: String, default: '' },
    resetPasswordExpires: { type: Date, default: null },
    refreshToken: { type: String, default: '' },
    lastLogin: { type: Date, default: null },
    status: { type: String, enum: ['active', 'inactive', 'suspended'], default: 'active' },
    bio: { type: String, default: '' },
    gender: { type: String, enum: ['male', 'female', 'other', ''], default: '' },
    dob: { type: Date, default: null },
    address: { type: String, default: '' },
    city: { type: String, default: '' },
    country: { type: String, default: '' },
    emergencyContact: { type: String, default: '' },
    memberProfile: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
    trainerProfile: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer' },
    adminProfile: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
  },
  { timestamps: true }
);

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
