import { config } from '../assets/app.config.json'

const MainMenu = ({ app }) => {
    return (
        <nav className={`navbar ${config.style.navbarStyleClasses} ${config.style.appContainer}`}>
        <div className={config.style.navbarClasses}>
            <a href='./' class='navbar-brand'>
                <img src='./favicon.png' alt='Logo' style={{ width: '40px' }} />
            </a>
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
        </nav>
    );
};

export default MainMenu;
