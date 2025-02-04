const express = require('express');
const {createUser, getUser, updateUser, deleteUser} = require('../Controllers/userController');
const router = express.Router();

router.get('/get/:uid', getUser);
router.post('/create', createUser);
router.put('/update/:uid', updateUser);
router.delete('/delete/:uid', deleteUser);

module.exports = router;