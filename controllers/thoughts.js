const Thoughts = require('../models/thoughts');
//get thoughts
export const getThoughts = async (req, res) => {
    try{
        const thoughts = await Thoughts.find();
        console.log(thoughts);
        res.status(200).json(thoughts);
    } catch(error){
        res.status(404).json({ message: error.message });
    }
}
//create thought
export const createThoughts = async (req, res) => {
    const thoughts = req.body;

    const newThoughts = new Thoughts(thoughts);

    try{
        await newThoughts.save();

        res.status(201).json(newThoughts);
    } catch(error){
        res.status(409).json({ message: error.message });
    }
}
//get reaction
export const getReaction = async (req, res) => {
    try{
        const reaction = await reaction.find();
        console.log(reaction);
        res.status(200).json(reaction);
    } catch(error){
        res.status(404).json({ message: error.message });
    }
}
//create reaction
export const createReaction = async (req, res) => {
    const reaction = req.body;

    const newReaction = new reaction(reaction);

    try{
        await newReaction.save();

        res.status(201).json(newReaction);
    } catch(error){
        res.status(409).json({ message: error.message });
    }
}