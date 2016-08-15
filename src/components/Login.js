/**
 * Created by stefan.wang on 8/12/2016.
 */
import React from 'react'
import Form from './Form'
import FormField from './FormField'
import ButtonField from './ButtonField'

import {msg} from 'iflux';
import iflux from 'iflux';
var StoreMixin = iflux.mixins.StoreMixin;

import FormStore from '../store/FormStore';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.mixins = [StoreMixin(FormStore)];
    }

    /**
     * field change
     */
    handleChange(e) {
        var name = e.target.name;
        var value = e.target.value;
        console.log('change field:=>', name, value);
        msg.emit('fieldChange', {name: name, value: value});
    }

    /**
     * 校验某一个字段
     */
    validateUserName(e) {
        var value = e.target.value;
        msg.emit('validate', value);
    }

    /**
     * login(form submit)
     */
    handleLogin(e) {
        e.preventDefault();
        msg.emit('login');
    }

    /**
     * reset
     */
    handleReset() {
        msg.emit('reset');
    }

    render() {
        var store = FormStore.data();
        var userNameError = store.getIn(['fieldErrors', 'username']);
        var passwordError = store.getIn(['fieldErrors', 'password']);

        return (
            <div>
                <Form title="user login">
                    <FormField required={true} error={userNameError} label="username:">
                        <input type="text" name="username" value={store.get('username')} onChange={this._handleChange} onBlur={this._validateUserName}/>
                    </FormField>

                    <FormField required={true} error={passwordError} label="password:">
                        <input type="password" name="password" value={store.get('password')} onChange={this._handleChange}/>
                    </FormField>

                    <ButtonField>
                        <input type="submit" value="login" onClick={this._handleLogin} />
                        <input type="button" value="reset" onClick={this._handleReset} />
                    </ButtonField>
                </Form>
            </div>
        );
    }
}