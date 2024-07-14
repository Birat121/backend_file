// models/Laundry.js
const mongoose = require('mongoose');

const LaundrySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  day: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], required: true },
  timeSlot: { type: String, required: true },
});

module.exports = mongoose.model('Laundry', LaundrySchema);
