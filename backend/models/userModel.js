const mongoose = require('mongoose');
const router = require('../routes/userRouter');

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 5},
    displayName: {type: String, required: true, unique: true}, 
});

module.exports = User = mongoose.model("user", userSchema);