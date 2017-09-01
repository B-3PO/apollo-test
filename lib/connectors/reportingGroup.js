const requester = require('requester');
const DataLoader = require('dataloader');

exports.root = new DataLoader(keys => {
  return Promise.all(keys.map(id => {
    return requester
      .service('mono')
      .get('/api/admin/reporting_groups/'+id)
      .data({
        operationName: 'Reporting_group',
        variables: {
          Reporting_group_id: id
        },
        query: `
          query Reporting_group($Reporting_group_id: ID!) {
            item(Reporting_group_id: $Reporting_group_id) {
              id
              name
            }
          }
        `
      })
      .send()
      .then(response => response.body.reporting_group);
  }));
});
