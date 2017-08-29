const { Menu, Category } = require('../connectors');

const resolvers = {
  RootQuery: {
    menu: (_, args) => Menu.find({ where: args })
  },
  Menu: {
    menuItems: (menu) => menu.getMenuItems(),
    // categories: (menu) => menu.getCategories()
    // categories: (menu) => {
    //   return Category.find({
    //     include: [{model: Item, where: { category_id: {$field: Category.rawAttributes.id}, menu_id: menu.id } }]
    //   });
    // }
  }
};

module.exports = resolvers;
