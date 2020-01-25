const logger = require('./logger');

exports.createLogInfoDictionary = async (ctx, next) => {
    logger.createLoggerDictionary();
    await next();
}
