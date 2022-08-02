const db = require('../config/connection');
const { Genre, Mature, Region, Tag } = require('../models');

const genreData = require('./genreData.json');
const matureData = require('./matureData.json');
const regionData = require('./regionData.json');
const tagData = require('./tagData.json');

db.once('open', async () => {
    // cleans the database
    await Genre.deleteMany({});
    await Mature.deleteMany({});
    await Region.deleteMany({});
    await Tag.deleteMany({});

    console.log('all deleted!')

    // bulk create and insert data
    const genre = await Genre.insertMany(genreData);
    const mature = await Mature.insertMany(matureData);
    const region = await Region.insertMany(regionData);
    const tag = await Tag.insertMany(tagData);

    console.log('all inserted!')
})