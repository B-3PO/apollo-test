const dataloaderSequelize = require('dataloader-sequelize').default;
const Sequelize = require('Sequelize');
const sequalize = new Sequelize('bypass', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});
dataloaderSequelize(sequalize);
module.exports = sequalize;
