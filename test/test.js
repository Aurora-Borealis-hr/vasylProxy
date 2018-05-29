var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();
const request = require('supertest');
const app = require('../index');
const sinon = require('sinon');


describe('when stubbed', () => {
  const request = require('request');
  before(() => {
    this.get = sinon.stub(request, 'get');
    this.responseObject = {
      statusCode: 200,
      headers: {
        'content-type': 'application/json'
      }
    };
    this.responseBody = {
      status: 'success',
      data: ['test'
      ]
    };
  });

  afterEach(() => {
    request.get.restore();
  });
  describe('GET /', () => {

    it('should get /', (done) => {
      this.get.yields(null, this.responseObject, JSON.stringify(this.responseBody));
      request.get(`/`, (err, res, body) => {
        res.statusCode.should.eql(200);
        res.headers['content-type'].should.contain('application/json');
        body = JSON.parse(body);
        body.status.should.eql('success');
        body.data.length.should.eql(1);
        done();
      });
    });
  });
});

after('close server connection after tests', function() {
  app.close()
});