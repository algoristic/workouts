import Start from '../components/Start'
import Level from '../components/Level'
import NotFound from '../components/NotFound'

const apps = {
    start: {
        id: "start",
        title: "Start",
        component: Start
    },
    level: {
        id: "level",
        title: "Level",
        component: Level
    },
    notFound: {
        id: 'notFound',
        title: '404 - Not Found',
        component: NotFound
    }
};

export default apps;
