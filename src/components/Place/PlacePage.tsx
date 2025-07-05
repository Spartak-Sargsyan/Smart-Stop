/** @format */

import { Link, useParams } from 'react-router-dom';
import { locations } from '../../data/location';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSelector from '../Language/LanguageSelector';

const translations = {
    en: { back: 'Back', hours: 'Working Hours' },
    ru: { back: 'Назад', hours: 'Время работы' },
    hy: { back: 'Վերադառնալ', hours: 'Աշխատաժամեր' },
};

type Lang = keyof typeof translations;

const PlacePage = () => {
    const { id } = useParams();
    const location = locations.find((loc) => String(loc.id) === id);
    const { language } = useLanguage();

    if (!location) return <div>Not found</div>;

    const t =
        location.translations[language as Lang] || location.translations.en;
    return (
        <div style={{ padding: '2rem' }}>
            <LanguageSelector />
            <h1>{t.name}</h1>
            <p>{t.type}</p>
            <p>
                <strong>{translations[language as Lang].hours}:</strong>{' '}
                10:00–20:00
            </p>

            <Link to='/' style={{ color: 'blue' }}>
                {translations[language as Lang].back}
            </Link>
        </div>
    );
};

export default PlacePage;
