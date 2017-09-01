const { ModifierOption } = require('../connectors');
const type = `
  type ModifierOption {
    id: Int!
    name: String
    price: Float
  }
`;

const resolvers = {
  RootQuery: {
    modifierOption: (_, { id }) => ModifierOption.root.load(id)
  }
};

module.exports = {
  name: 'modifierOption',
  type,
  resolvers
};
