/** @format */

// src/utils/selectDistrict.ts
import maplibregl from 'maplibre-gl';
import type { District } from '../data/district';

export const createCircle = (
    [lng, lat]: [number, number],
    radius = 300,
    points = 64
) => {
    const coords = [];
    const km = radius / 1000;
    const distanceX = km / (111.32 * Math.cos((lat * Math.PI) / 180));
    const distanceY = km / 110.574;

    for (let i = 0; i < points; i++) {
        const theta = (i / points) * (2 * Math.PI);
        const x = distanceX * Math.cos(theta);
        const y = distanceY * Math.sin(theta);
        coords.push([lng + x, lat + y]);
    }
    coords.push(coords[0]);

    return {
        type: 'Feature',
        geometry: {
            type: 'Polygon',
            coordinates: [coords],
        },
    };
};

export const selectDistrict = (district: District, map: maplibregl.Map) => {
    const center: [number, number] = [district.lng, district.lat];
    const circle = createCircle(center, district.radius);

    if (map.getLayer('district')) map.removeLayer('district');
    if (map.getSource('district')) map.removeSource('district');

    map.addSource('district', {
        type: 'geojson',
        data: circle,
    });

    map.addLayer({
        id: 'district',
        type: 'fill',
        source: 'district',
        paint: {
            'fill-color': '#0080ff',
            'fill-opacity': 0.3,
        },
    });

    map.flyTo({ center, zoom: 16 });
};
