const Sequelize = require('sequelize');
const db = require('./database');
const LocationModel = require('./location');
const MenuModel = require('./menu');

const VenueModel = db.define('venue', {
  name: { type: Sequelize.STRING }
}, { timestamps: false });

VenueModel.hasMany(LocationModel, { foreignKey: 'venue_id' });
VenueModel.hasMany(MenuModel, { foreignKey: 'venue_id' });

module.exports = VenueModel;
