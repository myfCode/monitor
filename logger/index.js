const logger = require('./utils.js');

exports.createLogInfoDictionary = async (ctx, next) => {
    logger.createLoggerDictionary();
    next();
}

exports.clear = async (ctx, next) => {
    ctx.loggerInfo = null;
}

exports.log = async (ctx, next) => {
    logger.log(ctx.loggerInfo, next);
}