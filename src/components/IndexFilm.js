/**
 * Created by stefan.wang on 7/29/2016.
 */
import React from 'react'
import MenuLink from './MenuLink'

export default class IndexFilm extends React.Component {
    render() {
        return (
            <div className="indexfilm">
                <MenuLink to={"/filminfo/" + this.props.no}><img src={this.props.picurl} /></MenuLink>
                <div className="indexfilm-div">
                    <div className="indexfilm-info">
                        <p className="indexfilm-info-name">{this.props.name}</p>
                        <p className="indexfilm-info-num">{this.props.cinemanum}家影院上映 {this.props.salenum}人购票</p>
                    </div>
                    <div className="indexfilm-info indexfilm-info-score">{this.props.score}</div>
                </div>
            </div>
        );
    }
}