const { Item } = require('../connectors');

const resolvers = {
  RootQuery: {
    item: (_, args) => Item.find({ where: args })
  },
  Item: {
    // menu: (category) => category.getMenus()
  }
};

module.exports = resolvers;
