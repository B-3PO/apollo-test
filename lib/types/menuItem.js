const { MenuItem } = require('../connectors');
const type = `
  type MenuItem {
    id: Int!
    price: Float
    item: Item
    state: String
    print_group_id: Int
    printGroup: PrintGroup
  }
`;

const resolvers = {
  RootQuery: {
    menuItem: (_, { id }) => MenuItem.root.load(id)
  },
  MenuItem: {
    item: (menuItem) => MenuItem.item.load(menuItem.id),
    printGroup: (menuItem) => MenuItem.printGroup.load(menuItem.id)
  }
};

module.exports = {
  name: 'menuItem',
  type,
  resolvers
};
