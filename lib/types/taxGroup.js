const { TaxGroup } = require('../connectors');

const type = `
  type TaxGroup {
    id: Int!
    name: String
    description: String
  }
`;

const resolvers = {
  RootQuery: {
    taxGroup: (_, { id }) => TaxGroup.root.load(id)
  }
};

module.exports = {
  name: 'taxGroup',
  type,
  resolvers
};
