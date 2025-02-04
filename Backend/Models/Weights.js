const mongoose = require('mongoose');

// Define schema for individual weight entries
const weightEntrySchema = new mongoose.Schema({
    weight: {
        type: Number,
        required: true,
    },
    date: {
        type: String,  // Format: 'YYYY-MM-DD'
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now, // Stores the exact timestamp of the entry
    }
}, { _id: false });

const weightsSchema = new mongoose.Schema({
    uid: {
        type: String,
        unique: true,
        required: true,
    },
    weights: [weightEntrySchema],  // Array of weight entries
});

const Weight = mongoose.model('Weight', weightsSchema);

module.exports = Weight;
