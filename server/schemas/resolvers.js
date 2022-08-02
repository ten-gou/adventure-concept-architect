const Tag = require('../models/Tag');
const Genre = require('../models/Genre');
const Region = require('../models/Region');
const Mature = require('../models/Mature');

const resolvers = {
  // read data
  Query: {
    // single tag

    // all outfit tags ie. schoolgirl uniform, bunnysuit, etc

    // all occupation tags ie. teacher, warrior, etc

    // all demi/beast tags ie. catgirl, minotaur, etc

    // all act tags ie. blowjob, impregnation, etc

    // all status tags ie. loli, ugly bastard, etc

    // all tags

    // single genre

    // all genres

    // single region

    // all regions

    // single mature

    // all mature

  },

  // create, update, or delete data
  Mutation: {
    // create a tag

    // update a tag

    // delete a tag

    // create a genre

    // update a genre

    // delete a genre

    // create a region

    // update a region

    // delete a region

    // create a mature

    // update a mature

    // delete a mature

  }
  
};
   
module.exports = resolvers;
