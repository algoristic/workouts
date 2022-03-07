import { config } from '../assets/app.config.json'

const LinkButton = ({ classes, href, children }) => {
    return (
        <a className={classes} href={href}>
            { children }
        </a>
    );
};

const ActionButton = ({ classes, onClick, children }) => {
    return (
        <button className={classes} type='button' onClick={onClick}>
            { children}
        </button>
    );
};

const Button = ({ text, icon, color, classes, href, onClick }) => {
    let buttonClasses = `
        ${ config.buttonClasses }
        ${ config.buttonFontSize }
        ${ config.buttonFontWeight }
        ${ config.buttonPadding }`;
    if(color) {
        buttonClasses += ` btn-${color}`;
    }
    if(classes) {
        buttonClasses += ` ${classes}`;
    }
    let displayContent = (
        <>
            <>
            { icon && (<span className='btn-icon'>{ icon }</span>) }
            </>
            <>
            { text && (<span className='btn-text ms-3'>{ text }</span>) }
            </>
        </>
    );
    let buttonVariant;
    if(href) {
        buttonVariant = <LinkButton href={href} classes={buttonClasses}>{ displayContent }</LinkButton>;
    }
    if(onClick) {
        buttonVariant = <ActionButton onClick={onClick} classes={buttonClasses}>{ displayContent }</ActionButton>;
    }
    return (
        <>{ buttonVariant }</>
    );
};

export default Button;
