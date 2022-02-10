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
//remove reaction
export const removeReaction = async (req, res) => {
    try{
        const updateReaction = await Thoughts.findOneAndUpdate({_id: req.params.thoughtId}, {$pull:{reactions:{reactionId: req.params.reactionId} }})
        res.status(200).json(updateReaction);
    } catch(error){
        res.status(404).json({ message: error.message });
    }
}
//create reaction
export const createReaction = async (req, res) => {
    try{
        const updateReaction = await User.findOneAndUpdate({_id: req.params.userId}, {$push:{reactions: req.body}})
        res.status(200).json(updateReaction);
    
    } catch(error){
        res.status(409).json({ message: error.message });
    }
}