var client = require('./elastic-client')


client.indices.delete({
  index: 'web-requests',
  ignore: [404]
}).then(function (body) {
  // since we told the client to ignore 404 errors, the
  // promise is resolved even if the index does not exist
  console.log('index was deleted or never existed');
}, function (error) {
  // oh no!
});