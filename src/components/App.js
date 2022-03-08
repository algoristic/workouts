import { Component } from 'react'

import ActiveApp from './ActiveApp'
import MainMenu from './MainMenu'
import ParameterService from '../service/parameterService'
import apps from '../assets/apps.config'
import { config } from '../assets/app.config.json'

const getApp = (id) => {
    return apps.filter(_app => _app.id === id)[0];
};

class App extends Component {
    constructor(props) {
        super(props);
        this.appParameter = new ParameterService(config.parameters.app);
        this.state = {
            app: undefined
        };

        this.mountApp = this.mountApp.bind(this);
        this.appParameter.onChange((app) => this.mountApp(app))
    }

    mountApp(app) {
        let newApp = getApp(app);
        if(newApp === undefined) {
            newApp = getApp(config.apps.notFound);
        }
        this.setState({
            app: newApp
        });
        document.title = `${newApp.title}`;
    }

    componentDidMount() {
        let { start } = config.apps;
        const appId = this.appParameter.value();
        if(appId !== undefined) {
            start = appId;
        }
        this.mountApp(start);

    }

    render() {
        const { app } = this.state;
        return (
            <div className='application-wrapper'>
                <MainMenu app={app} />
                <ActiveApp app={app} />
            </div>
        );
    }
}
export default App;
