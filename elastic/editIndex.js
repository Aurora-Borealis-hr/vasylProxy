var client = require('./elastic-client')


client.indices.putMapping({
  index: "web-requests",
  type: "doc",
  body: {
      properties: {
          "date": { "type": "date" },
      }
  }
})
