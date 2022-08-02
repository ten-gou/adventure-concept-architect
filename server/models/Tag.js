const { Schema, model } = require('mongoose');

const tagSchema = new Schema(
    {
        tagTitle: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: 'None written',
            maxLength: 280
        },
        category: {
            type: String
            // category being outfit, job, demi, act, status, etc
        }
    }
);

const Tag = model('Tag', tagSchema);

module.exports = Tag;