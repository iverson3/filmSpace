/**
 * Created by stefan.wang on 7/28/2016.
 */
import React from "react";
import $ from 'jquery'
import OnlineFilm from './OnlineFilm'

const SERVER_URL = "http://yinhang.hustwenhua.net/wangfan/api/filmSpace_api/";

export default class Online extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
        let that = this;
        // 异步请求菜单列表数据
        $.ajax({
            type: 'get',
            url : SERVER_URL + 'getFilms.php?type=online',
            dataType: 'jsonp',
            jsonp: "jsoncallback",
            success: function(data) {
                that.setState({
                    data: data
                })
            },
            error: function() {
                console.log('get film list error');
            }
        });
    }
    render() {
        var filmlist = this.state.data.map(function (res, index) {
            return (
                <li className="" key={index}><OnlineFilm no={res.id} name={res.name} picurl={res.picurl} desc={res.desc} score={res.score} cinemanum={res.cinemanum} salenum={res.salenum} /></li>
            );
        });
        return (<div className="filmlist-container">
            <ul>
                {filmlist}
            </ul>
        </div>);
    }
}