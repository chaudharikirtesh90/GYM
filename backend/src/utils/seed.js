import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User, Membership, Trainer, Member, Blog, Testimonial, Gallery, Coupon } from '../models/index.js';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/gym_management');

    await User.deleteMany({});
    await Membership.deleteMany({});
    await Trainer.deleteMany({});
    await Member.deleteMany({});
    await Blog.deleteMany({});
    await Testimonial.deleteMany({});
    await Gallery.deleteMany({});
    await Coupon.deleteMany({});

    const adminUser = await User.create({
      fullName: 'Admin User',
      email: 'admin@elitefit.com',
      password: 'admin123',
      role: 'admin',
      isVerified: true,
    });

    const trainerUser = await User.create({
      fullName: 'Coach Olivia',
      email: 'trainer@elitefit.com',
      password: 'trainer123',
      role: 'trainer',
      isVerified: true,
    });

    const trainer = await Trainer.create({ user: trainerUser._id, expertise: ['Strength', 'Mobility'], experience: 6, rating: 4.9 });

    const memberUser = await User.create({
      fullName: 'John Member',
      email: 'member@elitefit.com',
      password: 'member123',
      role: 'member',
      isVerified: true,
    });

    const member = await Member.create({
      user: memberUser._id,
      assignedTrainer: trainer._id,
      weight: 78,
      height: 175,
      bmi: 25.5,
      fitnessGoal: 'Build strength',
    });

    await User.findByIdAndUpdate(memberUser._id, { memberProfile: member._id });
    await User.findByIdAndUpdate(trainerUser._id, { trainerProfile: trainer._id });

    await Membership.insertMany([
      {
        name: 'Starter',
        price: 49,
        duration: 1,
        durationUnit: 'months',
        features: ['Gym floor access', '2 group classes'],
        isPopular: false,
      },
      {
        name: 'Pro',
        price: 89,
        duration: 3,
        durationUnit: 'months',
        features: ['Unlimited access', '2 trainer sessions', 'Nutrition guidance'],
        isPopular: true,
      },
      {
        name: 'Elite',
        price: 149,
        duration: 6,
        durationUnit: 'months',
        features: ['Priority booking', 'Personal coaching', 'VIP events'],
        isPopular: false,
      },
    ]);

    await Blog.insertMany([
      {
        title: 'How to Build a Stronger Core',
        slug: 'build-stronger-core',
        excerpt: 'Improve posture and power with these proven workouts.',
        content: 'Core strength is foundational...',
        author: adminUser._id,
        category: 'Fitness',
      },
      {
        title: 'Fueling Your Fitness Goals',
        slug: 'fueling-your-fitness-goals',
        excerpt: 'Nutrition habits that support performance.',
        content: 'Consistency in diet matters...',
        author: trainerUser._id,
        category: 'Nutrition',
      },
    ]);

    await Testimonial.insertMany([
      {
        name: 'Sarah L.',
        message: 'The coaches here transformed my energy and confidence.',
        rating: 5,
      },
      {
        name: 'Marcus T.',
        message: 'Flexible plans and a supportive community made it easy to stay consistent.',
        rating: 5,
      },
    ]);

    await Gallery.insertMany([
      { title: 'Cardio Zone', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48', category: 'Gym' },
      { title: 'Strength Lab', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438', category: 'Training' },
    ]);

    await Coupon.create({ code: 'FIT10', description: '10% off first purchase', discountType: 'percentage', discountValue: 10, minPurchase: 50 });

    console.log('Seed completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error);
    process.exit(1);
  }
};

seedData();
