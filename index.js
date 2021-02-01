const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const users = [
  {
    id: '1',
    username: 'Bob',
    location: 'CA'
  }, {
    id: '2',
    username: 'Alice',
    location: 'NY'  
  }, {
    id: '3',
    username: 'Eric',
    location: 'MI'   
  }
];

const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID, username: String): User
  }

  type User {
    id: ID
    username: String
    location: String
  }
`;

const resolvers = {
  Query: {
    user: (_, args) => {
      if (args.id) return users.find((user) => user.id === args.id);
      if (args.username) return users.find((user) => user.username === args.username);
      return null;
    },
    users: () => {
      return users;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () =>
  console.log(`Listening at http://localhost:4000${server.graphqlPath}`)
);
