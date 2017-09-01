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

exports.update = category => {
  return requester
    .service('mono')
    .put('/api/admin/categories/' + category.id + '.json')
    .data({ category: category })
    .send()
    .then(response => {
      exports.root.clear(response.body.category.id);
      return {
        id: response.body.category.id,
        name: response.body.category.name
      };
    });
};

exports.create = category => {
  return requester
    .service('mono')
    .put('/api/admin/categories.json')
    .data({ category: category })
    .send()
    .then(response => {
      return {
        id: response.body.category.id,
        name: response.body.category.name
      };
    });
};
