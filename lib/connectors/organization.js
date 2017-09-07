const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'organization',
        variables: {
          organization_id: id
        },
        query: `
          query organization($organization_id: ID!) {
            organization(organization_id: $organization_id) {
              id
              name
            }
          }
        `
      })
      .send()
      .then(response => response.body.data.organization);
    }));
});

exports.venues = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'organization',
        variables: {
          organization_id: keys
        },
        query: `
          query organization($organization_id: ID!) {
            organization(organization_id: $organization_id) {
              venues {
                id
                name
              }
            }
          }
        `
      })
      .send()
      .then(response => response.body.data.organization.venues);
    }));
});

exports.menus = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'organization',
        variables: {
          organization_id: keys
        },
        query: `
          query organization($organization_id: ID!) {
            organization(organization_id: $organization_id) {
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
      .then(response => response.body.data.organization.menus);
    }));
});

exports.items = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('menus-graphql')
      .post('/')
      .data({
        operationName: 'organization',
        variables: {
          organization_id: keys
        },
        query: `
          query organization($organization_id: ID!) {
            organization(organization_id: $organization_id) {
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
      .then(response => response.body.data.organization.items);
    }));
});
