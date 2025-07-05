/** @format */
import { useParams } from 'react-router-dom';
import PlaceCafe from './PlaceCafe';
import { cafe } from '../../../data/cafe';

const Cafe = () => {
    const { id } = useParams<{ id: string }>();

    const cafes = cafe.find((cafe) => cafe.id === id);

    if (!cafes)
        return <div className='text-center text-2xl mt-20'>Cafe not found</div>;

    return <PlaceCafe {...cafes} />;
};

export default Cafe;
