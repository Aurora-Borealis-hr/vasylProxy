var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'https://elastic:FtZUe4hqPQWgL35sgQ3O3aan@42275a98b2de4883bf7f5d75b5a88f20.us-east-1.aws.found.io:9243',
  log: 'trace'
});


module.exports = client;
