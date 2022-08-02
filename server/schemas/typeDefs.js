const { gql } = require('apollo-server-express');

const typeDefs = gql`
# establish models here
type Tag {
  _id: ID
  tagTitle: String
  description: String
  category: String
}

type Region {
  _id: ID
  regionTitle: String
  description: String
}

type Mature {
  _id: ID
  matureRating: String
  description: String
}

type Genre {
  _id: ID
  genreTitle: String
  description: String
}

# establish queries here
type Query {
  tag(tagTitle: String!): Tag
  outfitTags(tagTitle: String!): Tag
  jobTags(tagTitle: String!): Tag
  demiTags(tagTitle: String!): Tag
  actTags(tagTitle: String!): Tag
  statusTags(tagTitle: String!): Tag
  tags: [Tag]

  genre(genreTitle: String!): Genre
  genres: [Genre]

  region(regionTitle: String!): Region
  regions: [Region]

  mature(matureRating: String!): Mature
  matures: [Mature]
}

# establish mutations here
type Mutation {
  createTag(tagTitle: String!, description: String!, category: String!): Tag
  updateTag(tagTitle: String!): Tag
  deleteTag(tagTitle: String!): Tag
  
  createGenre(genreTitle: String!, description: String!): Genre
  updateGenre(genreTitle: String!): Genre
  deleteGenre(genreTitle: String!): Genre

  createRegion(regionTitle: String!, description: String!): Region
  updateRegion(regionTitle: String!): Region
  deleteRegion(regionTitle: String!): Region

  createMature(matureRating: String!, description: String!): Mature
  updateMature(matureRating: String!): Mature
  deleteMature(matureRating: String!): Mature
}

`;

module.exports = typeDefs;