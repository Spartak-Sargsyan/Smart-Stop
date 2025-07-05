/** @format */

import {
    useEffect,
    useRef,
    useState,
    maplibregl,
    useLanguage,
    MAP_MAX_BOUNDS,
    MAP_STYLE_BY_LANGUAGE,
    MAP_CENTER_COORDINATES,
    addMapMarkers,
    TypeFilter,
    MAP_ZOOM,
    useNavigate,
    Button,
} from './index';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { Lang } from './index';
import TypeSelectionPopup from '../Modal/TypeSelectionPopup';
import MultiLangDistrictSearch from '../LocationSearch/LocationSearch';

const Map = () => {
    const navigate = useNavigate();
    const [selectedType, setSelectedType] = useState<string>('all');
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<maplibregl.Map | null>(null);
    const navigatePopUp = useNavigate();
    const { language } = useLanguage();

    // Инициализация карты
    useEffect(() => {
        if (mapContainerRef.current && !mapRef.current) {
            const map = new maplibregl.Map({
                container: mapContainerRef.current as HTMLDivElement,
                attributionControl: false,
                style: MAP_STYLE_BY_LANGUAGE.en,
                zoom: MAP_ZOOM,
                maxBounds: MAP_MAX_BOUNDS,
                center: MAP_CENTER_COORDINATES,
            });

            map.on('styleimagemissing', (e) => {
                console.warn(`Карта просит недостающее изображение: ${e.id}`);
            });

            map.addControl(
                new maplibregl.NavigationControl({ showCompass: false }),
                'top-left'
            );
            mapRef.current = map;
        }

        return () => {
            mapRef.current?.remove();
            mapRef.current = null;
        };
    }, []);

    // Обновление стиля и маркеров при смене языка или фильтра
    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.setStyle(
                MAP_STYLE_BY_LANGUAGE[language] || MAP_STYLE_BY_LANGUAGE.en
            );
            updateMarkers();
        }
    }, [language, selectedType]);

    const updateMarkers = () => {
        if (mapRef.current) {
            document
                .querySelectorAll('.custom-marker')
                .forEach((el) => el.remove());
            addMapMarkers(
                mapRef.current,
                language as Lang,
                selectedType,
                navigate
            );
        }
    };

    const handlePopupSelect = (type: string) => {
        navigatePopUp(`/smart-choice?type=${type}`);
        setIsPopupOpen(false);
    };

    return (
        <div className='relative h-screen w-screen overflow-x-hidden'>
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className='fixed top-4 right-4 z-50 p-2 bg-white rounded shadow-md transition-transform duration-300'
                style={{
                    transform: menuOpen
                        ? 'translateX(-260px)'
                        : 'translateX(0)',
                }}
            >
                {!menuOpen ? (
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='#007bff'
                        viewBox='0 0 24 24'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                ) : (
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='red'
                        viewBox='0 0 24 24'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M6 18L18 6M6 6l12 12'
                        />
                    </svg>
                )}
            </button>

            <div
                className={`fixed top-0 right-0 h-full w-64 shadow-lg z-40 transition-transform duration-300 ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <TypeFilter
                    lang={language as Lang}
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                />
            </div>

            <div
                ref={mapContainerRef}
                style={{ width: '100%', height: '100%' }}
            />

            {/* Smart Choice */}
            <Button title='Smart Choice' onClick={() => setIsPopupOpen(true)} />

            <MultiLangDistrictSearch mapRef={mapRef} />

            {isPopupOpen && (
                <TypeSelectionPopup
                    onSelect={handlePopupSelect}
                    onClose={() => setIsPopupOpen(false)}
                />
            )}
        </div>
    );
};

export default Map;
