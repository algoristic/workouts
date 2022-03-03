const BackTo = ({ app }) => {
    return (
        <nav className='navbar navbar-expand bg-light navbar-light border border-top-0'>
            <div className='container-fluid justify-content-end'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <button className='btn btn-secondary'>
                            <a href={`?app=${app}`}>Back ❌</a>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default BackTo;
