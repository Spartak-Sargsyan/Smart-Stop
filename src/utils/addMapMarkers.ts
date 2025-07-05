/** @format */
import { getIconByType } from './customIcon';
import maplibregl from 'maplibre-gl';
import { locations } from '../data/location';
import type { Lang, PlaceType } from '../models/models';
import type { NavigateFunction } from 'react-router-dom';

export const addMapMarkers = (
    map: maplibregl.Map,
    language: Lang,
    selectedType: string,
    navigate: NavigateFunction
) => {
    locations
        .filter((loc) => {
            const type = loc.translations.en.type.toLowerCase().trim();

            return (
                selectedType.toLowerCase().trim() === 'all' ||
                type === selectedType.toLowerCase().trim()
            );
        })
        .forEach((loc) => {
            const name =
                loc.translations[language]?.name || loc.translations.en.name;
            const type = loc.translations.en.type; // Default to English type
            const icon = getIconByType(type as PlaceType);

            const el = document.createElement('div');
            el.className = 'custom-marker';

            if (icon) {
                el.style.backgroundImage = `url(/icons/${icon})`;
                el.style.backgroundSize = 'contain';
                el.style.backgroundRepeat = 'no-repeat';
                el.style.backgroundPosition = 'center';
                el.style.width = '50px';
                el.style.height = '50px';
            }
            const popupElement = document.createElement('div');
            popupElement.style.cursor = 'pointer';
            popupElement.innerHTML = `<strong>${name}</strong>`;
            popupElement.onclick = () => navigate(`/${type}/${loc.id}`);

            const popup = new maplibregl.Popup({ offset: 25 }).setDOMContent(
                popupElement
            );

            new maplibregl.Marker(el)
                .setLngLat([loc.coords[1], loc.coords[0]]) // LngLat = [lon, lat]
                .setPopup(popup)
                .addTo(map);
        });
};
