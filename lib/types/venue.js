const { Venue } = require('../connectors');

const type = `
  type Venue {
    id: Int!,
    name: String,
    locations: [Location]
    menus: [Menu]
    items: [Item]
  }
`;

const resolvers = {
  RootQuery: {
    venue: (_, { id }) => Venue.root.load(id)
  },
  Venue: {
    locations: venue => Venue.locations.load(venue.id),
    menus: venue => Venue.menus.load(venue.id),
    menus: venue => Venue.menus.load(venue.id)
  }
};

module.exports = {
  name: 'venue',
  type,
  resolvers
};
