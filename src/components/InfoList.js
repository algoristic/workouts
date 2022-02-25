import PageControl from './PageControl'

const InfoList = ({ objects, displayComponent }) => {
    return (
        <>
            <PageControl />
            <div className='container-fluid row'>
                { Object.keys(objects).map((slug) => displayComponent(slug, objects[slug])) }
            </div>
        </>
    );
};

export default InfoList;
