module.exports = combine(
  require('./venue'),
  require('./location'),
  require('./menu'),
  require('./menuItem'),
  require('./item'),
  require('./category'),
  require('./printGroup'),
  require('./taxGroup'),
  require('./reportingGroup'),
  require('./modifierGroup'),
  require('./modifierOption')
);


function combine(...resources) {
  return {
    resolvers: combindeResolvers(resources.map(r => r.resolvers)),
    types: combineTypes(resources),
    mutations: combineMutations(resources)
  }
}

function combindeResolvers(resolvers) {
  // root queries
  let rootQueris = resolvers.map(r => r.RootQuery);
  rootQueris.unshift({});
  let RootQuery = Object.assign.apply(this, rootQueris);
  resolvers.unshift({});
  let resolver = Object.assign.apply(this, resolvers);
  resolver.RootQuery = RootQuery;

  // mutations
  let mutations = resolvers.map(r => r.Mutation);
  let Mutation = Object.assign.apply(this, mutations);
  resolver.Mutation = Mutation;
  
  return resolver;
}

function combineTypes(resources) {
  return resources.reduce((a, b) => {
    a[b.name] = b.type;
    return a;
  }, {});
}

function combineMutations(resources) {
  let mutations = resources.reduce((a, b) => {
    if (b.mutation) a += b.mutation;
    return a;
  }, '');

  return `type Mutation {
    ${mutations}
  }`;
}
