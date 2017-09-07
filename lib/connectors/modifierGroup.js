const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'addon_groups',
      variables: {
        addon_group_ids: keys
      },
      query: `
        query addon_groups($addon_group_ids: [ID!]) {
          addon_groups(addon_group_ids: $addon_group_ids) {
            id
            name
            group_type
            limit_selection_to
            require_selection
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.addon_groups);
});

exports.modifierOptions = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'addon_group_addons',
      variables: {
        addon_group_ids: keys
      },
      query: `
        query addon_group_addons($addon_group_ids: [ID!]) {
          addon_groups(addon_group_ids: $addon_group_ids) {
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
    .then(response => response.body.data.addon_groups.map(ag => ag.addon_group_addons.map(a => a.addons[0])));
});
