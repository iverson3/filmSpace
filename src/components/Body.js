/**
 * Created by stefan.wang on 7/28/2016.
 */
import React from "react";

import Index from './Index'
import Error from './Error'
import FilmInfo from './FilmInfo'
import FilmList from './FilmList'

export default class Body extends React.Component {
    render() {
        let main = null;
        if (typeof this.props.params.moduleName === 'undefined' && typeof this.props.params.statusName === 'undefined') {
            // 首页
            main = <Index />;
        } else {
            if (this.props.params.moduleName === 'film') {
                if (this.props.params.statusName == 'coming') {
                    main = <FilmList type="coming" />;
                } else if (this.props.params.statusName == 'online' || typeof this.props.params.statusName === 'undefined') {
                    main = <FilmList type="online" />;
                } else {
                    // 非法链接
                    main = <Error />;
                }
            } else if(this.props.params.moduleName === 'cinema') {

            } else if(this.props.params.moduleName === 'home') {

            } else if(this.props.params.moduleName === 'ticket') {

            } else if(this.props.params.moduleName === 'filminfo') {
                main = <FilmInfo no={this.props.params.statusName} />;
            } else {
                // 非法链接
                main = <Error />;
            }
        }

        return (<div className="body">
            {main}
        </div>);
    }
}