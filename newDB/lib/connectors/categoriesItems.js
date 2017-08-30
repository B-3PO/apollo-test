const Sequelize = require('sequelize');
const db = require('./database');
const CateogryModel = require('./category');
const ItemModel = require('./item');

const CategoriesItemsModel = db.define('categories_items', {
  category_id: { type: Sequelize.INTEGER },
  item_id: { type: Sequelize.INTEGER }
}, { timestamps: false });

CateogryModel.belongsToMany(ItemModel, { through: 'categories_items', foreignKey: 'category_id' });
ItemModel.belongsToMany(CateogryModel, { through: 'categories_items', foreignKey: 'item_id' });

module.exports = CategoriesItemsModel;
