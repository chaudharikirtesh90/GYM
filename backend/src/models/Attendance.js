import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema(
  {
    member: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true },
    classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', default: null },
    date: { type: Date, required: true },
    status: { type: String, enum: ['present', 'absent', 'late'], default: 'present' },
    notes: { type: String, default: '' },
  },
  { timestamps: true }
);

const Attendance = mongoose.model('Attendance', attendanceSchema);
export default Attendance;
