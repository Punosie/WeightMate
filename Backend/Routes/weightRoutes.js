const express = require('express');
const {getWeight, addWeight, updateWeight, getAllWeights, deleteWeightByDate, deleteAllWeights} = require('../Controllers/weightController');
const router = express.Router();

router.get('/get/:uid', getWeight);
router.get('/all', getAllWeights);
router.post('/add/:uid', addWeight);
router.put('/update/:uid', updateWeight);
router.delete('/delete/:uid', deleteWeightByDate);
router.delete('/deleteAll/:uid', deleteAllWeights);

module.exports = router;