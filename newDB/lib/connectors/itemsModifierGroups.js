const Sequelize = require('sequelize');
const db = require('./database');
const ItemModel = require('./item');
const ModifierGroupModel = require('./modifierGroup');

const ItemsModifierGroupsModel = db.define('items_modifier_groups', {
  item_id: { type: Sequelize.INTEGER },
  modifier_group_id: { type: Sequelize.INTEGER }
}, { timestamps: false });

ItemsModifierGroupsModel.hasOne(ModifierGroupModel, { primaryKey: 'modifier_group_id', foreignKey: 'id' });

ItemModel.belongsToMany(ModifierGroupModel, { as: 'modifierGroups', through: 'items_modifier_groups', foreignKey: 'item_id' });
ModifierGroupModel.belongsToMany(ItemModel, { through: 'items_modifier_groups', foreignKey: 'modifier_group_id' });

module.exports = ItemsModifierGroupsModel;
