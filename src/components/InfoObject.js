const InfoObject = ({ id, type, title, details }) => {
    return (
        <div className='mt-4 col-12 col-md-6 col-lg-4 col-xl-3 col--xxl-2'>
            <a href={`?app=${type}&key=${id}`}>
                <div className='card'>
                    <div class="card-header">{ title }</div>
                    <div class="card-body">{ details }</div>
                </div>
            </a>
        </div>
    );
}

export default InfoObject;
