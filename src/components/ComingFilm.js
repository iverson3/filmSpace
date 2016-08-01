/**
 * Created by stefan.wang on 7/29/2016.
 */
import React from 'react'
import MenuLink from './MenuLink'

export default class ComingFilm extends React.Component {
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
                            <p>{this.props.date}上映</p>
                        </div>
                    </div>
                    <div className="filmlist-item-r">
                        <p></p>
                    </div>
                </div>
            </MenuLink>
        );
    }
}