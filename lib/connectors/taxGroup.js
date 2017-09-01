const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'tax_group',
        variables: {
          tax_group_id: id
        },
        query: `
          query print_group($tax_group_id: ID!) {
            item(tax_group_id: $tax_group_id) {
              id
              name
            }
          }
        `
      })
      .send()
      .then(response => response.body.data.tax_group);
  }));
});
