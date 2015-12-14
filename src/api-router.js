const koa = require('koa');
const router = require('koa-router');

const vfs = router();

vfs.post('/', function *() {
  this.body = 'create vfs';
});

vfs.get('/', function *() {
  this.body = 'list vfs';
});

vfs.get('/:id', function *() {
  this.body = 'view vfs';
});

//api.use(function *(next) {
//  let result = this.request.path.match(/^\/([a-z\-]+)\/([0-9]+)\/(.+)$/);
//  if (result !== null) {
//    [, this.action, this.id, this.path] = result;
//    yield next;
//  }
//});
//
//api.use(function *(next) {
//  console.log(this.action, this.id, this.path);
//});

export const api = router();
api.use('/vfs', vfs.routes());
