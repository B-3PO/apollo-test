const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'categories',
      variables: {
        category_ids: keys
      },
      query: `
        query categories($category_ids: [ID!]) {
          categories(category_ids: $category_ids) {
            id
            name
            description
            alcohol
            limit
            position
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.categories);
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
