/**
 * Created by stefan.wang on 7/28/2016.
 */
import React from "react";
import $ from 'jquery'
import ComingFilm from './ComingFilm'

export default class Coming extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
        let that = this;
        // 异步请求菜单列表数据
        $.ajax({
            type: 'get',
            url : 'http://localhost/stefan/serverforreact/filmSpace/getFilms.php?type=coming',
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
                <li className="" key={index}><ComingFilm no={res.id} name={res.name} picurl={res.picurl} desc={res.desc} date={res.date} /></li>
            );
        });
        return (<div className="filmlist-container">
            <ul>
                {filmlist}
            </ul>
        </div>);
    }
}