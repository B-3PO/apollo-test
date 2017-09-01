const { Item, ItemsModifierGroups, ModifierGroup } = require('../connectors');
const DataLoader = require('dataloader');

const type = `
  type Item {
    id: Int!
    name: String
    modifierGroups: [ModifierGroup]
  }
`;

const resolvers = {
  RootQuery: {
    item: (_, args) => Item.find({ where: args }),
  },
  Item: {
    modifierGroups: (item) => item.getModifierGroups()
  }
};

module.exports = {
  name: 'item',
  type,
  resolvers
};
