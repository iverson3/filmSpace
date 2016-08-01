/**
 * Created by stefan.wang on 7/29/2016.
 */
import React from 'react'
import MenuLink from './MenuLink'

export default class OnlineFilm extends React.Component {
    render() {
        return (
            <MenuLink to={"/filminfo/" + this.props.no}>
                <div className="filmlist-item">
                    <div className="filmlist-item-l">
                        <div className="filmlist-item-l-img">
                            <img src={this.props.picurl} alt=""/>
                        </div>
                        <div className="filmlist-item-l-cont">
                            <p>{this.props.name}</p>
                            <p>{this.props.desc}</p>
                            <p>{this.props.cinemanum}家影院上映 &nbsp;&nbsp;&nbsp;&nbsp;{this.props.salenum}人购票</p>
                        </div>
                    </div>
                    <div className="filmlist-item-r">
                        <p>{this.props.score}</p>
                    </div>
                </div>
            </MenuLink>
        );
    }
}