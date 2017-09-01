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
    location: (_, { id }) => Location.root.load(id)
  },
  Location: {
    menus: (location) => Location.menus.load(location.id)
  }
};

module.exports = {
  name: 'location',
  type,
  resolvers
};
