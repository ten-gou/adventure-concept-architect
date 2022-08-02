const { Schema, model } = require('mongoose');

const regionSchema = new Schema(
    {
        regionTitle: {
            type: String,
            required: true
        },
        description: {
            type: String,
            maxLength: 280
        }
    }
);

const Region = model('Region', regionSchema);

module.exports = Region;