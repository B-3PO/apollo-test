const db = require('./database');

const MenuItemModel = db.define('menu_item', {
  price: { type: Sequelize.DECIMAL },
  menu_id: { type: Sequelize.INTEGER }
}, { timestamps: false });

module.exports = MenuItemModel;
