const fs = require('fs');
const path = require('path');
const { createCurrentTimeByRecord, createFileNameByDate } = require('../helper/index');

const loggerPath = path.resolve(__dirname, '../loggerInfo');
const logResolve = pathName => path.resolve(__dirname, `../loggerInfo/${String(pathName)}`);
const logNamePath = pathName => `${logResolve(pathName)}`;

exports.createLoggerDictionary = (logPath = loggerPath) => {
    if (!fs.existsSync(logPath)) {
        fs.mkdirSync(logPath);
    }
}

exports.log = async (info) => {
    const { createTime } = info;
    const filePath = logNamePath(createTime);
    const data = JSON.stringify(info);

    await new Promise((resolve, reject) => {
        fs.appendFile(filePath, data, (err) => {
            if (err) reject(err);
            console.log('成功');
            resolve();
        })
    })
}


exports.getEventDetail = async (createTime) => {
    return fs.readFileSync(logNamePath(createTime));
}

exports.getEvents = async () => {
    const list = fs.readdirSync(loggerPath);
    return list.map(i => ({
        createTime: i,
        name: new Date(Number(i)).format('YYYY-MM-DD HH:mm:ss')
    }));
}