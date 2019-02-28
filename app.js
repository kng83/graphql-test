const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import * as first from './files/first.gql';


// Construct a schema, using GraphQL schema language
// const typeDefs = gql(`
//   type Query {
//     hello: String
//   }
// `);

const typeDefs = gql(first);

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);