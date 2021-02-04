const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const userList = [
  {
    id: "1",
    username: 'Bob',
    location: '3'
  }, {
    id: "2",
    username: 'Alice',
    location: '1'  
  }, {
    id: "3",
    username: 'Eric',
    location: '2' 
  }
];

const locationList = [
  {
    id: '1',
    city: 'New York',
    state: 'NY' 

  }, {
    id: '2',
    city: 'Chicago',
    state: 'IL'   
  }, {
    id: '3',
    city: 'San Francisco',
    state: 'CA'
  }
];

const typeDefs = gql`
  type Query {
    getUsers: [UserObject]
    getUserById(id: ID): UserObject
  }

  type LocationObject {
    id: ID
    city: String
    state: String
  }

  type UserObject {
    id: ID
    username: String
    location: LocationObject
  }
`;

const resolvers = {
  Query: {
    getUserById: (parent, args) => {
      return userList.find((user) => user.id === args.id);
    },
    getUsers: (parent, args) => {
      return userList;
    },
  },
  UserObject: {
    location: (user) => {
      return locationList.find((location) => location.id === user.location);
    },
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});
const app = express();
server.applyMiddleware({ app, path: '/' });
app.listen({ port: 4000 }, () =>
  console.log(`${new Date(Date.now()).toISOString()} Listening at http://localhost:4000`)
);
