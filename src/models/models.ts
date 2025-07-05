/** @format */

interface ITranslate {
    name: string;
    type: string;
}

interface ITranslations {
    [key: string]: ITranslate;
}

interface ILocation {
    id: string;
    translations: ITranslations;
    coords: [number, number];
}

interface ITranslation {
    more: string;
    all: string;
    [key: string]: string;
}

interface IMenu {
    en: ITranslation;
    ru: ITranslation;
    hy: ITranslation;
}

interface ILanguage {
    name: string;
    value: Lang;
    id: number;
}

type LanguageContextType = {
    language: string;
    setLanguage: (lang: Lang) => void;
};

type PlaceType =
    | 'all'
    | 'Museum'
    | 'Hospital'
    | 'Church'
    | 'Shop'
    | 'Police'
    | 'Airport'
    | 'Park'
    | 'Library'
    | 'Theatre'
    | 'Cafe'
    | 'Hotel'
    | 'District'
    | 'Bank';

type Lang = 'en' | 'ru' | 'hy';

// cafe.ts
interface IMenuItem {
    name: string;
    price: string;
    description: string;
}
interface IGalleryImage {
    src: string;
    alt: string;
}
interface ICafeData {
    id: string;
    type: string;
    name: string;
    location: string;
    phone: string;
    menuSections: {
        dinner: IMenuItem[];
        lunch: IMenuItem[];
        drinks: IMenuItem[];
    };
    galleryImages: {
        interior: IGalleryImage[];
        food: IGalleryImage[];
    };
}
export type {
    ILocation,
    PlaceType,
    IMenu,
    Lang,
    ILanguage,
    LanguageContextType,
    ICafeData,
};
