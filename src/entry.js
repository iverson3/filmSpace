/**
 * Created by stefan.wang on 7/28/2016.
 */
import React from 'react'
import ReactDom from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import App from './components/App'
import Body from './components/Body'

ReactDom.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Body}/>
            <Route path="/:moduleName" component={Body} />
            <Route path="/:moduleName/:statusName" component={Body} />
        </Route>
    </Router>
), document.getElementById('App'));