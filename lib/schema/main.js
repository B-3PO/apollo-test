const { makeExecutableSchema } = require('graphql-tools');
// const Venue = require('../types/venue');
// const resolvers = require('../resolvers');
const resources = require('../types');
const { venue } = resources.types;
const { resolvers } = resources.resolvers;

const RootQuery = `
  type RootQuery {
    venue(id: Int!): Venue
    location(id: Int!): Location
    menu(id: Int!): Menu
    menuItem(id: Int!) MenuItem
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    RootQuery,
    Venue
  ],
  resolvers: resolvers
});
