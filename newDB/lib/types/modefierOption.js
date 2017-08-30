const { ModefierOption } = require('../connectors');

const type = `
  type ModefierOption {
    id: Int!
    name: String
    price: Float
  }
`;

const resolvers = {
  RootQuery: {
    modefierOption: (_, args) => ModefierOption.find({ where: args })
  }
};

module.exports = {
  name: 'modefierOption',
  type,
  resolvers
};
