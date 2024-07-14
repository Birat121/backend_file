// models/Routine.js
const mongoose = require('mongoose');

const RoutineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  day: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], required: true },
  time: { type: String, required: true },
});

module.exports = mongoose.model('Routine', RoutineSchema);
