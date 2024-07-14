// routes/entryExitRoutes.js
const express = require('express');
const router = express.Router();
const EntryExit = require('../models/entryExit');

// Create a new entry/exit record
router.post('/', async (req, res) => {
  const entryExit = new EntryExit(req.body);
  await entryExit.save();
  res.send(entryExit);
});

// Get all entry/exit records
router.get('/', async (req, res) => {
  const entriesExits = await EntryExit.find().populate('user');
  res.send(entriesExits);
});

// Get entry/exit record by ID
router.get('/:id', async (req, res) => {
  const entryExit = await EntryExit.findById(req.params.id).populate('user');
  res.send(entryExit);
});

// Update entry/exit record by ID
router.put('/:id', async (req, res) => {
  const entryExit = await EntryExit.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('user');
  res.send(entryExit);
});

// Delete entry/exit record by ID
router.delete('/:id', async (req, res) => {
  await EntryExit.findByIdAndDelete(req.params.id);
  res.send({ message: 'Entry/Exit record deleted' });
});

module.exports = router;
