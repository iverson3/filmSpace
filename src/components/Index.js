/**
 * Created by stefan.wang on 7/29/2016.
 */
import React from "react";
import IndexFilm from './IndexFilm'
import $ from 'jquery'
import SimpleSlider from './SimpleSlider'

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
        // 轮播图片数据
        let jsonStr = '[{"picUrl": "http://pic.maizuo.com/usr/100002716/0730af843df5c04b4483c311e095f06f.jpg", "title": "aaaaa", "url": "http://ifan.one"}, {"picUrl": "http://pic.maizuo.com/usr/100003043/93d684dfeb4b348d7b67663f07a7d1cd.jpg", "title": "bbbbb", "url": "http://ifan.one"}, {"picUrl": "http://pic.maizuo.com/usr/100003086/a735fcab33e81112d3b52a5e6fb2fff5.jpg", "title": "ccccc", "url": "http://ifan.one"}, {"picUrl": "http://pic.maizuo.com/usr/100003111/b73c302b84f826d78ccdccce32c69947.jpg", "title": "ddddd", "url": "http://ifan.one"}]';
        let jsonObj = JSON.parse(jsonStr);

        return (<div>
            <div>
                <div className="slider-container">
                    <SimpleSlider picList={jsonObj} />
                </div>
            </div>
            <div className="index">
                <ul>
                    {filmlist}
                </ul>
            </div>
        </div>);
    }
}