const Sequelize = require('sequelize');
const db = require('./database');
const MenuItemModel = require('./menuItem');

const MenuModel = db.define('menu', {
  name: { type: Sequelize.STRING }
}, { timestamps: false });

MenuModel.hasMany(MenuItemModel, { foreignKey: 'menu_id' });
module.exports = MenuModel;
