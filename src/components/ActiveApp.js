import React from 'react'

import { config } from '../assets/app.config.json'

const ActiveApp = ({ app }) => {
    return (
        <div className={config.appContainer}>{ app && (React.createElement(app.component, [])) }</div>
    );
};

export default ActiveApp;
