import React, { Component } from 'react'

import MainMenu from './MainMenu'
import ParameterService from '../service/parameterService'
import apps from '../assets/apps'
import { config } from '../assets/app.config.json'

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
        document.title = `${newApp.title}`;
    }

    componentDidMount() {
        let { startApp } = config;
        const appId = this.appParameter.value();
        if(appId !== undefined) {
            startApp = appId;
        }
        this.mountApp(startApp);

    }

    render() {
        const { app } = this.state;
        return (
            <div className='application-wrapper'>
                <MainMenu app={app} />
                <div className={`app-wrapper ${ config.appContainer }`}>{ app && (React.createElement(app.component, [])) }</div>
            </div>
        );
    }
}
export default App;
