import Button from './Button'

const ModeSelect = () => {
    return (
        <Button color='outline-dark' classes='mb-3' icon='↩' text='Zurück'
            onClick={() => window.history.back()} >
        </Button>
    );
}

export default ModeSelect;
