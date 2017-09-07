const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'print_groups',
      variables: {
        print_group_ids: keys
      },
      query: `
        query print_groups($print_group_ids: [ID!]) {
          print_groups(print_group_ids: $print_group_ids) {
            id
            name
            printer_name
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.print_groups);
});
