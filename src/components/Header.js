import { config } from '../assets/app.config.json'

const Header = ({ children }) => {
    return (
        <div className={ config.style.headerClasses }>{ children }</div>
    );
}

export default Header;
