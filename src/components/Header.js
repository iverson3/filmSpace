/**
 * Created by stefan.wang on 7/28/2016.
 */
import React from "react";
import { createPubSub, PubSubProvider }  from 'react-pubsub'

export default class Header extends React.Component {
    cutMenu() {
        // PubSub.publish('changeHeadTitle', "stefan");
        this.props.cutMenu();
        // 影视空间
    }
    render() {
        return (<div className="header">
            <div className="header-menuicon" onClick={this.cutMenu.bind(this)}>Menu</div>
            <div className="header-title"><p>{this.props.title}</p></div>
            <div className="header-search">
                <form className="cf form-wrapper" action="">
                    <input type="text" placeholder="Search here..." />
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>);
    }
}