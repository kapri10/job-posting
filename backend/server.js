// server.js
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const auth = require('./routes/auth');
const job = require('./routes/job');
require('dotenv').config();

const app = express();
app.use(express.json()); // For parsing application/json

// Connect to MongoDB
connectDB();


// routes/auth.js
// const express = require('express');
const { register, login } = require('../backend/controllers/authController');

const router = express.Router();

// Registration route
router.post('/register', register);

// Login route
router.post('/login', login);

module.exports = router;



// Use routes
app.use('/api/auth', auth);
app.use('/api/jobs', job);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
