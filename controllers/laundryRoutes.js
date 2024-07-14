// routes/laundryRoutes.js
const express = require('express');
const router = express.Router();
const Laundry = require('../models/laundry');

// Create a new laundry schedule
router.post('/', async (req, res) => {
  const laundry = new Laundry(req.body);
  await laundry.save();
  res.send(laundry);
});

// Get all laundry schedules
router.get('/', async (req, res) => {
  const laundries = await Laundry.find().populate('user');
  res.send(laundries);
});

// Get laundry schedule by ID
router.get('/:id', async (req, res) => {
  const laundry = await Laundry.findById(req.params.id).populate('user');
  res.send(laundry);
});

// Update laundry schedule by ID
router.put('/:id', async (req, res) => {
  const laundry = await Laundry.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('user');
  res.send(laundry);
});

// Delete laundry schedule by ID
router.delete('/:id', async (req, res) => {
  await Laundry.findByIdAndDelete(req.params.id);
  res.send({ message: 'Laundry schedule deleted' });
});

module.exports = router;
