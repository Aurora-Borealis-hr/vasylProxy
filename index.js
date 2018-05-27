const Koa = require('koa');
const Router = require('koa-router')
var request = require('request-promise');

const app = new Koa()
const router = new Router()

router.get('/', (ctx) => {
  let response = request({
    method: 'GET',
    url: 'http://127.0.0.1:3000/',
  })
  ctx.body = response;
});


app
    .use(router.routes())
    .use(router.allowedMethods());


module.exports = app.listen(3131);


