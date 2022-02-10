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
//get friends
export const getFriends = async (req, res) => {
    try{
        const friends = await friends.find();
        console.log(friends);
        res.status(200).json(friends);
    } catch(error){
        res.status(404).json({ message: error.message });
    }
}
//create friends
export const createFriends = async (req, res) => {
    const friends = req.body;

    const newFriends = new friends(friends);

    try{
        await newFriends.save();

        res.status(201).json(newFriends);
    } catch(error){
        res.status(409).json({ message: error.message });
    }
}