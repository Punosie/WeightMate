const { v4: uuidv4 } = require('uuid');
const Family = require('../Models/Family');
/*
- Create family
- Get family
- Update family
- Delete family
- Add member to family
- delete member from family
- Get all families
- Get all families of a user
*/

const createFamily = async (req, res) => {
    try {
        const { familyName, admin, members = [] } = req.body;
        if (!familyName || !admin) {
            return res.status(400).json({ message: 'Family name and admin are required' });
        }

        const familyId = uuidv4();

        const existingFamily = await Family.findOne({ familyId });
        if (existingFamily) {
            return res.status(400).json({ message: 'Family already exists' });
        }

        const newFamily = new Family({ 
            familyName, 
            familyId, 
            admin, 
            members: [admin, ...members]
        });

        await newFamily.save();
        res.status(201).json({ message: 'Family Created Successfully', family: newFamily });
    } catch (err) {
        console.error('Error creating family:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
};

const getFamily = async (req, res) => {
    try {
        const { familyId } = req.params;
        const familyData = await Family.findOne({ familyId });

        if (!familyData) {
            return res.status(404).json({ message: 'No family found' });
        }

        res.status(200).json({ family: familyData });
    }
    catch (err) {
        console.error('Error fetching family data:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
}

const getAllFamilies = async (req, res) => {
    try {
        const allFamilies = await Family.find();
        res.status(200).json({ data: allFamilies });
    } catch (err) {
        console.error('Error fetching all family data:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
};

const getUserFamilies = async (req, res) => {
    try {
        const { uid } = req.params;
        const userFamilies = await Family.find({ members: uid });
        res.status(200).json({ data: userFamilies });
    } catch (err) {
        console.error('Error fetching user family data:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
};

const deleteFamily = async (req, res) => {
    try {
        const { familyId } = req.params;
        const family = await Family.findOne({ familyId });
        if (!family) {
            return res.status(404).json({ message: 'Family not found' });
        }
        await Family.deleteOne({ familyId });
        res.status(200).json({ message: 'Family Deleted Successfully' });
    }
    catch (err) {
        console.error('Error deleting family:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
}

const updateFamily = async (req, res) => {
    try {
        const { familyId } = req.params;
        const { familyName, admin } = req.body;

        const family = await Family.findOne({ familyId });
        if (!family) {
            return res.status(404).json({ message: 'Family not found' });
        }

        if (familyName) {
            family.familyName = familyName;
        }

        if (admin) {
            if (!family.members.includes(admin)) {
                return res.status(400).json({ message: 'New admin must be a member of the family' });
            }
            family.admin = admin;
        }

        await family.save();
        res.status(200).json({ message: 'Family updated successfully', family });
    } catch (err) {
        console.error('Error updating family:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
};

const addMember = async (req, res) => {
    try {
        const { familyId } = req.params;
        const { members } = req.body;

        if (!Array.isArray(members) || members.length === 0) {
            return res.status(400).json({ message: 'Members should be an array with at least one value' });
        }

        const family = await Family.findOne({ familyId });
        if (!family) {
            return res.status(404).json({ message: 'Family not found' });
        }

        const newMembers = members.filter(member => !family.members.includes(member));
        if (newMembers.length === 0) {
            return res.status(400).json({ message: 'All members are already in the family' });
        }

        family.members.push(...newMembers);
        await family.save();

        res.status(200).json({ message: 'Members added successfully', family });
    } catch (err) {
        console.error('Error adding members to family:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
};


const deleteMember = async (req, res) => {
    try {
        const { familyId, uid } = req.params;

        const family = await Family.findOne({ familyId });
        if (!family) {
            return res.status(404).json({ message: 'Family not found' });
        }
        if (!family.members.includes(uid)) {
            return res.status(400).json({ message: 'Member does not exist in the family' });
        }
        await Family.updateOne(
            { familyId },
            { $pull: { members: uid } } 
        );
        const updatedFamily = await Family.findOne({ familyId });

        res.status(200).json({ message: 'Member deleted successfully', family: updatedFamily });
    } catch (err) {
        console.error('Error deleting member from family:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
};




module.exports = { createFamily, getFamily, getAllFamilies, getUserFamilies, deleteFamily, updateFamily, addMember, deleteMember };