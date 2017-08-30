const { Item } = require('../connectors');

const type = `
  type Item {
    id: Int!
    name: String
    modefierGroups: [ModefierGroup]
  }
`;

const resolvers = {
  RootQuery: {
    item: (_, args) => Item.find({ where: args }),
  },
  Item: {
    modefierGroups: (item) => item.getModefierGroups()
  }
};

module.exports = {
  name: 'item',
  type,
  resolvers
};
