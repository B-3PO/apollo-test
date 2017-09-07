const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'menuItems',
      variables: {
        menu_item_ids: keys
      },
      query: `
        query menuItems($menu_item_ids: [ID!]) {
          menu_items(menu_item_ids: $menu_item_ids) {
            id
            price
            state
            print_group_id
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.menu_items);
});

exports.item = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'menuItem_items',
      variables: {
        menu_item_ids: keys
      },
      query: `
        query menuItem_items($menu_item_ids: [ID!]) {
          menu_items(menu_item_ids: $menu_item_ids) {
            item {
              id
              name
              alcohol
              position
              tare_weight
              by_weight
              base_price
              category_id
              description
              sku_prefix
              tax_group_id
              reporting_group_id
            }
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.menu_items.map(mi => mi.item));
});

exports.printGroup = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'menuItem_print_group',
      variables: {
        menu_item_ids: keys
      },
      query: `
        query menuItem_print_group($menu_item_ids: [ID!]) {
          menu_items(menu_item_ids: $menu_item_ids) {
            print_group {
              id
              name
              printer_name
            }
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.menu_items.map(mi => mi.print_group));
});
