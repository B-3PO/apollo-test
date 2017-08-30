const Sequelize = require('sequelize');
const db = require('./database');

const CategoryModel = db.define('category', {
  name: { type: Sequelize.STRING }
}, { timestamps: false });

module.exports = CategoryModel;
