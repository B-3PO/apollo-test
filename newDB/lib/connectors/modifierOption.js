const Sequelize = require('sequelize');
const db = require('./database');

const ModifierOptionModel = db.define('modifier_option', {
  name: { type: Sequelize.STRING },
  modifier_group_id: { type: Sequelize.INTEGER }
}, { timestamps: false });

module.exports = ModifierOptionModel;
