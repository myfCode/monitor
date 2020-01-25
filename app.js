const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const indexRouter = require('./router/index');
const middleWares = require('./model/middleWares');
require('./helper/date');

const app = new Koa();
const port = process.env.port || '3800';

app.use(middleWares.createLogInfoDictionary);
app.use(bodyParser());
app.use(indexRouter.routes());
app.use(indexRouter.allowedMethods());

app.on('error', (err, ctx) => {
    console.log('********************');
    console.log(err);
    console.log('********************');
})

app.listen(port, () => {
    console.log(`server is listen on port: ${port}`);
})