const Sequelize = require('sequelize');
const db = require('./database');

const ModefierOptionModel = db.define('modefier_option', {
  name: { type: Sequelize.STRING },
  modefier_group_id: { type: Sequelize.INTEGER }
}, { timestamps: false });

module.exports = ModefierOptionModel;
