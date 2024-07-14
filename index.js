// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require('./controllers/userRoutes');

const routineRoutes = require('./controllers/routineRoutes');
const laundryRoutes = require('./controllers/laundryRoutes');
const entryExitRoutes = require('./controllers/entryExitRoutes');

const app = express();
app.use(cors({
  origin:"http://localhost:5173"
}));
app.use(bodyParser.json());

async function connectToMongo() {
  try {
    await mongoose.connect('mongodb://localhost:27017/pgmanagement');
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.error(err);
  }
}
connectToMongo();

app.use('/api/users', userRoutes);
app.use('/api/routines', routineRoutes);
app.use('/api/laundry', laundryRoutes);
app.use('/api/entryexit', entryExitRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

