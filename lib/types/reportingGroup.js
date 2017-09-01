const { ReportingGroup } = require('../connectors');

const type = `
  type ReportingGroup {
    id: Int!
    name: String
  }
`;

const resolvers = {
  RootQuery: {
    reportingGroup: (_, { id }) => ReportingGroup.root.load(id)
  }
};

module.exports = {
  name: 'reportingGroup',
  type,
  resolvers
};
