const Sequelize = require('sequelize');
const db = require('./database');

const LocationModel = db.define('location', {
  name: { type: Sequelize.STRING }
}, { timestamps: false });

module.exports = LocationModel;
