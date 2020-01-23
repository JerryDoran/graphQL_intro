const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js')

const app = express();

app.use(
  '/graphql',
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
);

PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
