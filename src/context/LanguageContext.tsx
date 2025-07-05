/** @format */

import { useContext, createContext, useState } from 'react';
import type { LanguageContextType, Lang } from '../models/models';

export const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export const LanguageProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [language, setLanguage] = useState<Lang>('en');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
