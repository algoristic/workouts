import { config } from '../assets/app.config.json'

const MainMenu = ({ app }) => {
    return (
        <nav className={`navbar ${ config.style.navbarStyleClasses }`}>
            <div className={ config.style.appContainer }>
                <div className={ config.style.navbarClasses }>
                    <span class='navbar-brand'></span>
                    <button class='navbar-toggler' type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapsibleNavbar'>
                        <span class='navbar-toggler-icon'></span>
                    </button>
                </div>
                 <div class='collapse navbar-collapse' id='collapsibleNavbar'>
                     <ul className='navbar-nav'>
                         <li className='nav-item'>
                             <a className={`nav-link ${(app && (app.id === config.apps.start) ? 'disabled' : '')} ${config.style.navbarButtonClasses}`}
                                href={`?${config.parameters.app}=${config.apps.start}`}>
                                Hauptmenü
                             </a>
                         </li>
                     </ul>
                 </div>
            </div>
        </nav>
    );
};

export default MainMenu;
