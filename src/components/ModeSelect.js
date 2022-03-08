import Button from './Button'

const ModeSelect = ({ classes }) => {
    return (
        <Button color='outline-dark' classes={`mb-3 ${ classes }`} icon='↩' text='Zurück'
            onClick={() => window.history.back()} >
        </Button>
    );
}

export default ModeSelect;
