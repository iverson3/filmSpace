/**
 * Created by stefan.wang on 7/29/2016.
 */
import React from "react";
import IndexFilm from './IndexFilm'
import $ from 'jquery'

const SERVER_URL = "http://yinhang.hustwenhua.net/wangfan/api/filmSpace_api/";

export default class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filmlist: []
        };
        let that = this;
        $.ajax({
            type: 'get',
            url : SERVER_URL + 'getFilms.php',
            dataType: 'jsonp',
            jsonp: "jsoncallback",
            success: function(data) {
                console.log(data)
                that.setState({
                    filmlist: data
                })
            },
            error: function() {
                console.log('get films error');
            }
        });
    }
    render() {
        var filmlist = this.state.filmlist.map(function (res, index) {
            return (
                <li className="index-film-item" key={index}><IndexFilm no={res.id} name={res.name} picurl={res.picurl} score={res.score} cinemanum={res.cinemanum} salenum={res.salenum} /></li>
            );
        });
        return (<div className="index">
            <ul>
                {filmlist}
            </ul>
        </div>);
    }
}