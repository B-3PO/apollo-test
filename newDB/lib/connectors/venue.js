const Sequelize = require('sequelize');
const db = require('./database');

const VenueModel = db.define('venue', {
  name: { type: Sequelize.STRING }
}, { timestamps: false });


module.exports = VenueModel;
