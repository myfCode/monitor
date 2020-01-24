const Koa = require('koa');
const indexRouter = require('./router/index');
const logger = require('./logger/index');

const app = new Koa();
const port = process.env.port || '3800';

app.use(logger.createLogInfoDictionary);
app.use(indexRouter.routes());
app.use(indexRouter.allowedMethods());
app.use(logger.log);
app.use(logger.clear);

app.on('error', (err, ctx) => {
    console.log('********************');
    console.log(err);
    console.log('********************');
})

app.listen(port, () => {
    console.log(`server is listen on port: ${port}`);
})