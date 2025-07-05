/** @format */

import { Link } from 'react-router-dom';

const SmartChoice = () => {
    return (
        <Link
            to='smart-choice'
            className='fixed bottom-4 right-4 z-50 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-200'
        >
            Smart Choice
        </Link>
    );
};

export default SmartChoice;
