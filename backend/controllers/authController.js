// controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs'); // Import bcrypt
const { sendVerificationEmail } = require('../services/emailService');

exports.register = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
    const newUser = new User({ name, email, mobile, password: hashedPassword });

    await newUser.save();

    const verificationLink = `http://yourfrontendurl.com/verify-email?token=${newUser._id}`;
    sendVerificationEmail(email, verificationLink);

    res.status(201).json({ message: 'User registered. Please check your email for verification.' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user.', error });
  }
};
// controllers/authController.js
const jwt = require('jsonwebtoken'); // Make sure to install jsonwebtoken

// Login function
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Create and send JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in.', error });
  }
};
