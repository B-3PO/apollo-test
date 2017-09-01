const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'menu',
        variables: {
          menu_id: id
        },
        query: `
          query menu($menu_id: ID!) {
            menu(menu_id: $menu_id) {
              id
              name
            }
          }
        `
      })
      .send()
      .then(response => response.body.data.menu);
  }));
});

exports.update = menu => {
  return requester
    .service('mono')
    .put('/api/admin/menus/' + menu.id + '.json')
    .data({ menu: {
      id: menu.id,
      name: menu.name,
      tax_inclusive: menu.tax_inclusive,
      location_ids: menu.location_ids
    }})
    .send()
    .then(response => {
      // NOTE if you dont mamnually clear the cache in dataloader it will return the old object
      exports.root.clear(response.body.menu.id);
      return {
        id: response.body.menu.id,
        name: response.body.menu.name,
        tax_inclusive: response.body.menu.tax_inclusive
      };
    });
};

exports.create = menu => {
  return requester
    .service('mono')
    .post('/api/admin/menus.json')
    .data({ menu: {
      name: menu.name,
      tax_inclusive: menu.tax_inclusive,
      location_ids: menu.location_ids
    }})
    .send()
    .then(response => {
      return {
        id: response.body.menu.id,
        name: response.body.menu.name,
        tax_inclusive: response.body.menu.tax_inclusive
      };
    });
};

exports.menuItems = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'menu_menuItems',
        variables: {
          menu_id: id
        },
        query: `
          query menu_menuItems($menu_id: ID!) {
            menu(menu_id: $menu_id) {
              menu_items {
                id
                price
              }
            }
          }
        `
      })
      .send()
      .then(response => response.body.data.menu.menu_items);
  }));
});
