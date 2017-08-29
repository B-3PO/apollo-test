const Sequelize = require('Sequelize');
module.exports = new Sequelize('bypass', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});
