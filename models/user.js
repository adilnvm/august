const mongoose = require('mongoose');

// Step 1: Define the Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

// Step 2: Create the Model
const User = mongoose.model('User', userSchema);

// Step 3: Export it
module.exports = User;
