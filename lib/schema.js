const { makeExecutableSchema } = require('graphql-tools');
const { types, resolvers } = require('./types');
const { venue, location, menu, menuItem, item } = types;

const RootQuery = `
  type RootQuery {
    venue(id: Int!): Venue
    location(id: Int!): Location
    menu(id: Int!): Menu
    menuItem(id: Int!): MenuItem
    item(id: Int!): Item
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
    venue, location, menu, menuItem, item
  ],
  resolvers: resolvers
});
