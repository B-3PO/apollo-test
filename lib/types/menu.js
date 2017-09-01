const { Menu } = require('../connectors');
const type = `
  type Menu {
    id: Int!
    name: String
    menuItems: [MenuItem]
  }

  type Mutation {
    updateMenu (
      id: Int!
      name: String
      tax_inclusive: Boolean = false
      location_ids: [Int]
    ): Menu
  }
`;

const resolvers = {
  RootQuery: {
    menu: (_, { id }) => Menu.root.load(id)
  },
  Menu: {
    menuItems: (menu) => Menu.menuItems.load(menu.id)
  },
  Mutation: {
    updateMenu: (_, args) => Menu.update(args)
  }
};

module.exports = {
  name: 'menu',
  type,
  resolvers
};
