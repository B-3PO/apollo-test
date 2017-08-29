const { MenuItem } = require('../connectors');

const type = `
  type MenuItem {
    id: Int!
    price: Float
  }
`;

const resolvers = {
  RootQuery: {
    menuItem: (_, args) => MenuItem.find({ where: args })
  },
  MenuItem: {
    // menu: (category) => category.getMenus()
  }
};

module.exports = {
  name: 'menuItem',
  type,
  resolvers
};
