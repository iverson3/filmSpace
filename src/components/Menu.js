/**
 * Created by stefan.wang on 7/28/2016.
 */
import React from "react";
import MenuLink from './MenuLink'
import $ from 'jquery'

const SERVER_URL = "http://yinhang.hustwenhua.net/wangfan/api/filmSpace_api/";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: []
        };
        let that = this;
        // 异步请求菜单列表数据
        $.ajax({
            type: 'get',
            url: SERVER_URL + 'getMenus.php',
            dataType: 'jsonp',
            jsonp: "jsoncallback",
            success: function (data) {
                that.setState({
                    menus: data
                });
            },
            error: function () {
                console.log('get menus error');
            }
        });
    }

    // 导航点击事件
    menuClick(title) {
        this.props.menuClick(title);
    }

    render() {
        var menus = this.state.menus.map(function (res, index) {
            return (
                <li className="menu-item" key={index} no={res.id}><p className="menu-item-p" onClick={this.menuClick.bind(this, res.title)}>
                    <MenuLink to={res.url} title={res.title}>{res.title}</MenuLink></p></li>
            );
        }.bind(this));
        return (
                <div className={this.props.classNameProp}>
                    <ul>
                        {menus}
                    </ul>
                </div>
        );
    }
}