const Sequelize = require('sequelize');
const db = require('./database');
const LocationModel = require('./location');
const MenuModel = require('./menu');

const LocationsMenusModel = db.define('locations_menus', {
  location_id: { type: Sequelize.INTEGER },
  menu_id: { type: Sequelize.INTEGER }
}, { timestamps: false });

LocationModel.belongsToMany(MenuModel, { through: 'locations_menus', foreignKey: 'location_id' });
MenuModel.belongsToMany(LocationModel, { through: 'locations_menus', foreignKey: 'menu_id' });

module.exports = LocationsMenusModel;
