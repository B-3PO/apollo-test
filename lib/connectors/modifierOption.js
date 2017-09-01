const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'addon',
        variables: {
          addon_id: id
        },
        query: `
          query addon($addon_id: ID!) {
            addon(addon_id: $addon_id) {
              id
              name
              price
            }
          }
        `
      })
      .send()
      .then(response => response.body.data.addon)
  }))
});
