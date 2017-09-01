const requester = require('requester');
const DataLoader = require('dataloader');
const modifierGroup = require('./modifierGroup');
const ReportingGroup = require('./reportingGroup');
const Category = require('./category');

exports.root = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'item',
        variables: {
          item_id: id
        },
        query: `
          query item($item_id: ID!) {
            item(item_id: $item_id) {
              id
              name
            }
          }
        `
      })
      .send()
      .then(response => response.body.data.item);
  }));
});

exports.category = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'item_category',
        variables: {
          item_id: id
        },
        query: `
          query item_category($item_id: ID!) {
            item(item_id: $item_id) {
              category_id
            }
          }
        `
      })
      .send()
      .then(response => Category.root.load(response.body.data.item.category_id));
  }));
});

exports.modifierGroup = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'item_addon_group_id',
        variables: {
          item_id: id
        },
        query: `
          query item_addon_group_id($item_id: ID!) {
            item(item_id: $item_id) {
              id
              name
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
      .then(response => Promise.all(response.body.data.item.master_variant.addon_groups_items.map(item => modifierGroup.root.load(item.addon_group_id))));
  }));
});

exports.reportingGroup = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'item_reporting_group',
        variables: {
          item_id: id
        },
        query: `
          query item_reporting_group($item_id: ID!) {
            item(item_id: $item_id) {
              reporting_group_id
            }
          }
        `
      })
      .send()
      .then(response => ReportingGroup.root.load(response.body.data.item.reporting_group_id));
  }));
});
