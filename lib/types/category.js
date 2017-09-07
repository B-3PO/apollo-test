const { Category } = require('../connectors');

const type = `
  type Category {
    id: Int!
    name: String
    description: String
    alcohol: Boolean
    limit: Int
    position: Int
  }
`;

const mutation = `
  updateCategory (
    id: Int!
    name: String!
  ): Category

  createCategory (
    name: String!
  ): Category
`;

const resolvers = {
  RootQuery: {
    category: (_, { id }) => Category.root.load(id)
  },

  Mutation: {
    createCategory: (_, args) => Category.create(args),
    updateCategory: (_, args) => Category.update(args)
  }
};

module.exports = {
  name: 'category',
  type,
  mutation,
  resolvers
};
