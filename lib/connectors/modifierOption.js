const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'addons',
      variables: {
        addon_ids: keys
      },
      query: `
        query addons($addon_ids: [ID!]) {
          addons(addon_ids: $addon_ids) {
            id
            name
            price
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.addons)
});
