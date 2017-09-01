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
    modifierOption: (_, args) => ModifierOption.find({ where: args })
  }
};

module.exports = {
  name: 'modifierOption',
  type,
  resolvers
};
