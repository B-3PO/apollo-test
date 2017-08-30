const Sequelize = require('sequelize');
const db = require('./database');

const MenuModel = db.define('menu', {
  name: { type: Sequelize.STRING }
}, { timestamps: false });

module.exports = MenuModel;
