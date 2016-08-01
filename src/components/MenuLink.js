/**
 * Created by stefan.wang on 7/28/2016.
 */
import React from 'react'
import { Link } from 'react-router'

export default class MenuLink extends React.Component {
    click() {
        console.log('fffffff')
    }
    render() {
        return <Link {...this.props} onClick={this.click} className="menu-link" activeClassName="menu-active"/>
    }
}
