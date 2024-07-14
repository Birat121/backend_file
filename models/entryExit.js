// models/EntryExit.js
const mongoose = require('mongoose');

const EntryExitSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  entryTime: { type: Date, required: true },
  exitTime: { type: Date, required: true },
});

module.exports = mongoose.model('EntryExit', EntryExitSchema);
