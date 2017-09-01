const { makeExecutableSchema } = require('graphql-tools');
const { types, resolvers } = require('./types');
const { venue, location, menu, category, item, modifierGroup, modifierOption } = types;

const RootQuery = `
  type RootQuery {
    venue(id: Int!): Venue
    location(id: Int!): Location
    menu(id: Int!): Menu
    category(id: Int!): Category
    item(id: Int!): Item
    modifierGroup(id: Int!): ModifierGroup
    modifierOption(id: Int!): ModifierOption
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
    venue, location, menu, category, item, modifierGroup, modifierOption
  ],
  resolvers: resolvers
});
