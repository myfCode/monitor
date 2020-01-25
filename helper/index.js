const uuidv1 = require('uuid/v1');

exports.createUuid = () => uuidv1().replace(/-/g, '');
