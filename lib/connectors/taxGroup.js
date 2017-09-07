const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'tax_groups',
      variables: {
        tax_group_ids: keys
      },
      query: `
        query tax_groups($tax_group_ids: [ID!]) {
          tax_groups(tax_group_ids: $tax_group_ids) {
            id
            name
            description
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.tax_groups);
});
