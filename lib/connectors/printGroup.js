const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'print_group',
        variables: {
          print_group_id: id
        },
        query: `
          query print_group($print_group_id: ID!) {
            item(print_group_id: $print_group_id) {
              id
              name
            }
          }
        `
      })
      .send()
      .then(response => response.body.data.print_group);
  }));
});
