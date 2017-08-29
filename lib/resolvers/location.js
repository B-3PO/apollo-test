const { Location } = require('../connectors');

const resolvers = {
  RootQuery: {
    location: (_, args) => Location.find({ where: args })
  },
  Location: {
    menus: (location) => location.getMenus()
  }
};

module.exports = resolvers;
