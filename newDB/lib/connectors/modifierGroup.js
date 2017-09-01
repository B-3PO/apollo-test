const Sequelize = require('sequelize');
const db = require('./database');
const ModifierOptionModel = require('./modifierOption');
// const ItemsModifierGroupsModel = require('./itemsModifierGroups');

const ModifierGroupModel = db.define('modifier_group', {
  name: { type: Sequelize.STRING }
}, { timestamps: false });

ModifierGroupModel.hasMany(ModifierOptionModel, { as: 'modifierOptions', foreignKey: 'modifier_group_id' });

module.exports = ModifierGroupModel;
