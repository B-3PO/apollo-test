const Sequelize = require('sequelize');
const db = require('./database');
const VenueModel = require('./venue');
const LocationModel = require('./location');

const VenuesLocationsModel = db.define('venues_locations', {
  venue_id: { type: Sequelize.INTEGER },
  location_id: { type: Sequelize.INTEGER }
}, { timestamps: false });

VenueModel.belongsToMany(LocationModel, { through: 'venues_locations', foreignKey: 'venue_id' });
LocationModel.belongsToMany(VenueModel, { through: 'venues_locations', foreignKey: 'location_id' });

module.exports = VenuesLocationsModel;
