const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'addon_group',
        variables: {
          addon_group_id: id
        },
        query: `
          query addon_group($addon_group_id: ID!) {
            addon_group(addon_group_id: $addon_group_id) {
              id
              name
            }
          }
        `
      })
      .send()
      .then(response => response.body.data.addon_group)
  }))
});

exports.modifierOptions = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'addon_group_addons',
        variables: {
          addon_group_id: id
        },
        query: `
          query addon_group_addons($addon_group_id: ID!) {
            addon_group(addon_group_id: $addon_group_id) {
              addon_group_addons {
                addons {
                  id
                  name
                  price
                }
              }
            }
          }
        `
      })
      .send()
      .then(response => response.body.data.addon_group.addon_group_addons.map(a => a.addons[0]));
  }));
});
