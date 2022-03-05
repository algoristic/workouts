import { config } from '../assets/app.config.json'

const ModeSelect = () => {
    const buttonClasses = `
        ${ config.buttonClasses }
        ${ config.buttonFontSize }
        ${ config.buttonFontWeight }
        ${ config.buttonPadding }
        btn-outline-dark`;
    return (
        <div className='btn-group-vertical mt-5 mb-3'>
            <button type='button' className={ buttonClasses } onClick={() => window.history.back()}>
                <span className='btn-icon'>↩</span>
                <span className='btn-text ms-3'>Zurück</span>
            </button>
            <a className={`${ buttonClasses } border-top-0`} href='?app=start'>
                <span className='btn-icon'>❌</span>
                <span className='btn-text ms-3'>Anderer Modus?</span>
            </a>
        </div>
    );
}

export default ModeSelect;
