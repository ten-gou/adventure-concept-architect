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
  lewd: Boolean
  description: String
}

type Genre {
  _id: ID
  genreTitle: String
  description: String
}

# establish queries here
type Query {
  tag(tagTitle: String, description: String, category: String): Tag
  tagsByCategory(category: String!): [Tag]
  uniqueCategories: [Tag]
  tags: [Tag]

  genre(genreTitle: String!): Genre
  genres: [Genre]

  region(regionTitle: String!): Region
  regions: [Region]

  mature(matureRating: String!): Mature
  lewdOrNonLewd(lewd: Boolean!): [Mature]
  matures: [Mature]
}

# establish mutations here
type Mutation {
  createTag(tagTitle: String!, category: String!, description: String): Tag
  updateTag(_id: ID!, tagTitle: String!, category: String, description: String): Tag
  deleteTag(tagTitle: String!): Tag
  
  createGenre(genreTitle: String!, description: String): Genre
  updateGenre(_id: ID!, genreTitle: String!, description: String): Genre
  deleteGenre(genreTitle: String!): Genre

  createRegion(regionTitle: String!, description: String): Region
  updateRegion(_id: ID!, regionTitle: String!, description: String): Region
  deleteRegion(regionTitle: String!): Region

  createMature(matureRating: String!, lewd: Boolean, description: String): Mature
  updateMature(_id: ID!, matureRating: String!, lewd: Boolean, description: String): Mature
  deleteMature(matureRating: String!): Mature
}

`;

module.exports = typeDefs;