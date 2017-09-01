const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'locations',
        variables: {
          location_id: id
        },
        query: `
          query locations($location_id: ID!) {
            location(location_id: $location_id) {
              id
              name
            }
          }
        `
      })
      .send()
      .then(response => response.body.data.location);
  }));
});

exports.menus = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'locations',
        variables: {
          location_id: id
        },
        query: `
          query locations($location_id: ID!) {
            location(location_id: $location_id) {
              menus {
                id
                name
              }
            }
          }
        `
      })
      .send()
      .then(response => response.body.data.location.menus);
  }));
});
