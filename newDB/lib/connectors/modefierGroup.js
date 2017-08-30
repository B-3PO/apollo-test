const Sequelize = require('sequelize');
const db = require('./database');
const ModefierOptionModel = require('./modefierOption');

const ModefierGroupModel = db.define('modefier_group', {
  name: { type: Sequelize.STRING }
}, { timestamps: false });

ModefierGroupModel.hasMany(ModefierOptionModel, { as: 'modefierOptions', foreignKey: 'modefier_group_id' });

module.exports = ModefierGroupModel;
