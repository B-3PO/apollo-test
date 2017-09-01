const { ModifierGroup, ModifierOption, groupBy } = require('../connectors');
const DataLoader = require('dataloader');
const modifierOptionsLoader = new DataLoader(keys => ModifierOption.findAll({ where: {modifier_group_id: keys }}).then(data => groupBy(data, 'modifier_group_id')));

const type = `
  type ModifierGroup {
    id: Int!
    name: String
    modifierOptions: [ModifierOption]
  }
`;

const resolvers = {
  RootQuery: {
    modifierGroup: (_, args) => ModifierGroup.find({ where: args })
  },
  ModifierGroup: {
    modifierOptions: (modifierGroup) => modifierOptionsLoader.load(modifierGroup.id)
  }
};

module.exports = {
  name: 'modifierGroup',
  type,
  resolvers
};
