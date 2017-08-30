const { Item } = require('../connectors');

const type = `
  type Item {
    id: Int!
    name: String
  }
`;

const resolvers = {
  RootQuery: {
    item: (_, args) => Item.find({ where: args })
  }
};

module.exports = {
  name: 'item',
  type,
  resolvers
};
