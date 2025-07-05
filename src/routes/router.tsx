/** @format */

import { createBrowserRouter } from 'react-router-dom';
import CityMap from '../components/Map/CityMap';
import Cafe from '../components/Place/Cafe/Cafe';
import Church from '../components/Place/Church/Church';
import SmartChoicePage from '../components/SmartChoicePage/SamrtChoicePage';

export const router = createBrowserRouter([
    { path: '/', element: <CityMap /> },
    { path: '/smart-choice', element: <SmartChoicePage /> },
    { path: '/cafe/:id', element: <Cafe /> },
    { path: '/church/:id', element: <Church /> },
]);
