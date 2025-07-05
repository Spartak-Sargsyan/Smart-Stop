/** @format */

import { languageSelector, useLanguage, type Lang } from './index';
import './style.css';

const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const selectedLang = event.target.value as Lang;
        setLanguage(selectedLang);
    };

    return (
        <div className='language-selector'>
            <select value={language} onChange={handleLanguageChange}>
                {languageSelector.map((l) => (
                    <option key={l.id} value={l.value}>
                        {l.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;
