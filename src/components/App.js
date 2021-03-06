/**
 * Created by stefan.wang on 7/28/2016.
 */

import React from 'react'
import { createPubSub, PubSubProvider }  from 'react-pubsub'
import Header from './Header'
import Menu from './Menu'


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHide: true,
            title: '首页'
        };
    }
    cutMenu(state) {
        if (typeof state === 'undefined') {
            this.setState({
                isHide: !this.state.isHide
            });
        } else {
            if (state !== this.state.isHide) {
                this.setState({
                    isHide: state
                });
            }
        }
    }

    // 用EventEmitter，通过on注册事件，emit发射事件
    // 对于没有 父-子 关系的组件间的通信，你可以设置你自己的全局事件系统。
    // 在 componentDidMount() 里订阅事件，在 componentWillUnmount() 里退订，然后在事件回调里调用 setState()
    componentDidMount() {
        // this.pubsub_token = PubSubProvider.subscribe('changeHeadTitle', function(topic, title){
        //     this.setState({
        //         title: title
        //     });
        // }.bind(this));
    }
    componentWillUnmount() {
        // PubSubProvider.unsubscribe(this.pubsub_token);
    }

    menuClick(title) {
        this.setState({
            title: title
        });
    }
    render() {
        let classNameProp = "";
        if (this.state.isHide) {
            classNameProp = "menu-hide";
        } else {
            classNameProp = "menu";
        }
        return (
            <div className="app">
                <Header title={this.state.title} cutMenu={this.cutMenu.bind(this)} />
                <Menu classNameProp={classNameProp} menuClick={this.menuClick.bind(this)} />
                {this.props.children}
            </div>
        );
    }
}