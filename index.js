const Koa = require('koa');
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', (ctx) => {
  ctx.body = 'Hello, from GET';
});


app
    .use(router.routes())
    .use(router.allowedMethods());


module.exports = app.listen(3131);


