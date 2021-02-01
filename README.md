# simple-node-graphql server

A reference implementation for a graphQL server.

## Sample curl commands to query server

### Username and location of user by id

```
curl -X POST -H "Content-Type: application/json" --data '{ "query": "{ user(id:1) { username, location } }" }' http://localhost:4000/graphql
```

```
{"data":{"user":{"username":"Bob","location":"CA"}}}
```

### List of all users including id, username and location

```
curl -X POST -H "Content-Type: application/json" --data '{ "query": "{ users { id,username, location } }" }' http://localhost:4000/graphql
```

```
{"data":{"users":[{"id":"1","username":"Bob","location":"CA"},{"id":"2","username":"Alice","location":"NY"},{"id":"3","username":"Eric","location":"MI"}]}}
```
### Find user location by username

```
curl -X POST -H "Content-Type: application/json" --data '{ "query": "{ user(username:\"Bob\") { location } }" }' http://localhost:4000/graphql
```

```
{"data":{"user":{"location":"CA"}}}
```
