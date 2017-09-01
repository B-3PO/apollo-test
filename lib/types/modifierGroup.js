const { ModifierGroup } = require('../connectors');
const type = `
  type ModifierGroup {
    id: Int!
    name: String
    modifierOptions: [ModifierOption]
  }
`;

const resolvers = {
  RootQuery: {
    modifierGroup: (_, { id }) => ModifierGroup.root.load(id)
  },
  ModifierGroup: {
    modifierOptions: (modifierGroup) => ModifierGroup.modifierOptions.load(modifierGroup.id)
  }
};

module.exports = {
  name: 'modifierGroup',
  type,
  resolvers
};
