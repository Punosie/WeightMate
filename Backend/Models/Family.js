    const mongoose = require('mongoose');

    const familySchema = new mongoose.Schema({
        familyName: {
            type: String,
            required: true,
        },
        familyId: {
            type: String,
            required: true,
        },
        admin: {
            type: String,
            required: true,
        },
        members: {
            type: [String],
            required: true,
        },
    }, {timestamps: true});

    const Family = mongoose.model('Family', familySchema);

    module.exports = Family;