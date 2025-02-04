require('dotenv').config();
const mongoose = require('mongoose');
const URL = process.env.MONGO_URL;

const db = async () => {
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(URL, {
            dbName: 'WeightTracker',
        })
        console.log('Connected to MongoDB');
    }
    catch(err){
        console.log('Error in connecting to MongoDB', err);
        process.exit(1);
    }
}

module.exports = db;