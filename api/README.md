# Twitch Stream Clone - API

The Mock API for a streaming application that mimics Twitch.

## JSON-Server

This mock API uses [JSON server](https://www.npmjs.com/package/json-server).

## db.json

- If you make POST, PUT, PATCH or DELETE requests, changes will be automatically and safely saved to db.json using lowdb.
- Your request body JSON should be object enclosed, just like the GET output. (for example {"name": "Foobar"})
- Id values are not mutable. Any id value in the body of your PUT or PATCH request will be ignored. Only a value set in a POST request will be respected, but only if not already taken.
- A POST, PUT or PATCH request should include a Content-Type: application/json header to use the JSON in the request body. Otherwise it will result in a 200 OK but without changes being made to the data.

## db.json struture

```
{
  "streams": [{ "id": 1, "title": "lorem", "description": "ipsum" }]
}
```

## Starting the app

In the `api/` directory, run `npm start`. The api will be listening on `localhost:3001`.

## Routes

### Plural routes

- GET /streams
- GET /streams/1
- POST /streams
- PUT /streams/1
- PATCH /streams/1
- DELETE /streams/1

### Singular routes

- GET /streams
- POST /streams
- PUT /streams
- PATCH /streams
