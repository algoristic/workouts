const DayControl = ({ id, program:{ days, name }, day }) => {
    const previousDay = (day - 1);
    const nextDay = (day + 1);
    return (
        <nav className='navbar navbar-expand bg-light navbar-light border border-top-0'>
            <div className='container-fluid justify-content-end'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <button className='btn btn-secondary'>
                            <a href={`?app=program&key=${id}`}>Back ❌</a>
                        </button>
                    </li>
                    {
                        (previousDay > 0) && (
                            <li className='nav-item ms-2'>
                                <button className='btn btn-secondary'>
                                    <a href={`?app=day&key=${id}&day=${previousDay}`}>Previous ⏪</a>
                                </button>
                            </li>
                        )
                    }
                    {
                        (nextDay <= days) && (
                            <li className='nav-item ms-2'>
                                <button className='btn btn-secondary'>
                                    <a href={`?app=day&key=${id}&day=${nextDay}`}>Next ⏩</a>
                                </button>
                            </li>
                        )
                    }
                </ul>
            </div>
        </nav>
    );
};

export default DayControl;
