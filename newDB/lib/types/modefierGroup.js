const { ModefierGroup } = require('../connectors');

const type = `
  type ModefierGroup {
    id: Int!
    name: String
    modefierOptions: [ModefierOption]
  }
`;

const resolvers = {
  RootQuery: {
    modefierGroup: (_, args) => ModefierGroup.find({ where: args })
  },
  ModefierGroup: {
    modefierOptions: (modefierGroup) => modefierGroup.getModefierOptions()
  }
};

module.exports = {
  name: 'modefierGroup',
  type,
  resolvers
};
