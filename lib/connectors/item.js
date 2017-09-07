const requester = require('requester');
const DataLoader = require('dataloader');
const modifierGroup = require('./modifierGroup');
const ReportingGroup = require('./reportingGroup');
const Category = require('./category');

exports.root = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'items',
      variables: {
        item_ids: keys
      },
      query: `
        query items($item_ids: [ID!]) {
          items(item_ids: $item_ids) {
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
      `
    })
    .send()
    .then(response => response.body.data.items);
});

exports.category = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'item_category',
      variables: {
        item_ids: keys
      },
      query: `
        query item_category($item_ids: [ID!]) {
          items(item_ids: $item_ids) {
            category {
              id
              name
              description
              alcohol
              limit
              position
            }
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.items.map(i => i.category));
});

exports.modifierGroup = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'item_addon_group_id',
      variables: {
        item_ids: keys
      },
      query: `
        query item_addon_group_id($item_ids: [ID!]) {
          items(item_ids: $item_ids) {
            master_variant {
              addon_groups_items {
                addon_group_id
              }
            }
          }
        }
      `
    })
    .send()
    .then(response => Promise.all(response.body.data.items.map(i => i.master_variant.addon_groups_items.map(agi => modifierGroup.root.load(agi.addon_group_id)))));
});

exports.taxGroup = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'item_tax_group',
      variables: {
        item_ids: keys
      },
      query: `
        query item_tax_group($item_ids: [ID!]) {
          items(item_ids: $item_ids) {
            tax_group {
              id
              name
              description
            }
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.items.map(i => i.tax_group));
});

exports.reportingGroup = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'item_reporting_group',
      variables: {
        item_ids: keys
      },
      query: `
        query item_reporting_group($item_ids: [ID!]) {
          items(item_ids: $item_ids) {
            reporting_group_id
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.items.map(i => i.reporting_group));
});
