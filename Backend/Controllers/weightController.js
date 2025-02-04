const Weight = require('../Models/Weights');

/*

- Get weight
- Add weight
- Update weight
- Delete weight by date
- Delete all weights for a user

*/

const getWeight = async (req, res) => {
    try {
        const { uid } = req.params;
        const weightData = await Weight.findOne({ uid });
        
        if (!weightData) {
            return res.status(404).json({ message: 'No weight data found for this user' });
        }
        
        res.status(200).json({ weight: weightData });
    } catch (err) {
        console.error('Error fetching weight data:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
};

const getAllWeights = async (req, res) => {
    try {
        const allWeights = await Weight.find();
        res.status(200).json({ data: allWeights });
    } catch (err) {
        console.error('Error fetching all weight data:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
};

const addWeight = async (req, res) => {
    try {
        const { uid } = req.params;
        const { weight, date } = req.body;

        if (!weight || !date) {
            return res.status(400).json({ message: 'Weight and date are required' });
        }

        let userWeightData = await Weight.findOne({ uid });

        if (!userWeightData) {
            // Create a new user entry if they don’t exist
            userWeightData = new Weight({ uid, weights: [{ weight, date }] });
        } else {
            // Check if an entry already exists for the given date
            const existingEntry = userWeightData.weights.find(entry => entry.date === date);
            if (existingEntry) {
                return res.status(400).json({ message: 'Weight entry for this date already exists' });
            }

            // Add new weight entry to the existing array
            userWeightData.weights.push({ weight, date });
        }

        await userWeightData.save();
        res.status(201).json({ message: 'Weight added successfully', data: userWeightData });

    } catch (err) {
        console.error('Error adding weight data:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
};

const updateWeight = async (req, res) => {
    try {
        const { uid } = req.params;
        const { weight, date } = req.body;

        if (!weight || !date) {
            return res.status(400).json({ message: 'Weight and date are required' });
        }

        let userWeightData = await Weight.findOne({ uid });

        if (!userWeightData) {
            return res.status(404).json({ message: 'No weight data found for this user' });
        }

        // Find the specific weight entry for the given date
        const weightEntry = userWeightData.weights.find(entry => entry.date === date);

        if (!weightEntry) {
            return res.status(404).json({ message: 'No weight entry found for this date' });
        }

        // Update the weight value for that date
        weightEntry.weight = weight;
        await userWeightData.save();

        res.status(200).json({ message: 'Weight updated successfully' });
    } catch (err) {
        console.error('Error updating weight data:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
};  

const deleteWeightByDate = async (req, res) => {
    try {
        const { uid } = req.params;
        const { date } = req.body;

        if (!date) {
            return res.status(400).json({ message: 'Date is required' });
        }

        const existingUser = await Weight.findOne({ uid });
        if (!existingUser) {
            return res.status(404).json({ message: 'No weight data found for this user' });
        }

        // Remove the specific weight entry for the given date
        existingUser.weights = existingUser.weights.filter(entry => entry.date !== date);

        // Save if there are still entries, otherwise delete the document
        if (existingUser.weights.length > 0) {
            await existingUser.save();
        } else {
            await Weight.deleteOne({ uid });
        }

        res.status(200).json({ message: 'Weight entry deleted successfully' });
    } catch (err) {
        console.error('Error deleting weight data:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
};

const deleteAllWeights = async (req, res) => {
    try {
        const { uid } = req.params;

        const existingUser = await Weight.findOne({ uid });
        if (!existingUser) {
            return res.status(404).json({ message: 'No weight data found for this user' });
        }

        await Weight.deleteOne({ uid });
        res.status(200).json({ message: 'All weight data deleted successfully' });
    } catch (err) {
        console.error('Error deleting all weight data:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
};

module.exports = { getWeight, addWeight, updateWeight, getAllWeights, deleteWeightByDate, deleteAllWeights };