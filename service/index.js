const ResponseModel = require('../response/model');
const { createUuid } = require('../helper/index');
const loggerModel = require('../model/logger');

exports.index = async (ctx, next) => {
    ctx.body = 'error monitor platform';
    await next();
};

exports.saveEvent = async (ctx, next) => {
    let body = ctx.request.body || {};
    body = { ...body, timestamp: Date.now(), id: createUuid() };

    await loggerModel.log(body);
    ctx.body = new ResponseModel({ msg: '数据保存成功' });
}

exports.getEvents = async (ctx, next) => {
    const list = await loggerModel.getEvents();
    ctx.body = new ResponseModel({
        result: list
    })
}

exports.getEventDetailCheck = async (ctx, next) => {
    const { createTime } = ctx.request.body;
    if (!createTime) {
        ctx.body = new ResponseModel({
            msg: `param createTime is absent, please check!`,
            success: false
        })
        ctx.status = 400;
        return;
        // ctx.throw(400, `param createTime is absent, please check!`)
    }
    await next();
}

exports.getEventDetail = async (ctx, next) => {
    const { createTime } = ctx.request.body;
    const result = await loggerModel.getEventDetail(createTime);
    try {
        ctx.body = new ResponseModel({
            result: JSON.parse(result)
        });
    } catch (error) {
        ctx.throw(500, error);
    }
}

exports.saveRecord = async (ctx, next) => {

}
