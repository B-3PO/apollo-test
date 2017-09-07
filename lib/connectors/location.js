const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'locations',
      variables: {
        location_ids: keys
      },
      query: `
        query locations($location_ids: [ID!]) {
          locations(location_ids: $location_ids) {
            id
            name
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.locations);
});

exports.menus = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'locations',
      variables: {
        location_ids: keys
      },
      query: `
        query locations($location_ids: [ID!]) {
          locations(location_ids: $location_ids) {
            menus {
              id
              name
              tax_inclusive
            }
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.locations.map(l => l.menus));
});
