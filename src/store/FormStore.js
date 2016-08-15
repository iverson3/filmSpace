/**
 * Created by stefan.wang on 8/12/2016.
 */
import {Store, msg, Validator} from 'iflux'
import FormRecord from "../record/FormRecord"

var form = new FormRecord();

var FormStore = module.exports = Store(
    form
);

/////////////validator///////////////
var validator = Validator(FormStore, {
    username: {
        required: true,
        maxLength: 10,
        message: {
            required: 'username is required',
            maxLength: 'username max length is 10'
        }
    },
    password: {
        required: true,
        message: {
            required: 'password is required'
        }
    }
});


//在调用isValid之前可以动态的添加自定义规则，for example
//equal is rule name, callback is rule method.
validator.rule('equal', function(param, val) {
    return FormStore.data().get(param) === val;
})


////////////////form field change///////////
msg.on('fieldChange', function(field) {
    FormStore.cursor().set(field.name, field.value);
});


////////////////blur validator//////////////
msg.on('validate', function(val) {

    FormStore.cursor().set('username', val);
    validator.isValid('username');
});


/////////////login/////////////////
msg.on('login', function() {
    var result = validator.isValid();
    if (!result) {
        return false;
    } else {
        console.log('yes! submit success');
    }
});


/**
 * reset form data
 */
msg.on('reset', function() {
    FormStore.cursor().clear();
});
