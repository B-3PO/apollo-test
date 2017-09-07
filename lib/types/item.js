const { Item } = require('../connectors');

const type = `
  type Item {
    id: Int!
    name: String
    alcohol: Boolean
    position: Int
    tare_weight: Float
    by_weight: Boolean
    base_price: Float
    category_id: Int
    description: String
    sku_prefix: Int
    tax_group_id: Int
    reporting_group_id: Int
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
    modifierGroups: item => Item.modifierGroup.load(item.id),
    reportingGroup: item => Item.reportingGroup.load(item.id),
    taxGroup: item => Item.taxGroup.load(item.id),
    category: item => Item.category.load(item.id)
  }
};

module.exports = {
  name: 'item',
  type,
  resolvers
};
