const db = require('./database');
const MenuModel = require('./menu');
const MenuItemModel = require('./menuItem');

const LocationModel = db.define('location', {
  name: { type: Sequelize.STRING }
}, { timestamps: false });

LocationModel.belongsToMany(MenuModel, { through: 'location_menus', foreignKey: 'location_id' });
MenuModel.hasMany(MenuItemModel, { foreignKey: 'menu_id' });

module.exports = LocationModel;
