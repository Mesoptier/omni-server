import koa from 'koa';
import mount from 'koa-mount';

import { api } from './api-router';

const app = koa();

app.use(mount('/api', api.routes()));

app.listen(3000);
