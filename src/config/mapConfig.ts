/** @format */

import type { LngLatBoundsLike, LngLatLike } from 'maplibre-gl';

const MAP_CENTER_COORDINATES: LngLatLike = [
    parseFloat(import.meta.env.VITE_CENTER_LNG),
    parseFloat(import.meta.env.VITE_CENTER_LAT),
];

const MAP_MAX_BOUNDS: LngLatBoundsLike = [
    [
        parseFloat(import.meta.env.VITE_BOUND_SW_LNG),
        parseFloat(import.meta.env.VITE_BOUND_SW_LAT),
    ],
    [
        parseFloat(import.meta.env.VITE_BOUND_NE_LNG),
        parseFloat(import.meta.env.VITE_BOUND_NE_LAT),
    ],
];

const MAP_ZOOM = parseInt(import.meta.env.VITE_MAP_ZOOM);
const MAP_KEY = import.meta.env.VITE_MAP_KEY;

const MAP_EN = import.meta.env.VITE_MAP_ID_EN;
const MAP_RU = import.meta.env.VITE_MAP_ID_RU;
const MAP_HY = import.meta.env.VITE_MAP_ID_HY;

const MAP_STYLE_BY_LANGUAGE: Record<string, string> = {
    en: `https://api.maptiler.com/maps/${MAP_EN}/style.json?key=${MAP_KEY}`,
    ru: `https://api.maptiler.com/maps/${MAP_RU}/style.json?key=${MAP_KEY}`,
    hy: `https://api.maptiler.com/maps/${MAP_HY}/style.json?key=${MAP_KEY}`,
};

export {
    MAP_CENTER_COORDINATES,
    MAP_ZOOM,
    MAP_MAX_BOUNDS,
    MAP_KEY,
    MAP_STYLE_BY_LANGUAGE,
};
