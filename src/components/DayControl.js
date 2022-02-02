const DayControl = ({ id, program:{ days, name }, day }) => {
    const previousDay = (day - 1);
    const nextDay = (day + 1);
    return (
        <ul className='control'>
            <li className='control-back-to-program'>
                <a href={`?app=program&key=${id}`}>Back to { name }</a>
            </li>
            {
                (previousDay > 0) && (
                    <li className='control-previous-day'>
                        <a href={`?app=day&key=${id}&day=${previousDay}`}>Previous day</a>
                    </li>
                )
            }
            {
                (nextDay <= days) && (
                    <li className='control-next-day'>
                        <a href={`?app=day&key=${id}&day=${nextDay}`}>Next day</a>
                    </li>
                )
            }
        </ul>
    );
};

export default DayControl;
