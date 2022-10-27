const mongoose = require('mongoose');
const db = require('../config/connection');
const { Genre, Mature, Region, Tag } = require('../models');

const genreData = require('./genreData.json');
const matureData = require('./matureData.json');
const regionData = require('./regionData.json');
const tagData = require('./tagData.json');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/adventure-concept-architect', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.then(() => { console.log('Mongo Connection Established')})
.catch((err) => {console.log(err)});

const seedDB = async () => {
    // cleans the database
    await Genre.deleteMany({});
    await Mature.deleteMany({});
    await Region.deleteMany({});
    await Tag.deleteMany({});

    console.log('all deleted!')

    // bulk create and insert data
    await Genre.insertMany(genreData);
    await Mature.insertMany(matureData);
    await Region.insertMany(regionData);
    await Tag.insertMany(tagData);

    console.log('all inserted!')
}

seedDB().then(() => {
    mongoose.connection.close();
})