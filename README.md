# simple-node-graphql server

A reference implementation for a graphQL server that demonstrates REST GET with nested resources.

## Sample queries with results

### Get list of users

```
{
  getUsers {
    id,
    username,
    location {
      city,
      state
    }
  }
}
```

```
{
  "data": {
    "getUsers": [
      {
        "id": "1",
        "username": "Bob",
        "location": {
          "city": "San Francisco",
          "state": "CA"
        }
      },
      {
        "id": "2",
        "username": "Alice",
        "location": {
          "city": "New York",
          "state": "NY"
        }
      },
      {
        "id": "3",
        "username": "Eric",
        "location": {
          "city": "Chicago",
          "state": "IL"
        }
      }
    ]
  }
}
```

### Get user by id

```
{ getUserById(id:2) { username, location { state } } }
```

```
{
  "data": {
    "getUserById": {
      "username": "Alice",
      "location": {
        "state": "NY"
      }
    }
  }
}
```
