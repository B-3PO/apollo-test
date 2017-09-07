const { ModifierGroup } = require('../connectors');
const type = `
  type ModifierGroup {
    id: Int!
    name: String
    group_type: String
    limit_selection_to: Int
    require_selection: Boolean
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
