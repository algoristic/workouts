import Button from './Button'

const Back = ({ classes, to }) => {
    let href;
    let onClick;
    if(to) {
        href = to;
    } else {
        onClick = () => { window.history.back() };
    }
    return (
        <Button color='outline-dark' classes={`mb-3 ${ classes }`} icon='↩' text='Zurück'
            href={ href } onClick={ onClick }>
        </Button>
    );
}

export default Back;
