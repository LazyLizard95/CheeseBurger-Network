const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const ReactionSchema = new Schema({
    replyId: {
        type: Schema.type.ObjectId,
        default: () => new Types.ObjectId()
    },

    reply: {
        type: String,
        required: true,
        maxLength: 280
    },

    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }

},
    {
        toJSON: {
            getters: true
        }
    }
)

const ThoughtSchema = new Schema({
    thoughtId: {
        type: Schema.type.ObjectId,
        default: () => new Types.ObjectId()
    },

    thought: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    
})

ReactionSchema.virtual('reactionCount').get(function(){
    return this.ReactionSchema.length
})