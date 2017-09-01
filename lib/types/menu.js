const { Menu } = require('../connectors');
const type = `
  type Menu {
    id: Int!
    name: String!
    tax_inclusive: Boolean
    menuItems: [MenuItem]
  }
`;

const mutation = `
  updateMenu (
    id: Int!
    name: String!
    tax_inclusive: Boolean
    location_ids: [Int]
  ): Menu

  createMenu (
    name: String!
    tax_inclusive: Boolean
    location_ids: [Int]
  ): Menu
`;

const resolvers = {
  RootQuery: {
    menu: (_, { id }) => Menu.root.load(id)
  },
  Menu: {
    menuItems: (menu) => Menu.menuItems.load(menu.id)
  },
  Mutation: {
    createMenu: (_, args) => Menu.create(args),
    updateMenu: (_, args) => Menu.update(args)
  }
};

module.exports = {
  name: 'menu',
  type,
  mutation,
  resolvers
};
