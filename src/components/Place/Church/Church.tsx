/** @format */
import { useParams } from 'react-router-dom';
import { church } from '../../../data/church';
import PlacePage from '../Church/PlaceChurch';

const Church = () => {
    const { id } = useParams<{ id: string }>();
    const churchData = church.find((item) => item.id === id);

    if (!churchData) return <div>Church not found</div>;

    return <PlacePage {...churchData} />;
};

export default Church;
