const { ModefierGroup, ModefierOption, groupBy } = require('../connectors');
const DataLoader = require('dataloader');
const modefierOptionsLoader = new DataLoader(keys => ModefierOption.findAll({ where: {modefier_group_id: keys }}).then(data => groupBy(data, 'modefier_group_id')));

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
    modefierOptions: (modefierGroup) => modefierOptionsLoader.load(modefierGroup.id)
  }
};

module.exports = {
  name: 'modefierGroup',
  type,
  resolvers
};
