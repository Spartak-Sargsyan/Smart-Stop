/** @format */
import type { ICafeData } from '../models/models';

export const cafe: ICafeData[] = [
    {
        id: 'florence',
        type: 'cafe',
        name: 'Florence Café',
        location: 'Shirazi 5/7, Gyumri, Armenia',
        phone: '+374 (98) 33-99-88',
        menuSections: {
            dinner: [
                {
                    name: 'Khashlama (Armenian Boiled Meat)',
                    price: '₾18',
                    description: 'Traditional slow-cooked beef with herbs',
                },
                {
                    name: 'Risotto ai Funghi',
                    price: '₾22',
                    description: 'Creamy Italian mushroom risotto',
                },
                {
                    name: 'Ghapama (Stuffed Pumpkin)',
                    price: '₾16',
                    description:
                        'Pumpkin stuffed with rice, dried fruits and nuts',
                },
                {
                    name: 'Bistecca alla Fiorentina',
                    price: '₾38',
                    description: 'Florentine-style T-bone steak',
                },
            ],
            lunch: [
                {
                    name: 'Business Lunch Set',
                    price: '₾25',
                    description: 'Soup, main course, salad and drink',
                },
                {
                    name: 'Lahmajun (Armenian Pizza)',
                    price: '₾12',
                    description: 'Thin dough with minced meat and vegetables',
                },
                {
                    name: 'Pasta Carbonara',
                    price: '₾18',
                    description: 'Classic Italian pasta with creamy sauce',
                },
                {
                    name: 'Vegetarian Platter',
                    price: '₾15',
                    description: 'Seasonal vegetables with hummus and bread',
                },
            ],
            drinks: [
                {
                    name: 'Armenian Coffee',
                    price: '₾5',
                    description:
                        'Traditional strong coffee prepared in copper cezve',
                },
                {
                    name: 'Italian Espresso',
                    price: '₾6',
                    description: 'Authentic Italian espresso',
                },
                {
                    name: 'House Wine (glass)',
                    price: '₾8-12',
                    description: 'Selection of Armenian and Italian wines',
                },
                {
                    name: 'Homemade Kompot',
                    price: '₾4',
                    description: 'Traditional fruit drink',
                },
            ],
        },
        galleryImages: {
            interior: [
                {
                    src: '../../../public/interier1.png',
                    alt: 'Café interior 1',
                },
                {
                    src: '../../../public/interier2.png',
                    alt: 'Café interior 2',
                },
                {
                    src: '../../../public/interier3.png',
                    alt: 'Café interior 3',
                },
                {
                    src: '../../../public/interier4.png',
                    alt: 'Café interior 4',
                },
                {
                    src: '../../../public/interier5.png',
                    alt: 'Café interior 5',
                },
                {
                    src: '../../../public/interier6.png',
                    alt: 'Café interior 6',
                },
                {
                    src: '../../../public/interier7.png',
                    alt: 'Café interior 7',
                },
                {
                    src: '../../../public/interier8.png',
                    alt: 'Café interior 8',
                },
            ],
            food: [
                { src: '../../../public/food1.png', alt: 'Food 1' },
                { src: '../../../public/food2.png', alt: 'Food 2' },
                { src: '../../../public/food3.png', alt: 'Food 3' },
                { src: '../../../public/food4.png', alt: 'Food 4' },
                { src: '../../../public/food5.png', alt: 'Food 5' },
                { src: '../../../public/food6.png', alt: 'Food 6' },
                { src: '../../../public/food7.png', alt: 'Food 7' },
                { src: '../../../public/food8.png', alt: 'Food 8' },
            ],
        },
    },
];
