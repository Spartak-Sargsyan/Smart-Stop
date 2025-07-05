/** @format */
import { getIconByType } from './customIcon';
import maplibregl from 'maplibre-gl';
import { locations } from '../data/location';
import type { Lang, PlaceType } from '../models/models';
import type { NavigateFunction } from 'react-router-dom';
import { selectDistrict } from './selectDistrict';
import { gyumriDistricts } from '../data/district';

let currentSelectedDistrict: string | null = null;

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
            const type = loc.translations.en.type;
            const link = loc.link;
            const icon = getIconByType(type as PlaceType);

            const el = document.createElement('div');
            el.className = 'custom-marker';

            if (icon) {
                el.style.backgroundImage = `url(${icon})`;
                el.style.backgroundSize = 'contain';
                el.style.backgroundRepeat = 'no-repeat';
                el.style.backgroundPosition = 'center';
                el.style.width = '50px';
                el.style.height = '50px';
                el.style.cursor = 'pointer';
            }

            const popupElement = document.createElement('div');
            popupElement.style.cursor = 'pointer';
            popupElement.innerHTML = `<strong>${name}</strong>`;

            const popup = new maplibregl.Popup({ offset: 25 }).setDOMContent(
                popupElement
            );

            new maplibregl.Marker(el)
                .setLngLat([loc.coords[1], loc.coords[0]])
                .setPopup(popup)
                .addTo(map);

            if (icon === 'district.png') {
                const foundDistrict = gyumriDistricts[language].find(
                    (d) =>
                        d.name === name ||
                        d.aliases.some((alias) =>
                            alias.toLowerCase().includes(name.toLowerCase())
                        )
                );

                if (foundDistrict) {
                    el.addEventListener('click', () => {
                        if (currentSelectedDistrict === foundDistrict.name) {
                            // снять выделение
                            if (map.getLayer('district'))
                                map.removeLayer('district');
                            if (map.getSource('district'))
                                map.removeSource('district');
                            currentSelectedDistrict = null;
                        } else {
                            selectDistrict(foundDistrict, map); // выделить
                            currentSelectedDistrict = foundDistrict.name;
                        }
                    });
                }
            } else {
                if (type.toLowerCase() === 'bank') {
                    popupElement.onclick = () => {
                        if (link?.startsWith('http')) {
                            window.open(link, '_blank');
                        }
                    };
                } else {
                    popupElement.onclick = () => navigate(`/${type}/${loc.id}`);
                }
            }
        });
};
