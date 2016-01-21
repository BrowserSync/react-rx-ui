import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component{

    constructor(){
        super();
    }

    pages = [
        {
            'url' : '',
            'title': 'Overview'
        },
        {
            'url': 'sync-options',
            'title': 'SyncOptions'
        },
        {
            'url': 'history',
            'title': 'History'
        },
        {
            'url': 'plugins',
            'title': 'Plugins'
        },
        {
            'url': 'remote-debug',
            'title': 'RemoteDebug'
        },
        {
            'url': 'network-throttle',
            'title': 'NetworkThrottle'
        },
        {
            'url': 'help',
            'title': 'Help'
        },
        {
            'url': '404',
            'title': '404'
        }
    ];

    renderLink = (key) => {
        return (
            <li key={key}>
                <Link to={`/${this.pages[key].url}`}>{this.pages[key].title}</Link>
            </li>);
    };

    render = () => {
        return (
            <ul className="nav">
                {Object.keys(this.pages).map(this.renderLink)}
            </ul>
        )
    }
}