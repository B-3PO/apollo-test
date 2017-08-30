const { Venue } = require('../connectors');

const type = `
  type Venue {
    id: Int!,
    name: String,
    locations: [Location]
  }
`;

const resolvers = {
  RootQuery: {
    venue: (_, args) => Venue.find({ where: args })
  },
  Venue: {
    locations: venue => venue.getLocations()
  }
};

module.exports = {
  name: 'venue',
  type,
  resolvers
};
