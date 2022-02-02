import PageControl from './PageControl'

const InfoList = ({ objects, displayComponent }) => {
    return (
        <div className='info-list'>
            <PageControl />
            { Object.keys(objects).map((slug) => displayComponent(slug, objects[slug])) }
        </div>
    );
};

export default InfoList;
