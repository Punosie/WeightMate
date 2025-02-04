const express = require('express');
const cors = require('cors');
const db = require('./Db/db');
const userRoutes = require('./Routes/userRoutes');
const weightRoutes = require('./Routes/weightRoutes');
const familyRoutes = require('./Routes/familyRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

// Default Route
app.get('/', (req, res) => {
    res.send('Welcome to the Backend');
});

// Routes
app.use('/api/user', userRoutes);
app.use('/api/weight', weightRoutes);
app.use('/api/family', familyRoutes);

const server = async() => {
    try{
        await db();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch(err){
        console.log(err);
        process.exit(1);
    }
}

server();