const db = require('./database');
const LocationModel = require('./location');

const MenuModel = db.define('menu', {
  name: { type: Sequelize.STRING }
}, { timestamps: false });

MenuModel.belongsToMany(LocationModel, { through: 'location_menus', foreignKey: 'menu_id' });

module.exports = MenuModel;
