const { Schema, model } = require('mongoose');

const genreSchema = new Schema(
    {
        genreTitle: {
            type: String,
            required: true
        },
        description: {
            type: String,
            maxLength: 280
        }
    }
);

const Genre = model('Genre', genreSchema);

module.exports = Genre;