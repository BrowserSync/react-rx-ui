import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import NotFound from './components/NotFound';
import Nav from './components/Nav';
import Overview from './components/Overview';

const stream$ = Rx.Observable.interval(1000);

class App extends React.Component {

    constructor() {
        super();
        console.log('App constructed');
        this.state = {
            test: 'test',
            stream: stream$,
            counter: 0
        };
    }

    componentDidMount = () => {
        console.log('App mounted');

        this.state.stream.subscribe(x => {
            this.setState({
                streamCounter: x
            })
        });

    };


    render = () => {
        return (
            <div>
                <Nav />
                {this.props.children && React.cloneElement( this.props.children, {
                    streamCounter: this.state.streamCounter
                })}
            </div>
        );
    }
}

class SyncOptions extends React.Component {

    constructor() {
        super();
    }

    render = () => {
        return (
            <div>
                <div className="body sync-options">
                    Sync Options
                    {this.props.streamCounter}
                </div>
            </div>
        );
    }
}

class History extends React.Component {
    render = () => {
        return (
            <div>
                <div className="body history">
                    History
                    {this.props.streamcounter}
                </div>
            </div>
        );
    }
}

class Plugins extends React.Component {
    render = () => {
        return (
            <div>
                <div className="body plugins">
                    Plugins
                    {this.props.children && React.cloneElement( this.props.children, {
                        streamCounter: this.props.streamCounter
                    })}
                </div>
            </div>
        );
    }
}

class PluginIndex extends React.Component {

    plugins = [
        {
            title: 'A Test Plugin',
            url: 'test-plugin'
        },
        {
            title: 'A Useless Plugin',
            url: 'useless-plugin'
        },
        {
            title: 'A Brilliant Plugin',
            url: 'brilliant-plugin'
        }
    ]

    renderLink = (key) => {
        return (
            <li key={key}>
                <Link to={`/plugin/${this.plugins[key].url}`}>{this.plugins[key].title}</Link>
            </li>);
    };

    render = () => {
        return (
            <div>
                <ul>
                    {Object.keys(this.plugins).map(this.renderLink)}
                </ul>
                {this.props.children && React.cloneElement( this.props.children, {
                    streamCounter: this.props.streamCounter
                })}
            </div>
        );
    }
}

class PluginPage extends React.Component {

    constructor() {
        super();
    }

    componentDidMount = () => {
        console.log(this.props.params.id);
    };

    render = () => {
        return (
            <div className="body plugins">
                <h2>Test Plugin</h2>
                <p>{this.props.params.id}</p>
                <p>{this.props.streamCounter}</p>
            </div>
        );
    }
}

class RemoteDebug extends React.Component {
    render = () => {
        return (
            <div>
                <div className="body remote-debug">
                    Remote Debug
                </div>
            </div>
        );
    }
}

class NetworkThrottle extends React.Component {
    render = () => {
        return (
            <div>
                <div className="body network-throttle">
                    Network Throttle
                </div>
            </div>
        );
    }
}

class Help extends React.Component {
    render = () => {
        return (
            <div>
                <div className="body help">
                    Help
                </div>
            </div>
        );
    }
}

let routes = (
    <Router history={createHistory()}>
        <Route path="/" component={App}>
            <IndexRoute component={Overview}/>
            <Route path="sync-options" component={SyncOptions}/>
            <Route path="history" component={History}/>
            <Route path="plugins" component={Plugins}>
                <IndexRoute component={PluginIndex}/>
                <Route path="/plugin/:id" component={PluginPage}/>
            </Route>
            <Route path="remote-debug" component={RemoteDebug}/>
            <Route path="network-throttle" component={NetworkThrottle}/>
            <Route path="help" component={Help}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </Router>
);

ReactDOM.render(
    routes,
    document.querySelector('#main')
);
