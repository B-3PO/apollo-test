const Sequelize = require('sequelize');
const db = require('./database');
const VenueModel = require('./venue');
const MenuModel = require('./menu');

const VenuesMenusModel = db.define('venues_menus', {
  venue_id: { type: Sequelize.INTEGER },
  menu_id: { type: Sequelize.INTEGER }
}, { timestamps: false });

VenueModel.belongsToMany(MenuModel, { through: 'venues_menus', foreignKey: 'venue_id' });
MenuModel.belongsToMany(VenueModel, { through: 'venues_menus', foreignKey: 'menu_id' });

module.exports = VenuesMenusModel;
