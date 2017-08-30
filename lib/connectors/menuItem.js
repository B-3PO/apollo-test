const Sequelize = require('sequelize');
const db = require('./database');
const ItemModel = require('./item');

const MenuItemModel = db.define('menu_item', {
  price: { type: Sequelize.DECIMAL },
  menu_id: { type: Sequelize.INTEGER },
  item_id: { type: Sequelize.INTEGER }
}, { timestamps: false });

MenuItemModel.hasOne(ItemModel, { targetKey: 'item_id', foreignKey: 'id' });

module.exports = MenuItemModel;
