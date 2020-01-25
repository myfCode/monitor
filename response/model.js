class Model {
    constructor({result, msg, success} = {}){
        this.result = result || null;
        this.success = success !== undefined ? success : true;
        this.msg = msg || `接口调用${this.success ? '成功' : '失败'}`;
    }
}

module.exports = Model;