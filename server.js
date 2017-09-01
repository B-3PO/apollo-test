const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress } = require('apollo-server-express');
const { graphiqlExpress } = require('graphql-server-express');
const schema = require('./lib/schema');
const requester = require('requester');

const port = 8080;
let app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  // requester.config.token = req.headers['X-SESSION-TOKEN'];
  requester.config.token = '1de879a037476a845ea881adf0fba37b';
  next();
})
app.use('/graphql', graphqlExpress({
  schema: schema
}));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));
app.listen(port, () => {
  console.log(`running on port: ${port}`);
});
