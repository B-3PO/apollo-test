const { makeExecutableSchema } = require('graphql-tools');
const { types, resolvers } = require('./types');
const { venue, location, menu, category, item, modefierGroup, modefierOption } = types;

const RootQuery = `
  type RootQuery {
    venue(id: Int!): Venue
    location(id: Int!): Location
    menu(id: Int!): Menu
    category(id: Int!): Category
    item(id: Int!): Item
    modefierGroup(id: Int!): ModefierGroup
    modefierOption(id: Int!): ModefierOption
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
    venue, location, menu, category, item, modefierGroup, modefierOption
  ],
  resolvers: resolvers
});
