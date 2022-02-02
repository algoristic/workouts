import apps from '../assets/apps'

const PageControl = () => {
    return (
        <nav className='nav'>
            <ul className='nav-items'>
                { Object.keys(apps)
                    .map((id) => apps[id])
                    .filter((app) => app.display)
                    .map((app) => (
                        <li key={app.id} className='nav-item'>
                            <a href={`?app=${app.id}`}>{app.title}</a>
                        </li>
                    )) }
            </ul>
        </nav>
    );
};

export default PageControl;
