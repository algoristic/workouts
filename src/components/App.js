import React, { Component } from 'react'

import NotFound from './NotFound'

import ParameterService from '../service/parameterService'
import apps from '../assets/apps'

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.appParameter = new ParameterService('app');
        this.state = {
            app: undefined
        };

        this.mountApp = this.mountApp.bind(this);
        this.appParameter.onChange((app) => this.mountApp(app))
    }

    mountApp(app) {
        let newApp = apps[app];
        if(newApp === undefined) {
            newApp = apps.notFound;
        }
        this.setState({
            app: newApp
        });
        document.title = `App | ${newApp.title}`;
    }

    componentDidMount() {
        let startApp = 'programs';
        const appId = this.appParameter.value();
        if(appId !== undefined) {
            startApp = appId;
        }
        this.mountApp(startApp);

    }

    render() {
        const { app } = this.state;
        return (
            <div>{ app && (React.createElement(app.component, [])) }</div>
        );
    }
}
export default App;
