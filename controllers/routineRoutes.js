// routes/routineRoutes.js
const express = require('express');
const router = express.Router();
const Routine = require('../models/routine');

// Create a new routine
router.post('/', async (req, res) => {
  const routine = new Routine(req.body);
  await routine.save();
  res.send(routine);
});

// Get all routines
router.get('/', async (req, res) => {
  const routines = await Routine.find();
  res.send(routines);
});

// Get routine by ID
router.get('/:id', async (req, res) => {
  const routine = await Routine.findById(req.params.id);
  res.send(routine);
});

// Update routine by ID
router.put('/:id', async (req, res) => {
  const routine = await Routine.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(routine);
});

// Delete routine by ID
router.delete('/:id', async (req, res) => {
  await Routine.findByIdAndDelete(req.params.id);
  res.send({ message: 'Routine deleted' });
});

module.exports = router;
