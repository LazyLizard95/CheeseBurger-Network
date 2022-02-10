const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat')


const UserSchema = new Schema({
    userId: {
        type: Schema.type.ObjectId,
        default: () => new Types.ObjectId()
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    thoughts : [{ type: Schema.Types.ObjectId, ref: 'Thought'}],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User'}]
})

const User = model('User', UserSchema);
module.exports = User;