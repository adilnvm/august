const express = require('express');
const router = express.Router();
const User = require('../models/User'); // import model

// @route   POST /api/users
// @desc    Register a new user
// @access  Public
router.post('/', async function (req, res) {
    try {
        const { username, email, password } = req.body;

        // Basic validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }

        // Save new user to DB
        const newUser = new User({ username, email, password });
        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error saving user:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
