const request = require('supertest');
const app = require('./index')

const getVideo = (done) => {
  request(app)
    .get(`/videos/${Math.ceil(Math.random() * 2000000 ) }`)
    .set('Cookie', [`userId=${Math.ceil(Math.random() * 2000000 ) }`])
    .expect(200, done);
}


setInterval(function(){
  getVideo(() => {});
}, 1000)
