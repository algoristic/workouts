const Subtitle = ({ text, classes, fontSize }) => {
    if(!fontSize) {
        fontSize = 'fs-5';
    } else {
        fontSize = `fs-${fontSize}`;
    }
    return (
        <p className={`text-center text-secondary ${fontSize} ${classes}`}>
            { text }
        </p>
    );
};

export default Subtitle;
