const InfoObject = ({ key, title, details }) => {
    return (
        <p key={key} className='info-object'>
            <div className='object-title'>{ title }</div>
            <div className='object-details'>
                <i>{ details }</i>
            </div>
        </p>
    );
}

export default InfoObject;
