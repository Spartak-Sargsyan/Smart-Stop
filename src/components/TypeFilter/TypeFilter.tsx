/** @format */

import { type Lang, allTypes, translations, type PlaceType } from './index';

interface Props {
    lang: Lang;
    selectedType: string;
    setSelectedType: (type: string) => void;
}

const TypeFilter = ({ lang, selectedType, setSelectedType }: Props) => (
    <div className='absolute top-4 right-4 z-50 bg-white p-2 rounded-lg shadow-md w-[14rem] '>
        <div className='flex flex-col gap-1'>
            {allTypes.map((type) => (
                <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-md font-bold transition-colors ${
                        selectedType === type
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-black'
                    }`}
                >
                    {translations[lang][type as PlaceType]}
                </button>
            ))}
        </div>
    </div>
);

export default TypeFilter;
