const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'menuItem',
        variables: {
          menu_item_id: id
        },
        query: `
          query menuItem($menu_item_id: ID!) {
            menu_item(menu_item_id: $menu_item_id) {
              id
              price
            }
          }
        `
      })
      .send()
      .then(response => response.body.data.menu_item);
  }));
});

exports.item = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    console.log('menu_item')
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'menuItem_items',
        variables: {
          menu_item_id: id
        },
        query: `
          query menuItem_items($menu_item_id: ID!) {
            menu_item(menu_item_id: $menu_item_id) {
              item {
                id
                name
              }
            }
          }
        `
      })
      .send()
      .then(response => response.body.data.menu_item.item);
  }));
});

exports.printGroup = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'menuItem_print_group',
        variables: {
          menu_item_id: id
        },
        query: `
          query menuItem_print_group($menu_item_id: ID!) {
            menu_item(menu_item_id: $menu_item_id) {
              print_group {
                id
                name
              }
            }
          }
        `
      })
      .send()
      .then(response => response.body.data.menu_item.print_group);
  }));
});
