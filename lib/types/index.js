module.exports = combine(
  require('./venue'),
  require('./location'),
  require('./menu'),
  require('./menuItem')
);


function combine(...resources) {
  return {
    resolvers: combindeResolvers(resources.map(r => r.resolvers)),
    types: combineType(resources)
  }
}

function combindeResolvers(resolvers) {
  var rootQueris = resolvers.map(r => r.RootQuery);
  rootQueris.unshift({});
  var RootQuery = Object.assign.apply(this, rootQueris);
  resolvers.unshift({});
  var resolver = Object.assign.apply(this, resolvers);
  resolver.RootQuery = RootQuery;
  return resolver;
}

function combineTypes(resources) {
  return resources.reduce((a, b) => {
    a[b.name] = b.type;
    return a;
  }, {});
}
