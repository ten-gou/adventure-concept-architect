const { Schema, model } = require('mongoose');

const tagSchema = new Schema(
    {
        tagTitle: {
            type: String,
            required: true
        },
        description: {
            type: String,
            maxLength: 280
        },
        category: {
            type: String
        }
    }
);

const Tag = model('Tag', tagSchema);

module.exports = Tag;