/** @format */
import type { PlaceType } from '../models/models';

const iconPaths: Record<string, string> = {
    Museum: 'museum.png',
    Cafe: 'cafe.png',
    Hospital: 'hospital.png',
    Church: 'church.png',
    Police: 'police.png',
    Airport: 'airport.png',
    Park: 'park.png',
    Library: 'library.png',
    Theatre: 'theatre.png',
    Hotel: 'hotel.png',
};

export const getIconByType = (type: PlaceType): string | null => {
    return iconPaths[type] || null;
};
