import WorkoutPlan from '../models/WorkoutPlan.js';
import DietPlan from '../models/DietPlan.js';

export const getPlans = async (req, res) => {
  try {
    const [workouts, diets] = await Promise.all([
      WorkoutPlan.find().sort({ createdAt: -1 }),
      DietPlan.find().sort({ createdAt: -1 }),
    ]);

    res.status(200).json({ workouts, diets });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch plans.' });
  }
};

export const createPlan = async (req, res) => {
  try {
    const { type, ...data } = req.body;
    const model = type === 'diet' ? DietPlan : WorkoutPlan;
    const plan = await model.create({ ...data, trainer: req.user._id });
    res.status(201).json({ message: 'Plan created.', plan });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Plan creation failed.' });
  }
};

export const updatePlan = async (req, res) => {
  try {
    const { type, ...data } = req.body;
    const model = type === 'diet' ? DietPlan : WorkoutPlan;
    const plan = await model.findByIdAndUpdate(req.params.id, data, { new: true });
    if (!plan) return res.status(404).json({ message: 'Plan not found.' });
    res.status(200).json({ message: 'Plan updated.', plan });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Plan update failed.' });
  }
};

export const deletePlan = async (req, res) => {
  try {
    const { type } = req.body;
    const model = type === 'diet' ? DietPlan : WorkoutPlan;
    const plan = await model.findByIdAndDelete(req.params.id);
    if (!plan) return res.status(404).json({ message: 'Plan not found.' });
    res.status(200).json({ message: 'Plan deleted.' });
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to delete plan.' });
  }
};
