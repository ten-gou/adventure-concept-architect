const { Schema, model } = require('mongoose');

const matureSchema = new Schema(
    {
        matureRating: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: 'None written',
            maxLength: 280
        }
    }
);

const Mature = model('Mature', matureSchema);

module.exports = Mature;