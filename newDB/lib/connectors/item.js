const Sequelize = require('sequelize');
const db = require('./database');

const ItemModel = db.define('item', {
  name: { type: Sequelize.STRING }
}, { timestamps: false });

module.exports = ItemModel;
