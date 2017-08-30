const { Menu } = require('../connectors');

const type = `
  type Menu {
    id: Int!
    name: String
    categories: [Category]
  }
`;

const resolvers = {
  RootQuery: {
    menu: (_, args) => Menu.find({ where: args })
  },
  Menu: {
    categories: (menu) => menu.getCategories()
  }
};

module.exports = {
  name: 'menu',
  type,
  resolvers
};
