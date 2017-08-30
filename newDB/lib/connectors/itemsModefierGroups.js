const Sequelize = require('sequelize');
const db = require('./database');
const ItemModel = require('./item');
const ModefierGroupModel = require('./modefierGroup');

const ItemsModefierGroupsModel = db.define('items_modefier_groups', {
  item_id: { type: Sequelize.INTEGER },
  modefier_group_id: { type: Sequelize.INTEGER }
}, { timestamps: false });

ItemModel.belongsToMany(ModefierGroupModel, { as: 'modefierGroups', through: 'items_modefier_groups', foreignKey: 'item_id' });
ModefierGroupModel.belongsToMany(ItemModel, { through: 'items_modefier_groups', foreignKey: 'modefier_group_id' });

module.exports = ItemsModefierGroupsModel;
