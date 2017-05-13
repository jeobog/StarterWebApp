import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import Main from './components/main.jsx';

let reactRoot = document.getElementsByTagName('reactroot')[0];
if (!reactRoot) {
    reactRoot = document.createElement('reactroot');
    document.body.appendChild(reactRoot);
}

const  appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const appRoute = {
    path: '/',
    component: Main,
    indexRoute: { component: Main },
    childRoutes: [

    ]
}

ReactDOM.render(<Router history={ appHistory } routes={ appRoute } />, reactRoot);
