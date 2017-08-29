const { Category } = require('../connectors');

const resolvers = {
  RootQuery: {
    category: (_, args) => Category.find({ where: args })
  },
  Category: {
    // menu: (category) => category.getMenus()
  }
};

module.exports = resolvers;
