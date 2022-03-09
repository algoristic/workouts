import { config } from '../assets/app.config.json'

const Subtitle = ({ text, classes, fontSize }) => {
    if(!fontSize) {
        fontSize = 'fs-6';
    } else {
        fontSize = `fs-${ fontSize }`;
    }
    return (
        <p className={`${ config.style.subtitleClasses } ${ fontSize } ${ classes }`}>
            { text }
        </p>
    );
};

export default Subtitle;
