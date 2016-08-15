/**
 * Created by stefan.wang on 8/12/2016.
 */
var Immutable = require('immutable');

/**
 * 封装form类型
 */
var FormRecord = Immutable.Record({
    username: '',
    password: '',
    fieldErrors: Immutable.Map({})
});

module.exports = FormRecord;