const { MenuItem, Item } = require('../connectors');

const type = `
  type MenuItem {
    id: Int!
    price: Float
    item: Item
  }
`;

const resolvers = {
  RootQuery: {
    menuItem: (_, args) => MenuItem.find({ where: args })
  },
  MenuItem: {
    item: (menuItem) => menuItem.getItem()
  }
};

module.exports = {
  name: 'menuItem',
  type,
  resolvers
};
