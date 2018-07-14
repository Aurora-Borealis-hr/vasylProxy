var client = require('./elastic-client')


client.index({  
  index: 'web-requests',
  type: 'doc',
  body: {}
},function(err,resp,status) {
    console.log(resp);
});
