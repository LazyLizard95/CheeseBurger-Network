const User = require('../models/user');
//get users
export const getUsers = async (req, res) => {
    try{
        const users = await User.find();
        console.log(users);
        res.status(200).json(users);
    } catch(error){
        res.status(404).json({ message: error.message });
    }
}
//get single user
export const getSingleUser = async (req, res) => {
    try{
        const users = await User.findById();
        console.log(users);
        res.status(200).json(users);
    } catch(error){
        res.status(404).json({ message: error.message });
    }
}
//create users
export const createUser = async (req, res) => {
    const user = req.body;

    const newUser = new User(user);

    try{
        await newUser.save();

        res.status(201).json(newUser);
    } catch(error){
        res.status(409).json({ message: error.message });
    }
}
//remove friend
export const removeFriends = async (req, res) => {
    try{
        const updateFriend = await User.findOneAndUpdate({_id: req.params.userId}, {$pull:{friends: req.params.friendId}})
        res.status(200).json(updateFriend);
    
    } catch(error){
        res.status(404).json({ message: error.message });
    }
}
//create friends
export const createFriends = async (req, res) => {
    try{
        const updateFriend = await User.findOneAndUpdate({_id: req.params.userId}, {$push:{friends: req.params.friendId}})
        res.status(200).json(updateFriend);

        
    } catch(error){
        res.status(409).json({ message: error.message });
    }
}