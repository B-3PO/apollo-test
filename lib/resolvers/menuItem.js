const { MenuItem } = require('../connectors');

const resolvers = {
  RootQuery: {
    menuItem: (_, args) => MenuItem.find({ where: args })
  },
  MenuItem: {
    // menu: (category) => category.getMenus()
  }
};

module.exports = resolvers;
