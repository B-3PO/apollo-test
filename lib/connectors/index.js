const requester = require('requester');
requester.config.serviceUrls = {
  'menus-graphql': 'http://localhost:8888/graphqlserver',
  mono: 'http://localhost:3000'
};


module.exports = {
  Location: require('./location'),
  Menu: require('./menu'),
  MenuItem: require('./menuItem'),
  Item: require('./item'),
  Category: require('./category'),
  PrintGroup: require('./printGroup'),
  TaxGoup: require('./taxGroup'),
  ReportingGroup: require('./reportingGroup'),
  ModifierGroup: require('./modifierGroup'),
  ModifierOption: require('./modifierOption')
};
