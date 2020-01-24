const fs = require('fs');
const path = require('path');

const createFileNameByDate = (date = new Date()) => `${date.getFullYear()}-${(+date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate()}`;
const createCurrentTimeByRecord = (date = new Date()) => `${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toString().padStart(2, '0')}`;

const loggerPath = path.resolve(__dirname, '../logInfo');

exports.createLoggerDictionary = (logPath = loggerPath) => {
    if (!fs.existsSync(logPath)) {
        fs.mkdirSync(logPath);
    }
}

exports.log = (info, next) => {
    const date = new Date();
    const time1 = createFileNameByDate(date);
    const time2 = createCurrentTimeByRecord(date);

    const filePath = path.resolve(loggerPath, time1) + '.log';
    const data = `${time1} ${time2}\n${JSON.stringify(info)}\n\n`;

    fs.appendFile(filePath, data, (err) => {
        if (err) console.error(err);
        console.log('成功');
        next();
    })

}
