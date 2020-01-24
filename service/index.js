exports.index = async (ctx, next) => {
    const query = ctx.query;
    ctx.loggerInfo = { ...query, index: 'index' };
    ctx.body = 'index';
    next();
};

exports.record = async (ctx, next) => {
    const query = ctx.query;
    ctx.loggerInfo = { ...query, record: 'record' };
    if(ctx.method === 'GET'){
        ctx.body = 'record';
    }
    next()
}