module.exports = combindeResolvers(
  require('./venue'),
  require('./location'),
  require('./menu')
  // require('./category'),
  // require('./item'),
  // require('./menuItem')
);


function combindeResolvers(...resolvers) {
  var rootQueris = resolvers.map(r => r.RootQuery);
  rootQueris.unshift({});
  var RootQuery = Object.assign.apply(this, rootQueris);
  resolvers.unshift({});
  var resolver = Object.assign.apply(this, resolvers);
  resolver.RootQuery = RootQuery;
  return resolver;
}
