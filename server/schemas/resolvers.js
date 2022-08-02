const Tag = require('../models/Tag');
const Genre = require('../models/Genre');
const Region = require('../models/Region');
const Mature = require('../models/Mature');

const resolvers = {
  // read data
  Query: {
    // single tag
    tag: async (parent, { tagTitle }) => {
      return (
        Tag.findOne({ tagTitle })
      )
    },

    // all tags by category
    tagsByCategory: async (parent, { category }) => {
      return (
        Tag.find({ category })
      )
    },

    // all unique categories
    categories: async () => {
      return (
        Tag.distinct('category')
      )
    },

    // all tags
    tags: async () => {
      return (
        Tag.find()
      )
    },

    // single genre
    genre: async (parent, { genreTitle }) => {
      return (
        Genre.findOne({ genreTitle })
      )
    },

    // all genres
    genres: async () => {
      return (
        Genre.find()
      )
    },

    // single region
    region: async (parent, { regionTitle }) => {
      return (
        Region.findOne({ regionTitle })
      )
    },

    // all regions
    regions: async () => {
      return (
        Region.find()
      )
    },

    // single mature
    mature: async (parent, { matureRating }) => {
      return (
        Mature.findOne({ matureRating })
      )
    },

    // all mature
    matures: async () => {
      return (
        Mature.find()
      )
    }
  },

  // create, update, or delete data
  Mutation: {
    // create a tag
    createTag: async (parent, args) => {
      const tag = await Tag.create(args);

      return { tag };
    },

    // update a tag
    updateTag: async (parent, args) => {
      const updateTag = await Tag.findByIdAndUpdate(
        {_id: args._id},
        {$push: {tagTitle: args.tagTitle}},
        {new: true}
      )

      return updateTag;
    },

    // delete a tag

    // create a genre
    createGenre: async (parent, args) => {
      const genre = await Genre.create(args);

      return { genre };
    },

    // update a genre
    updateGenre: async (parent, args) => {
      const updateGenre = await Genre.findByIdAndUpdate(
        {_id: args._id},
        {$push: {genreTitle: args.genreTitle}},
        {new: true}
      )

      return updateGenre;
    },

    // delete a genre

    // create a region
    createRegion: async (parent, args) => {
      const region = await Region.create(args);

      return { region };
    },

    // update a region
    updateRegion: async (parent, args) => {
      const updateRegion = await Region.findByIdAndUpdate(
        {_id: args._id},
        {$push: {regionTitle: args.regionTitle}},
        {new: true}
      )

      return updateRegion;
    },

    // delete a region

    // create a mature
    createMature: async (parent, args) => {
      const mature = await Mature.create(args);

      return { mature };
    },

    // update a mature
    updateMature: async (parent, args) => {
      const updateMature = await Mature.findByIdAndUpdate(
        {_id: args._id},
        {$push: {matureRating: args.matureRating}},
        {new: true}
      )

      return updateMature;
    },

    // delete a mature

  }
  
};
   
module.exports = resolvers;
