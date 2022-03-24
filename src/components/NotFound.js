import Header from './Header'

const NotFound = () => {
    return (
        <>
            <Header>404 - Seite nicht gefunden 🤷</Header>
            <div className='d-flex justify-content-center'>
                <img className='img-thumbnail' src='/kitten.jpg' alt='Eine Kadse' />
            </div>
        </>
    );
};

export default NotFound;
