const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'venues',
      variables: {
        venue_ids: keys
      },
      query: `
        query venues($venue_ids: [ID!]) {
          venues(venue_ids: $venue_ids) {
            id
            name
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.venues);
});

exports.locations = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'venues',
      variables: {
        venue_ids: keys
      },
      query: `
        query venues($venue_ids: [ID!]) {
          venues(venue_ids: $venue_ids) {
            locations {
              id
              name
            }
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.venues.map(v => v.locations));
});

exports.menus = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'venues',
      variables: {
        venue_ids: keys
      },
      query: `
        query venues($venue_ids: [ID!]) {
          venues(venue_ids: $venue_ids) {
            menus {
              id
              name
              tax_inclusive
            }
          }
        }
      `
    })
    .send()
    .then(response => response.body.data.venues.map(v => v.menus));
});

exports.items = new DataLoader(keys => {
  return requester
    .service('menus-graphql')
    .post('/')
    .data({
      operationName: 'venues',
      variables: {
        venue_ids: keys
      },
      query: `
        query venues($venue_ids: [ID!]) {
          venues(venue_ids: $venue_ids) {
            items {
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
    .then(response => response.body.data.venues.map(v => v.items));
});
