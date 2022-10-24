const Tag = require('../models/Tag');
const Genre = require('../models/Genre');
const Region = require('../models/Region');
const Mature = require('../models/Mature');
const db = require('../config/connection');

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
      const params = category ? {category} : {};
      return(
        Tag.find(params)
      )
    },

    // all unique categories
    uniqueCategories: async () => {
      return (Tag.distinct("category").then(data => {
        const arr = [];

        for (i=0; i<data.length; i++) {
          const sCStr = `{"category":"${data[i]}"}`;
          const sCArr = JSON.parse(sCStr);
          arr.push(sCArr);
        }

        return arr;
      }).then(arr => {return arr}))
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

    lewdOrNonLewd: async (parent, { lewd }) => {
      const params = lewd ? { lewd } : {};
      return(
        Mature.find({ lewd })
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
        {
          tagTitle: args.tagTitle,
          category: args.category,
          description: args.description
        },
        {new: true}
      ).exec()
      

      return { updateTag };
    },

    // delete a tag
    deleteTag: async (parent, args) => {
      const deleteTag = await Tag.findOneAndDelete(
        {tagTitle: args.tagTitle}
      ).exec()

      return { deleteTag };
    },

    // create a genre
    createGenre: async (parent, args) => {
      const genre = await Genre.create(args);

      return { genre };
    },

    // update a genre
    updateGenre: async (parent, args) => {
      const updateGenre = await Genre.findByIdAndUpdate(
        {_id: args._id},
        {
          genreTitle: args.genreTitle,
          description: args.description
        },
        {new: true}
      ).exec()

      return { updateGenre };
    },

    // delete a genre
    deleteGenre: async (parent, args) => {
      const deleteGenre = await Genre.findOneAndDelete(
        {genreTitle: args.genreTitle}
      ).exec()

      return { deleteGenre };
    },

    // create a region
    createRegion: async (parent, args) => {
      const region = await Region.create(args);

      return { region };
    },

    // update a region
    updateRegion: async (parent, args) => {
      const updateRegion = await Region.findByIdAndUpdate(
        {_id: args._id},
        {
          regionTitle: args.regionTitle,
          description: args.description
        },
        {new: true}
      ).exec()

      return updateRegion;
    },

    // delete a region
    deleteRegion: async (parent, args) => {
      const deleteRegion = await Region.findOneAndDelete(
        {regionTitle: args.regionTitle},
      ).exec()

      return { deleteRegion };
    },

    // create a mature
    createMature: async (parent, args) => {
      const mature = await Mature.create(args);

      return { mature };
    },

    // update a mature
    updateMature: async (parent, args) => {
      const updateMature = await Mature.findByIdAndUpdate(
        {_id: args._id},
        {
          matureRating: args.matureRating,
          lewd: args.lewd,
          description: args.description
        },
        {new: true}
      ).exec()

      return updateMature;
    },

    // delete a mature
    deleteMature: async (parent, args) => {
      const deleteMature = await Mature.findOneAndDelete(
        {matureRating: args.matureRating}
      ).exec()

      return deleteMature;
    }

  }
  
};
   
module.exports = resolvers;
