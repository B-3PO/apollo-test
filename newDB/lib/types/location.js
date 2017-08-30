const { Location } = require('../connectors');

const type = `
  type Location {
    id: Int!
    name: String
    menus: [Menu]
  }
`;

const resolvers = {
  RootQuery: {
    location: (_, args) => Location.find({ where: args })
  },
  Location: {
    menus: (location) => location.getMenus()
  }
};

module.exports = {
  name: 'location',
  type,
  resolvers
};
