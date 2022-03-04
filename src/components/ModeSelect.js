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
            <a className={ buttonClasses } onClick={() => window.history.back()}>
                ❌ Zurück
            </a>
            <a className={`${ buttonClasses } border-top-0`} href='?app=start'>
                ♻️ Anderer Modus?
            </a>
        </div>
    );
}

export default ModeSelect;
