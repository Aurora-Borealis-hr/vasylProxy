var client = require('./elastic')


client.index({  
  index: 'web-requests',
  type: '_doc',
  body: {
  }
},function(err,resp,status) {
    console.log(resp);
});


client.indices.putMapping({
  index: "web-requests",
  type: "_doc",
  body: {
      properties: {
          date: { type: "date" },
      }
  }
})