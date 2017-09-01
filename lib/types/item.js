const { Item } = require('../connectors');

const type = `
  type Item {
    id: Int!
    name: String
    category: Category
    taxGroup: TaxGroup
    reportingGroup: ReportingGroup
    modifierGroups: [ModifierGroup]
  }
`;

const resolvers = {
  RootQuery: {
    item: (_, { id }) => Item.root.load(id)
  },
  Item: {
    modifierGroups: (item) => Item.modifierGroup.load(item.id),
    reportingGroup: (item) => Item.reportingGroup.load(item.id),
    category: (item) => Item.category.load(item.id)
  }
};

module.exports = {
  name: 'item',
  type,
  resolvers
};
