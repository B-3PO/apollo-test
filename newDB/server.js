const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress } = require('apollo-server-express');
const { graphiqlExpress } = require('graphql-server-express');
const schema = require('./lib/schema');

const port = 8080;
let app = express();

app.use(bodyParser.json());
app.use('/graphql', graphqlExpress({
  schema: schema
}));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));
app.listen(port, () => {
  console.log(`running on port: ${port}`);
});
