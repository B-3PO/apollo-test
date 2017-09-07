const requester = require('requester');
const DataLoader = require('dataloader');
const Location = require('./location');

exports.root = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'menus',
      variables: {
        menu_ids: keys
      },
      query: `
        query menus($menu_ids: [ID!]) {
          menus(menu_ids: $menu_ids) {
            id
            name
            tax_inclusive
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.menus);
});

exports.menuItems = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'menu_menuItems',
      variables: {
        menu_ids: keys
      },
      query: `
        query menu_menuItems($menu_ids: [ID!]) {
          menus(menu_ids: $menu_ids) {
            menu_items {
              id
              price
              state
              print_group_id
            }
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.menus.map(m => m.menu_items));
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
      Location.menus.clear(response.body.menu.id);
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
