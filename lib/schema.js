const { makeExecutableSchema } = require('graphql-tools');
const { types, mutations, resolvers } = require('./types');
const { organization, venue, location, menu, menuItem, item, category, modifierGroup, modifierOption, printGroup, taxGroup, reportingGroup } = types;

const RootQuery = `
  type RootQuery {
    organization(id: Int!): Organization
    venue(id: Int!): Venue
    location(id: Int!): Location
    menu(id: Int!): Menu
    menuItem(id: Int!): MenuItem
    item(id: Int!): Item
    category(id: Int!): Category
    printGroup(id: Int!): PrintGroup
    taxGroup(id: Int!): TaxGroup
    reportingGroup(id: Int!): ReportingGroup
    modifierGroup(id: Int!): ModifierGroup
    modifierOption(id: Int!): ModifierOption
  }
`;

const SchemaDefinition = `
  schema {
    query: RootQuery,
    mutation: Mutation
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    RootQuery,
    organization, venue, location, menu, menuItem, item, category, modifierGroup, modifierOption, printGroup, taxGroup, reportingGroup,
    mutations
  ],
  resolvers: resolvers
});
