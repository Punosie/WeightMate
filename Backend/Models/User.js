const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    mobile: {
        type: String,
        unique: true,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    currentWeight: {
        type: Number,
        required: true,
    },
    targetWeight: {
        type: Number,
        required: true,
    },
    family:{
        type: [String],
        required: false,
    },
},{timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;