const express = require('express');
const router = express.Router();
const {createFamily, getFamily, getAllFamilies, getUserFamilies, deleteFamily, updateFamily, addMember, deleteMember} = require('../Controllers/familyController');


router.get('/get/:familyId', getFamily);
router.get('/all', getAllFamilies);
router.get('/userFamily/:uid', getUserFamilies);
router.post('/create', createFamily);
router.post('/addMember/:familyId', addMember);
router.put('/update/:familyId', updateFamily);
router.delete('/deleteFamily/:familyId', deleteFamily);
router.delete('/deleteMember/:familyId/:uid', deleteMember);

module.exports = router;