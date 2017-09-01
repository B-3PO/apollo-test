const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'category',
        variables: {
          category_id: id
        },
        query: `
          query category($category_id: ID!) {
            category(category_id: $category_id) {
              id
              name
            }
          }
        `
      })
      .send()
      .then(response => response.body.data.category);
  }));
});
