import React, { Component } from 'react'

import ParameterService from '../service/parameterService'

import apps from '../assets/apps'

class PageControl extends Component {
    constructor(props) {
        super(props);
        this.appParameter = new ParameterService('app');
    }

    render() {
        const activeApp = this.appParameter.value();
        return (
            <nav className='navbar navbar-expand-sm bg-light navbar-light border'>
                <div className='container-fluid justify-content-end'>
                    <ul className='navbar-nav'>
                        { Object.keys(apps)
                            .map((id) => apps[id])
                            .filter((app) => app.display)
                            .map((app) => {
                                const active = (app.id === activeApp);
                                return (
                                    <li key={app.id} className='ms-2 nav-item'>
                                        <button className='btn btn-dark'>
                                            <a href={`?app=${app.id}`}>{ app.title }</a>
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}

export default PageControl;
