const InfoObject = ({ id, type, title, details }) => {
    return (
        <p className='info-object'>
            <a href={`?app=${type}&key=${id}`}>
                <div className='object-title'>{ title }</div>
                <div className='object-details'>
                    <i>{ details }</i>
                </div>
            </a>
        </p>
    );
}

export default InfoObject;
