const { Category } = require('../connectors');

const type = `
  type Category {
    id: Int!
    name: String
  }
`;

const resolvers = {
  RootQuery: {
    category: (_, { id }) => Category.root.load(id)
  }
};

module.exports = {
  name: 'category',
  type,
  resolvers
};
