const { Organization } = require('../connectors');

const type = `
  type Organization {
    id: Int!,
    name: String,
    venues: [Venue]
    menus: [Menu]
    items: [Item]
  }
`;

const resolvers = {
  RootQuery: {
    organization: (_, { id }) => Organization.root.load(id)
  },
  Organization: {
    venues: (organization) => Organization.venues.load(organization.id),
    menus: organization => Organization.menus.load(organization.id),
    items: organization => Organization.items.load(organization.id)
  }
};

module.exports = {
  name: 'organization',
  type,
  resolvers
};
