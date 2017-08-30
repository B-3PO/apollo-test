const { Category } = require('../connectors');

const type = `
  type Category {
    id: Int!
    name: String
    items: [Item]
  }
`;

const resolvers = {
  RootQuery: {
    category: (_, args) => Category.find({ where: args })
  },
  Category: {
    items: (category) => category.getItems()
  }
};

module.exports = {
  name: 'category',
  type,
  resolvers
};
