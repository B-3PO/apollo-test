const { Menu } = require('connectors');

const type = `
  type Menu {
    id: Int!
    name: String
    menuItems: [MenuItem]
  }
`;

const resolvers = {
  RootQuery: {
    menu: (_, args) => Menu.find({ where: args })
  },
  Menu: {
    menuItems: (menu) => menu.getMenuItems()
  }
};

module.exports = {
  name: 'menu',
  type,
  resolvers
};
