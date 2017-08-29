const { Venue } = require('../connectors');

const resolvers = {
  RootQuery: {
    venue: (_, args) => Venue.find({ where: args })
  },
  Venue: {
    locations: venue => venue.getLocations(),
    menus: venue => venue.getMenus()
  }
};

module.exports = resolvers;
