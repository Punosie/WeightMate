const User = require('../Models/User');

/*

-createUser
-deleteUser
-updateUser
-getUser

*/

const createUser = async (req, res) => {
    try{
        const {uid, name, email, mobile, age, gender, height, currentWeight, targetWeight, family} = req.body;

        const existingUser = await User.findOne({ uid });
        if(existingUser){
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = new User({ uid, name, email, mobile, gender, age, height, currentWeight, targetWeight, family });
        await user.save();
        res.status(201).json({ message: 'User Created Successfully', name: user.name });
    }
    catch(err){
        console.error('Error creating user:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
}

const deleteUser = async (req, res) => {
    try{
        const {uid} = req.params;
        const user = await User.findOne({ uid });
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }
        await User.deleteOne({ uid });
        res.status(200).json({ message: 'User Deleted Successfully' });
    }
    catch(err){
        console.error('Error deleting user:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
}

const updateUser = async (req, res) => {
    try{
        const { uid } = req.params;
        const {name, email, mobile, age, gender, height, currentWeight, targetWeight, family} = req.body;
        const user = await User.findOne({ uid });
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }

        user.name = name;
        user.email = email;
        user.mobile = mobile;
        user.age = age;
        user.gender = gender;
        user.height = height;
        user.currentWeight = currentWeight;
        user.targetWeight = targetWeight;
        user.family = family;

        await user.save();
        res.status(200).json({ message: 'User Updated Successfully' });
    }
    catch(err){
        console.error('Error updating user:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
}

const getUser = async (req, res) => {
    try{
        const { uid } = req.params;
        const user = await User.findOne({ uid });
        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ user });   
    }
    catch(err){
        console.error('Error getting user:', err);
        res.status(500).json({ message: 'Something went wrong', error: err });
    }
}

module.exports = { createUser, deleteUser, updateUser, getUser };