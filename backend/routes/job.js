// routes/job.js
const express = require('express');
const { postJob } = require('../controllers/jobController');

const router = express.Router();

// Job posting route
router.post('/post-job', postJob);

module.exports = router;
