/** @format */

import React, { useState, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import {
    gyumriDistricts,
    type District,
    type IMultiLangDistrict,
} from '../../data/district';
import { useLanguage } from '../../context/LanguageContext';
import { selectDistrict } from '../../utils/selectDistrict';
const placeholderByLang: Record<string, string> = {
    en: 'Search district...',
    ru: 'Поиск округа...',
    hy: 'Փնտրել թաղամասը...',
};

type Props = {
    mapRef: React.RefObject<maplibregl.Map | null>;
};
const normalize = (text: string) =>
    text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

const MultiLangDistrictSearch: React.FC<Props> = ({ mapRef }) => {
    const { language } = useLanguage();
    const [query, setQuery] = useState('');
    const [matches, setMatches] = useState<District[]>([]);

    const allDistricts =
        gyumriDistricts[language as keyof IMultiLangDistrict] || [];

    useEffect(() => {
        const q = query.toLowerCase().trim();
        if (q.length < 1) {
            setMatches([]);
            return;
        }

        const filtered = allDistricts.filter(
            (d) =>
                d.name.toLowerCase().startsWith(q) ||
                d.aliases.some((alias) => alias.toLowerCase().startsWith(q))
        );
        setMatches(filtered);
    }, [query, language, allDistricts]);

    const highlightMatch = (text: string, query: string) => {
        const index = text.toLowerCase().indexOf(query.toLowerCase());
        if (index === -1) return text;

        return (
            <>
                {text.slice(0, index)}
                <strong>{text.slice(index, index + query.length)}</strong>
                {text.slice(index + query.length)}
            </>
        );
    };

    const handleSearch = () => {
        const q = normalize(query.trim());
        if (!q) return;

        const found = allDistricts.find(
            (d) =>
                normalize(d.name).startsWith(q) ||
                d.aliases.some((alias) => normalize(alias).startsWith(q))
        );
        console.log('✅ Match found:', found);

        if (found) {
            selectDistrict(found, mapRef.current!);
        } else {
            alert('Округ не найден'); // можно кастомизировать
        }
    };
    return (
        <div className='absolute top-4 left-1/2 bg-white transform -translate-x-1/2 w-60 sm:w-72 z-10'>
            <div className='flex gap-2 items-center'>
                <input
                    type='text'
                    className='w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent'
                    placeholder={
                        placeholderByLang[language] || 'Search district...'
                    }
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    className='px-2 py-1 text-sm bg-blue-600 text-white rounded-md'
                    onClick={handleSearch}
                >
                    🔍
                </button>
            </div>
            {matches.length > 0 && (
                <ul className='mt-2 border rounded max-h-40 overflow-y-auto text-sm bg-white shadow'>
                    {matches.map((d, idx) => (
                        <li
                            key={idx}
                            className='p-1 cursor-pointer hover:bg-gray-100'
                            onClick={() => selectDistrict(d, mapRef.current!)}
                        >
                            {highlightMatch(d.name, query)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MultiLangDistrictSearch;
