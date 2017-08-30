const { Venue } = require('../connectors');

const type = `
  type Venue {
    id: Int!,
    name: String,
    locations: [Location]
    menus: [Menu]
  }
`;

const resolvers = {
  RootQuery: {
    venue: (_, args) => Venue.find({ where: args })
  },
  Venue: {
    locations: venue => venue.getLocations(),
    menus: venue => venue.getMenus()
  }
};

module.exports = {
  name: 'venue',
  type,
  resolvers
};
