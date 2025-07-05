/** @format */

interface RoomCategory {
    name: string;
    pricePerNightUSD: number;
    description: string;
}

export interface HotelWithRooms {
    name: string;
    address: string;
    rooms: RoomCategory[];
}
interface IMultiLangHotel {
    en: HotelWithRooms[];
    ru: HotelWithRooms[];
    hy: HotelWithRooms[];
}

export const gyumriHotels: IMultiLangHotel = {
    en: [
        {
            name: 'Alexandrapol Palace Hotel',
            address: 'Mayakovskogo St 70, Gyumri, Armenia',
            rooms: [
                {
                    name: 'Economy',
                    pricePerNightUSD: 55,
                    description:
                        'Comfortable single room with basic amenities.',
                },
                {
                    name: 'Standard',
                    pricePerNightUSD: 85,
                    description:
                        'Comfortable room with city view and air conditioning.',
                },
                {
                    name: 'Luxury',
                    pricePerNightUSD: 130,
                    description:
                        'Spacious suite with balcony, minibar, and VIP services.',
                },
            ],
        },
        {
            name: 'Radisson Hotel & Spa Gyumri',
            address: 'Abovyan St 5, Gyumri, Armenia',
            rooms: [
                {
                    name: 'Economy',
                    pricePerNightUSD: 60,
                    description:
                        'Cozy room with basic amenities, Wi-Fi, and TV.',
                },
                {
                    name: 'Standard',
                    pricePerNightUSD: 90,
                    description:
                        'Comfortable room with modern interior and breakfast.',
                },
                {
                    name: 'Luxury',
                    pricePerNightUSD: 140,
                    description: 'Luxury room with SPA access and spa bathtub.',
                },
            ],
        },
        {
            name: 'Prime Hotel',
            address: 'Near city center, Gyumri, Armenia',
            rooms: [
                {
                    name: 'Economy',
                    pricePerNightUSD: 50,
                    description: 'Basic room for budget stay.',
                },
                {
                    name: 'Standard',
                    pricePerNightUSD: 75,
                    description: 'Mid-range room with standard amenities.',
                },
                {
                    name: 'Luxury',
                    pricePerNightUSD: 120,
                    description: 'Prestigious suite with enhanced service.',
                },
            ],
        },
        {
            name: 'KUMA Hotel Gyumri',
            address: 'Garegin Nzhdeh St 1, Gyumri, Armenia',
            rooms: [
                {
                    name: 'Economy',
                    pricePerNightUSD: 52,
                    description: 'Stylish budget option with basic furniture.',
                },
                {
                    name: 'Standard',
                    pricePerNightUSD: 80,
                    description: 'Room with city center view and breakfast.',
                },
                {
                    name: 'Luxury',
                    pricePerNightUSD: 125,
                    description:
                        'Suite with designer furniture and VIP services.',
                },
            ],
        },
        {
            name: '21 Rooms Hotel',
            address: 'Central Gyumri, Armenia',
            rooms: [
                {
                    name: 'Economy',
                    pricePerNightUSD: 45,
                    description:
                        'Small economy-class room, simple and functional.',
                },
                {
                    name: 'Standard',
                    pricePerNightUSD: 70,
                    description: 'Comfortable room with modern design.',
                },
                {
                    name: 'Luxury',
                    pricePerNightUSD: 110,
                    description: 'Luxury suite with extended amenities.',
                },
            ],
        },
    ],
    ru: [
        {
            name: 'Гостиница Александраполь Палас',
            address: 'ул. Маяковского, 70, Гюмри, Армения',
            rooms: [
                {
                    name: 'Эконом',
                    pricePerNightUSD: 55,
                    description:
                        'Уютный одноместный номер с базовыми удобствами.',
                },
                {
                    name: 'Стандарт',
                    pricePerNightUSD: 85,
                    description:
                        'Комфортабельный номер с видом на город и кондиционером.',
                },
                {
                    name: 'Люкс',
                    pricePerNightUSD: 130,
                    description:
                        'Просторный люкс с балконом, мини-баром и VIP-услугами.',
                },
            ],
        },
        {
            name: 'Отель и Спа Радиссон Гюмри',
            address: 'ул. Абовяна, 5, Гюмри, Армения',
            rooms: [
                {
                    name: 'Эконом',
                    pricePerNightUSD: 60,
                    description:
                        'Уютный номер с базовыми удобствами, Wi-Fi и телевизором.',
                },
                {
                    name: 'Стандарт',
                    pricePerNightUSD: 90,
                    description:
                        'Комфортабельный номер с современным интерьером и завтраком.',
                },
                {
                    name: 'Люкс',
                    pricePerNightUSD: 140,
                    description:
                        'Роскошный номер с доступом в СПА и ванной с гидромассажем.',
                },
            ],
        },
        {
            name: 'Отель Прайм',
            address: 'Рядом с центром города, Гюмри, Армения',
            rooms: [
                {
                    name: 'Эконом',
                    pricePerNightUSD: 50,
                    description: 'Простой номер для бюджетного размещения.',
                },
                {
                    name: 'Стандарт',
                    pricePerNightUSD: 75,
                    description:
                        'Номер средней ценовой категории со стандартными удобствами.',
                },
                {
                    name: 'Люкс',
                    pricePerNightUSD: 120,
                    description:
                        'Престижный люкс с повышенным уровнем сервиса.',
                },
            ],
        },
        {
            name: 'Гостиница КУМА Гюмри',
            address: 'ул. Гарегина Нжде, 1, Гюмри, Армения',
            rooms: [
                {
                    name: 'Эконом',
                    pricePerNightUSD: 52,
                    description: 'Стильный бюджетный номер с базовой мебелью.',
                },
                {
                    name: 'Стандарт',
                    pricePerNightUSD: 80,
                    description: 'Номер с видом на центр города и завтраком.',
                },
                {
                    name: 'Люкс',
                    pricePerNightUSD: 125,
                    description:
                        'Люкс с дизайнерской мебелью и VIP-обслуживанием.',
                },
            ],
        },
        {
            name: 'Гостиница 21 Rooms',
            address: 'Центр Гюмри, Армения',
            rooms: [
                {
                    name: 'Эконом',
                    pricePerNightUSD: 45,
                    description:
                        'Небольшой номер эконом-класса, простой и функциональный.',
                },
                {
                    name: 'Стандарт',
                    pricePerNightUSD: 70,
                    description: 'Удобный номер с современным дизайном.',
                },
                {
                    name: 'Люкс',
                    pricePerNightUSD: 110,
                    description: 'Люкс с расширенными удобствами.',
                },
            ],
        },
    ],
    hy: [
        {
            name: 'Ալեքսանդրապոլ Պալաս Հյուրանոց',
            address: 'Մայակովսկու փողոց 70, Գյումրի, Հայաստան',
            rooms: [
                {
                    name: 'Էկոնոմ',
                    pricePerNightUSD: 55,
                    description:
                        'Հարմարավետ միակողմանի սենյակ՝ հիմնական հարմարություններով։',
                },
                {
                    name: 'Ստանդարտ',
                    pricePerNightUSD: 85,
                    description:
                        'Հարմարավետ սենյակ քաղաքային տեսարանով և օդորակիչով։',
                },
                {
                    name: 'Լյուքս',
                    pricePerNightUSD: 130,
                    description:
                        'Տարածուն լյուքս՝ պատշգամբով, մինի-բարով և VIP ծառայություններով։',
                },
            ],
        },
        {
            name: 'Ռադիսոն Հյուրանոց և Սպա Գյումրի',
            address: 'Աբովյան փողոց 5, Գյումրի, Հայաստան',
            rooms: [
                {
                    name: 'Էկոնոմ',
                    pricePerNightUSD: 60,
                    description:
                        'Հարմարավետ սենյակ՝ հիմնական հարմարություններով, Wi-Fi և հեռուստացույցով։',
                },
                {
                    name: 'Ստանդարտ',
                    pricePerNightUSD: 90,
                    description:
                        'Հարմարավետ սենյակ՝ ժամանակակից ինտերիերով և նախաճաշով։',
                },
                {
                    name: 'Լյուքս',
                    pricePerNightUSD: 140,
                    description: 'Շքեղ սենյակ՝ ՍՊԱ մուտքով և ջակուզիով։',
                },
            ],
        },
        {
            name: 'Փրայմ Հյուրանոց',
            address: 'Քաղաքի կենտրոնի մոտ, Գյումրի, Հայաստան',
            rooms: [
                {
                    name: 'Էկոնոմ',
                    pricePerNightUSD: 50,
                    description:
                        'Հիմնական հարմարություններով սենյակ բյուջետային հյուրերի համար։',
                },
                {
                    name: 'Ստանդարտ',
                    pricePerNightUSD: 75,
                    description:
                        'Միջին կարգի սենյակ՝ ստանդարտ հարմարություններով։',
                },
                {
                    name: 'Լյուքս',
                    pricePerNightUSD: 120,
                    description: 'Հարգի լյուքս՝ բարձրակարգ սպասարկմամբ։',
                },
            ],
        },
        {
            name: 'ԿՈՒՄԱ Հյուրանոց Գյումրի',
            address: 'Գարեգին Նժդեհ փողոց 1, Գյումրի, Հայաստան',
            rooms: [
                {
                    name: 'Էկոնոմ',
                    pricePerNightUSD: 52,
                    description:
                        'Ոճային բյուջետային տարբերակ՝ հիմնական կահույքով։',
                },
                {
                    name: 'Ստանդարտ',
                    pricePerNightUSD: 80,
                    description: 'Սենյակ՝ տեսարանով դեպի կենտրոն և նախաճաշով։',
                },
                {
                    name: 'Լյուքս',
                    pricePerNightUSD: 125,
                    description:
                        'Լյուքս՝ դիզայներական կահույքով և VIP ծառայություններով։',
                },
            ],
        },
        {
            name: '21 Սենյակ Հյուրանոց',
            address: 'Գյումրի կենտրոն, Հայաստան',
            rooms: [
                {
                    name: 'Էկոնոմ',
                    pricePerNightUSD: 45,
                    description:
                        'Փոքր էկոնոմ կարգի սենյակ՝ պարզ և ֆունկցիոնալ։',
                },
                {
                    name: 'Ստանդարտ',
                    pricePerNightUSD: 70,
                    description: 'Հարմարավետ սենյակ՝ ժամանակակից դիզայնով։',
                },
                {
                    name: 'Լյուքս',
                    pricePerNightUSD: 110,
                    description: 'Լյուքս՝ ընդլայնված հարմարություններով։',
                },
            ],
        },
    ],
};
