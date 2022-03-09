import React from 'react'

import { config } from '../assets/app.config.json'

const ActiveApp = ({ app }) => {
    return (
        <div className={ config.style.appContainer }>{ app && (React.createElement(app.component, [])) }</div>
    );
};

export default ActiveApp;
