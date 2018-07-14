const request = require('supertest');
const app = require('./index')

const getVideo = (done) => {
  request(app)
    .get(`/videos/${Math.ceil(Math.random() * 200000 ) }`)
    .set('Cookie', [`userId=${ Math.floor(Math.random() * (20000 - 1440 + 1)) }`])
    .expect(200, done);
}
return 

setInterval(function(){
  getVideo(() => {});
}, 1000)
