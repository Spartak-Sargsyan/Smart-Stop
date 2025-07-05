/** @format */

import { LanguageSelector } from './index';
import Map from './Map';

const CityMap = () => {
    return (
        <>
            <div>
                <div>
                    <LanguageSelector />
                </div>
                <Map />
            </div>
        </>
    );
};

export default CityMap;
