const Sequelize = require('sequelize');
const db = require('./database');
const MenuModel = require('./menu');
const CategoryModel = require('./category');

const MenusCategoriesModel = db.define('menus_categories', {
  menu_id: { type: Sequelize.INTEGER },
  category_id: { type: Sequelize.INTEGER }
}, { timestamps: false });

MenuModel.belongsToMany(CategoryModel, { through: 'menus_categories', foreignKey: 'menu_id' });
CategoryModel.belongsToMany(MenuModel, { through: 'menus_categories', foreignKey: 'category_id' });

module.exports = MenusCategoriesModel;
