var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();
const request = require('supertest');
const app = require('../index')
  
 
describe('GET /', function() {
  it('respond with 200 status code', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});


after('close server connection after tests', function() {
  app.close()
});
