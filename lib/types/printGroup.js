const { PrintGroup } = require('../connectors');

const type = `
  type PrintGroup {
    id: Int!
    name: String
    printer_name: String
  }
`;

const resolvers = {
  RootQuery: {
    printGroup: (_, { id }) => PrintGroup.root.load(id)
  }
};

module.exports = {
  name: 'printGroup',
  type,
  resolvers
};
