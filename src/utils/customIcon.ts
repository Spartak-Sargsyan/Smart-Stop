/** @format */
import type { PlaceType } from '../models/models';

const iconPaths: Record<string, string> = {
    Museum: '/icons/museum.png',
    Cafe: '/icons/cafe.png',
    Hospital: '/icons/hospital.png',
    Church: '/icons/church.png',
    Police: '/icons/police.png',
    Airport: '/icons/airport.png',
    Park: '/icons/park.png',
    Library: '/icons/library.png',
    Theatre: '/icons/theatre.png',
    Hotel: '/icons/hotel.png',
    District: '/icons/district.png',
    Bank: '/icons/bank.png',
};

export const getIconByType = (type: PlaceType): string | null => {
    return iconPaths[type] || null;
};
