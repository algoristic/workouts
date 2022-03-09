import Button from './Button'

const Back = ({ classes, to }) => {
    let href;
    if(to) {
        href = to;
    } else {
        href = 'javascript:window.history.back()';
    }
    return (
        <Button color='outline-dark' classes={`mb-3 ${ classes }`} icon='↩' text='Zurück'
            href={href}>
        </Button>
    );
}

export default Back;
