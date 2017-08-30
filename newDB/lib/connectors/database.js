const dataloaderSequelize = require('dataloader-sequelize').default;
const Sequelize = require('Sequelize');
const sequalize = new Sequelize('menus_test', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});
dataloaderSequelize(sequalize);
module.exports = sequalize;
