const Sequelize = require('sequelize');
const db = require('./database');
const LocationModel = require('./location');
const MenuModel = require('./menu');

const LocationMenuModel = db.define('location_menus', {
  location_id: { type: Sequelize.INTEGER },
  menu_id: { type: Sequelize.INTEGER }
}, { timestamps: false });

MenuModel.belongsToMany(LocationModel, { through: 'location_menus', foreignKey: 'menu_id' });
LocationModel.belongsToMany(MenuModel, { through: 'location_menus', foreignKey: 'location_id' });

module.exports = LocationMenuModel;
