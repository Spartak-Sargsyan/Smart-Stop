/** @format */
import { getNextId } from '../utils/randomId';
// import type { ILocation } from '../models/models';

export const locations = [
    {
        id: 'florence',
        coords: [40.787816054539874, 43.83830190421706],
        translations: {
            en: {
                name: 'Florence Gyumri Restaurant',
                type: 'Cafe',
            },
            ru: {
                name: 'Florence Gyumri Restaurant',
                type: 'Кафе',
            },
            hy: {
                name: 'Florence Gyumri Restaurant',
                type: 'Սրճարան',
            },
        },
    },
    {
        id: 'sevenChurch',
        coords: [40.786202393156564, 43.84235977534114],
        translations: {
            en: {
                name: 'Church of the Holy Mother of God (Seven Wounds)',
                type: 'Church',
            },
            ru: {
                name: 'Церковь Святой Богородицы (Семь ран)',
                type: 'Церковь',
            },
            hy: {
                name: 'Սուրբ Աստվածածին եկեղեցի (Յոթ Վերք)',
                type: 'Եկեղեցի',
            },
        },
    },

    {
        id: 'surbAmenaprkich',
        coords: [40.78414593662795, 43.8411732865793],
        translations: {
            en: {
                name: 'Church of Surb Amenaprkich',
                type: 'Church',
            },
            ru: { name: 'Церковь Сурб Аменапркич', type: 'Церковь' },
            hy: { name: 'Սուրբ Ամենափրկիչ եկեղեցի', type: 'Եկեղեցի' },
        },
    },
    {
        id: 'surbNshan',
        coords: [40.78865714779072, 43.84158999164266],
        translations: {
            en: {
                name: 'Church of Surb Nshan',
                type: 'Church',
            },
            ru: { name: 'Церковь Сурб Ншан', type: 'Церковь' },
            hy: { name: 'Սուրբ Նշան եկեղեցի', type: 'Եկեղեցի' },
        },
    },
    {
        id: 'surbGrigorLusavorich',
        coords: [40.78952632713396, 43.838188650372715],
        translations: {
            en: {
                name: 'Church of Surb Grigor Lusavorich',
                type: 'Church',
            },
            ru: { name: 'Церковь Св. Григор Лусаворич', type: 'Церковь' },
            hy: { name: 'Սուրբ Գրիգոր Լուսավորիչ եկեղեցի', type: 'Եկեղեցի' },
        },
    },
    {
        id: 'holyCathedral',
        coords: [40.781793220664284, 43.84539174371447],
        translations: {
            en: {
                name: 'Holy Martyrs Cathedral',
                type: 'Church',
            },
            ru: { name: 'Собор "Святых Мучеников', type: 'Церковь' },
            hy: { name: 'Սուրբ Նահատակաց Տաճար', type: 'Եկեղեցի' },
        },
    },
    {
        id: 'surbHakob',
        coords: [40.82967075463705, 43.8290489832468],
        translations: {
            en: {
                name: 'Church of Surb Hakob',
                type: 'Church',
            },
            ru: { name: 'Церковь Святого Акоба', type: 'Церковь' },
            hy: { name: 'Սուրբ Հակոբ Եկեղեցի', type: 'Եկեղեցի' },
        },
    },
    {
        id: 'surbHripsime',
        coords: [40.82679024105837, 43.820933071155416],
        translations: {
            en: {
                name: 'Surb Hripsime',
                type: 'Church',
            },
            ru: { name: 'Часовня Святого Эрипсиме', type: 'Церковь' },
            hy: { name: 'Սուրբ Հռիփսիմե մատուռ', type: 'Եկեղեցի' },
        },
    },
    {
        id: 'surbMinas',
        coords: [40.793927628626896, 43.84058496142072],
        translations: {
            en: {
                name: 'Surb Minas',
                type: 'Church',
            },
            ru: { name: 'Часовня Святого Минаса', type: 'Церковь' },
            hy: { name: 'Սբ. Մինաս մատուռ', type: 'Եկեղեցի' },
        },
    },
    {
        id: 'surbSargis',
        coords: [40.78442688749425, 43.82964032287665],
        translations: {
            en: {
                name: 'Surb Sargis',
                type: 'Church',
            },
            ru: { name: 'Часовня Святого Саркиса', type: 'Церковь' },
            hy: { name: 'Սուրբ Սարգիս մատուռ', type: 'Եկեղեցի' },
        },
    },
    {
        id: 'holyAlexandra',
        coords: [40.7907064161351, 43.825118481874135],
        translations: {
            en: {
                name: 'Holy Martyr Alexandra Church',
                type: 'Church',
            },
            ru: { name: 'Церковь Святого Александра', type: 'Церковь' },
            hy: { name: 'Սուրբ Ալեքսանդրա Եկեղեցի', type: 'Եկեղեցի' },
        },
    },
    {
        id: 'surbMichael',
        coords: [40.781540909435485, 43.83561146587519],
        translations: {
            en: {
                name: 'Church of St. Michael the Archangel',
                type: 'Church',
            },
            ru: { name: 'Церковь Святого Михаила Архангела', type: 'Церковь' },
            hy: {
                name: 'Սուրբ Միքայել հրեշտակապետի եկեղեցի (Պլպլան ժամ)',
                type: 'Եկեղեցի',
            },
        },
    },
    {
        id: getNextId(),
        coords: [40.78638184836889, 43.840964376645765],
        translations: {
            en: {
                name: 'The Gallery of Mariam and Eranuhi Aslamazyan Sisters',
                type: 'Museum',
            },
            ru: { name: 'Галерея сестер Асламазян', type: 'Музей' },
            hy: { name: 'Ասլամազյան քույրերի պատկերասրահ', type: 'Թանգարան' },
        },
        link: '/museum',
    },
    {
        id: getNextId(),
        coords: [40.79572081824667, 43.834898170258754],
        translations: {
            en: {
                name: 'Museum Of Illusions',
                type: 'Museum',
            },
            ru: { name: 'Музей Иллюзий', type: 'Музей' },
            hy: { name: 'Գումրիի Իլուզիաների թանգարան', type: 'Թանգարան' },
        },
        link: '/museum',
    },
    {
        id: getNextId(),
        coords: [40.788807622973, 43.842720051002416],
        translations: {
            en: {
                name: 'House Museum of Mher Mkrtchyan',
                type: 'Museum',
            },
            ru: { name: 'Дом-музей Мгера Мкртчяна', type: 'Музей' },
            hy: { name: 'Մհեր Մկրտչյանի թանգարան', type: 'Թանգարան' },
        },
        link: '/museum',
    },
    {
        id: getNextId(),
        coords: [40.78684667823467, 43.83788681815224],
        translations: {
            en: {
                name: 'Regional museum',
                type: 'Museum',
            },
            ru: { name: 'Региональный музей', type: 'Музей' },
            hy: { name: 'Տարածաշրջանային թանգարան', type: 'Թանգարան' },
        },
        link: '/museum',
    },
    {
        id: getNextId(),
        coords: [40.78506525085586, 43.842804343326456],
        translations: {
            en: {
                name: 'History museum',
                type: 'Museum',
            },
            ru: { name: 'Исторический музей', type: 'Музей' },
            hy: { name: 'Պատմության թանգարան', type: 'Թանգարան' },
        },
        link: '/museum',
    },
    {
        id: getNextId(),
        coords: [40.785863303090714, 43.84032526290636],
        translations: {
            en: {
                name: 'Style Graphics Museum',
                type: 'Museum',
            },
            ru: { name: 'Музей стилевой графики', type: 'Музей' },
            hy: { name: 'Style Graphics թանգարան', type: 'Թանգարան' },
        },
        link: '/museum',
    },
    {
        id: getNextId(),
        coords: [40.781350020331104, 43.845496096884034],
        translations: {
            en: {
                name: 'Museum of Folk Architecture and Urban Life',
                type: 'Museum',
            },
            ru: {
                name: 'Музей Народной Архитектуры и Городского Быта',
                type: 'Музей',
            },
            hy: { name: 'Ձիթողցոնց տուն-թանգարան', type: 'Թանգարան' },
        },
        link: '/museum',
    },
    {
        id: getNextId(),
        coords: [40.78767149871636, 43.843001860926705],
        translations: {
            en: {
                name: 'House Museum of Hovhannes Shiraz',
                type: 'Museum',
            },
            ru: {
                name: 'Дом-музей Ованеса Шираза',
                type: 'Музей',
            },
            hy: { name: 'Հովհաննես Շիրազի տուն-թանգարան', type: 'Թանգարան' },
        },
        link: '/museum',
    },
    {
        id: getNextId(),
        coords: [40.79274227673501, 43.83755170430347],
        translations: {
            en: {
                name: 'Museum and Cobweb Art Gallery',
                type: 'Museum',
            },
            ru: {
                name: 'Галерея искусства паутины',
                type: 'Музей',
            },
            hy: { name: 'Սարդոստային արվեստի պատկերասրահ', type: 'Թանգարան' },
        },
        link: '/museum',
    },
    {
        id: getNextId(),
        coords: [40.788164623163226, 43.84306688929842],
        translations: {
            en: {
                name: 'House Museum of Avetik Isahakyan',
                type: 'Museum',
            },
            ru: {
                name: 'Дом-музей Аветика Исаакяна',
                type: 'Музей',
            },
            hy: { name: 'Ավետիք Իսահակյանի տուն թանգարան', type: 'Թանգարան' },
        },
        link: '/museum',
    },

    // police
    {
        id: getNextId(),
        coords: [40.78869202437709, 43.84043037384056],
        translations: {
            en: {
                name: 'KUMAYRI POLICE DEPARTMENT OF GYUMRI',
                type: 'Police',
            },
            ru: {
                name: 'КУМАЙРИЙСКИЙ ОТДЕЛ ПОЛИЦИИ ГЮМРИ',
                type: 'Полиция',
            },
            hy: {
                name: 'ԳՅՈՒՄՐԻ ՈՍՏԻԿԱՆՈՒԹՅԱՆ ԿՈՒՄԱՅՐԻԻ ԲԱԺԻՆ',
                type: 'Ոստիկանություն',
            },
        },
        link: '/police',
    },
    {
        id: getNextId(),
        coords: [40.829442007146135, 43.827444513118984],
        translations: {
            en: {
                name: 'Police',
                type: 'Police',
            },
            ru: {
                name: 'Гражданская полиция',
                type: 'Полиция',
            },
            hy: {
                name: 'Քաղաքացիական ոստիկանություն',
                type: 'Ոստիկանություն',
            },
        },
        link: '/police',
    },
    {
        id: getNextId(),
        coords: [40.80469713640183, 43.8332860387253],
        translations: {
            en: {
                name: 'Police',
                type: 'Police',
            },
            ru: {
                name: 'Гражданская полиция',
                type: 'Полиция',
            },
            hy: {
                name: 'Քաղաքացիական ոստիկանություն',
                type: 'Ոստիկանություն',
            },
        },
        link: '/police',
    },
    {
        id: getNextId(),
        coords: [40.79608480939111, 43.84792959988147],
        translations: {
            en: {
                name: 'Office of Public Safety',
                type: 'Police',
            },
            ru: {
                name: 'Управление общественной безопасности',
                type: 'Полиция',
            },
            hy: {
                name: 'Հանրային անվտանգության գրասենյակ',
                type: 'Ոստիկանություն',
            },
        },
        link: '/police',
    },

    // hospital
    {
        id: getNextId(),
        coords: [40.78754273464361, 43.83661984829564],
        translations: {
            en: { name: 'White  հospital', type: 'Hospital' },
            ru: { name: 'Белая больница', type: 'Больница' },
            hy: { name: 'Սպիտակ հոսպիտալ', type: 'Հիվանդանոց' },
        },
        link: '/hospital',
    },
    {
        id: getNextId(),
        coords: [40.804201301167026, 43.8505662318472],
        translations: {
            en: { name: 'Gyumri Medical Center', type: 'Hospital' },
            ru: { name: 'Медицинский центр Гюмри', type: 'Больница' },
            hy: { name: 'Գյումրի բժշկական կենտրոն', type: 'Հիվանդանոց' },
        },
        link: '/hospital',
    },
    {
        id: getNextId(),
        coords: [40.80410764560791, 43.84811675565968],
        translations: {
            en: {
                name: "AUSTRIAN CHILDREN'S HOSPITAL",
                type: 'Hospital',
            },
            ru: { name: 'Австрийская детская больница', type: 'Больница' },
            hy: {
                name: 'Ավստրիական մանկական հիվանդանոց',
                type: 'Հիվանդանոց',
            },
        },
        link: '/hospital',
    },
    {
        id: getNextId(),
        coords: [40.8035001981063, 43.834235578395884],
        translations: {
            en: {
                name: 'Infectious Diseases Hospital',
                type: 'Hospital',
            },
            ru: { name: 'Инфекционная Больница', type: 'Больница' },
            hy: { name: 'Ինֆեկցիոն հիվանդանոց', type: 'Հիվանդանոց' },
        },
        link: '/hospital',
    },
    {
        id: getNextId(),
        coords: [40.78393406410802, 43.84580603193828],
        translations: {
            en: {
                name: 'Berlin Polyclinic',
                type: 'Hospital',
            },
            ru: { name: 'Берлин поликлиника', type: 'Больница' },
            hy: { name: 'Բեռլին պոլիկլինիկա', type: 'Հիվանդանոց' },
        },
        link: '/hospital',
    },
    {
        id: getNextId(),
        coords: [40.80821541437024, 43.83235561805234],
        translations: {
            en: {
                name: 'Polyclinic of Enrico Matte',
                type: 'Hospital',
            },
            ru: { name: 'Поликлиника имнени Энрико Матте', type: 'Больница' },
            hy: { name: 'էնրիկո Մատտեի անվան պոլիկլինիկա', type: 'Հիվանդանոց' },
        },
        link: '/hospital',
    },
    {
        id: getNextId(),
        coords: [40.81130210580514, 43.83158027398249],
        translations: {
            en: {
                name: 'Rehabilitation Center',
                type: 'Hospital',
            },
            ru: { name: 'Реабилитационный центр', type: 'Больница' },
            hy: { name: 'Վերականգնողական Կենտրոն', type: 'Հիվանդանոց' },
        },
        link: '/hospital',
    },
    {
        id: getNextId(),
        coords: [40.784453546561224, 43.827945265300535],
        translations: {
            en: {
                name: 'Mental Health Center',
                type: 'Hospital',
            },
            ru: { name: 'Центр психического здоровья', type: 'Больница' },
            hy: {
                name: 'Հոգեկան առողջության կենտրոն',
                type: 'Հիվանդանոց',
            },
        },
        link: '/hospital',
    },

    // Airport

    {
        id: getNextId(),
        coords: [40.75098990658091, 43.85430138059799],
        translations: {
            en: {
                name: 'International airport',
                type: 'Airport',
            },
            ru: { name: 'Международный аэропорт', type: 'Аэропорт' },
            hy: { name: 'Միջազգային օդանավակայան', type: 'Օդանավակայան' },
        },
        link: '/airport',
    },

    // park

    {
        id: getNextId(),
        coords: [40.78440927156109, 43.835451450582646],
        translations: {
            en: {
                name: 'Central Park',
                type: 'Park',
            },
            ru: { name: 'Центральный парк', type: 'Парк' },
            hy: { name: 'Կենտրոնական այգի', type: 'Այգի' },
        },
        link: '/park',
    },
    {
        id: getNextId(),
        coords: [40.78332939026102, 43.84498453168342],
        translations: {
            en: {
                name: 'Victory Park',
                type: 'Park',
            },
            ru: { name: 'Парк победы', type: 'Парк' },
            hy: { name: 'Հաղթանակի այգի', type: 'Այգի' },
        },
        link: '/park',
    },
    {
        id: getNextId(),
        coords: [40.78771494590109, 43.84584056764474],
        translations: {
            en: {
                name: 'Bagratuni Park',
                type: 'Park',
            },
            ru: { name: 'Парк Багратуняц', type: 'Парк' },
            hy: { name: 'Բագրատունյաց այգի', type: 'Այգի' },
        },
        link: '/park',
    },
    {
        id: getNextId(),
        coords: [40.805448372789506, 43.85079195105261],
        translations: {
            en: {
                name: 'Friendship Park',
                type: 'Park',
            },
            ru: { name: 'Парк Дружбы', type: 'Парк' },
            hy: { name: 'Բարեկամության այգի', type: 'Այգի' },
        },
        link: '/park',
    },
    {
        id: getNextId(),
        coords: [40.794993591796015, 43.844406434307345],
        translations: {
            en: {
                name: 'Avetik Isahakyan Park',
                type: 'Park',
            },
            ru: { name: 'Парк Аветика Исаакяна', type: 'Парк' },
            hy: { name: 'Ավետիկ Իսահակյանի այգի', type: 'Այգի' },
        },
        link: '/park',
    },

    // library

    {
        id: getNextId(),
        coords: [40.78494461087485, 43.836552823441636],
        translations: {
            en: {
                name: 'Shirak Regional Library',
                type: 'Library',
            },
            ru: { name: 'Ширакская областная библиотека', type: 'Библиотека' },
            hy: { name: 'Շիրակի մարզային գրադարան', type: 'Գրադարան' },
        },
        link: '/library',
    },
    {
        id: getNextId(),
        coords: [40.78982418935735, 43.8358541772381],
        translations: {
            en: {
                name: 'Gyumri American Corner',
                type: 'Library',
            },
            ru: { name: 'Ширакская областная библиотека', type: 'Библиотека' },
            hy: { name: 'Գյումրու Ամերիկյան Անկյուն', type: 'Գրադարան' },
        },
        link: '/library',
    },
    {
        id: getNextId(),
        coords: [40.78655832824015, 43.83818623749047],
        translations: {
            en: {
                name: 'Armine Library',
                type: 'Library',
            },
            ru: { name: 'Библиотека Армине', type: 'Библиотека' },
            hy: { name: 'Արմինեի գրադարան', type: 'Գրադարան' },
        },
        link: '/library',
    },

    // theater

    {
        id: getNextId(),
        coords: [40.78655832824015, 43.83818623749047],
        translations: {
            en: {
                name: 'Puppet Theater',
                type: 'Theatre',
            },
            ru: { name: 'Кукольный театр', type: 'Театр' },
            hy: { name: 'Տիկնիկային Թատրոն', type: 'Թատրոն' },
        },
        link: '/theater',
    },
    {
        id: getNextId(),
        coords: [40.79070865308984, 43.84494260052151],
        translations: {
            en: {
                name: 'Gyumri drama theatre',
                type: 'Theatre',
            },
            ru: { name: 'Гюмруский драматический театр', type: 'Театр' },
            hy: { name: 'Գյումրի դրամատիկական թատրոն', type: 'Թատրոն' },
        },
        link: '/theater',
    },
    {
        id: getNextId(),
        coords: [40.78821852348412, 43.841131250867086],
        translations: {
            en: {
                name: ' Gyumri Theatre of Reflections',
                type: 'Theatre',
            },
            ru: { name: 'Гюмрийский Театр Размышлений', type: 'Театр' },
            hy: { name: 'Գյումրու Մտորումների Թատրոն', type: 'Թատրոն' },
        },
        link: '/theater',
    },
    // hotel
    {
        id: getNextId(),
        coords: [40.78211128992164, 43.841439817932965],
        translations: {
            en: {
                name: 'Hotel Alexandrapol',
                type: 'Hotel',
            },
            ru: {
                name: 'Отель Александрополь',
                type: 'Отель',
            },
            hy: {
                name: 'Ալեքսանդրապոլ հյուրանոց',
                type: 'Հյուրանոց',
            },
        },
        link: '/hotel',
    },
    {
        id: getNextId(),
        coords: [40.7867478832412, 43.84285690119068],
        translations: {
            en: {
                name: 'Radisson Hotel & Spa Gyumri',
                type: 'Hotel',
            },
            ru: {
                name: 'Отель Radisson & СПА Гюмри',
                type: 'Отель',
            },
            hy: {
                name: 'Raddison հյուրանոց & ՍՊԱ Գյումրի',
                type: 'Հյուրանոց',
            },
        },
        link: '/hotel',
    },
    {
        id: getNextId(),
        coords: [40.786136492857445, 43.84000612220536],
        translations: {
            en: {
                name: 'Prime Hotel',
                type: 'Hotel',
            },
            ru: {
                name: 'Прайм (Prime) Отель',
                type: 'Отель',
            },
            hy: {
                name: 'Պրայմ (Prime) Հյուրանոց',
                type: 'Հյուրանոց',
            },
        },
        link: '/hotel',
    },
    {
        id: getNextId(),
        coords: [40.79416079044536, 43.84581280809708],
        translations: {
            en: {
                name: 'Kuma Hotel-Restaurant',
                type: 'Hotel',
            },
            ru: {
                name: 'Кума Отель-Ресторан',
                type: 'Отель',
            },
            hy: {
                name: 'Կումա Հյուրանոց-Ռեստորան',
                type: 'Հյուրանոց',
            },
        },
        link: '/hotel',
    },
    {
        id: getNextId(),
        coords: [40.78732003349495, 43.842858474957566],
        translations: {
            en: {
                name: '21 rooms Hotel',
                type: 'Hotel',
            },
            ru: {
                name: '21 rooms Отель',
                type: 'Отель',
            },
            hy: {
                name: '21 rooms Հյուրանոց',
                type: 'Հյուրանոց',
            },
        },
        link: '/hotel',
    },

    // district

    {
        id: getNextId(),
        coords: [40.783, 43.838],
        translations: {
            en: {
                name: 'Slabotka',
                type: 'District',
            },
            ru: { name: 'Слаботка', type: 'Округ' },
            hy: { name: 'Սլաբոտկա', type: 'Շրջան' },
        },
        radius: 400,
        aliases: ['Slabotka', 'Zinkom', 'Gorku sad', 'Tiv 1'],
    },
    {
        id: getNextId(),
        coords: [40.82812287517214, 43.8274986791312],
        translations: {
            en: {
                name: '58 District',
                type: 'District',
            },
            ru: { name: 'Округ 58', type: 'Округ' },
            hy: { name: '58 շրջան', type: 'Շրջան' },
        },
        radius: 700,
        aliases: [
            '58',
            'ani taxamas',
            'paruyr sevak',
            'mangavarjakan',
            'institut',
        ],
    },

    //bank
    {
        id: getNextId(),
        coords: [40.788866258087666, 43.84567754123136],
        translations: {
            en: {
                name: 'Evocabank',
                type: 'Bank',
            },
            ru: {
                name: 'Evocabank',
                type: 'Bank',
            },
            hy: {
                name: 'Evocabank',
                type: 'Bank',
            },
        },
        link: 'https://www.evoca.am/hy/',
    },
    {
        id: getNextId(),
        coords: [40.7929125089636, 43.84281594607066],
        translations: {
            en: {
                name: 'Inecobank',
                type: 'Bank',
            },
            ru: {
                name: 'Inecobank',
                type: 'Bank',
            },
            hy: {
                name: 'Inecobank',
                type: 'Bank',
            },
        },
        link: 'https://www.inecobank.am/hy/Individual',
    },
    {
        id: getNextId(),
        coords: [40.791878813586905, 43.846927785509656],
        translations: {
            en: {
                name: 'IDBank',
                type: 'Bank',
            },
            ru: {
                name: 'IDBank',
                type: 'Bank',
            },
            hy: {
                name: 'IDBank',
                type: 'Bank',
            },
        },
        link: 'https://idbank.am/?srsltid=AfmBOor8CpZpWKZROCmLLLo7Ic6U_AQQHzno3X14IjFgA7iyo2aw7-XI',
    },
    {
        id: getNextId(),
        coords: [40.79812647467069, 43.83543690641665],
        translations: {
            en: {
                name: 'Araratbank',
                type: 'Bank',
            },
            ru: {
                name: 'Araratbank',
                type: 'Bank',
            },
            hy: {
                name: 'Araratbank',
                type: 'Bank',
            },
        },
        link: 'https://www.araratbank.am/hy/',
    },
    {
        id: getNextId(),
        coords: [40.78420616808287, 43.84247498790664],
        translations: {
            en: {
                name: 'Araratbank',
                type: 'Bank',
            },
            ru: {
                name: 'Araratbank',
                type: 'Bank',
            },
            hy: {
                name: 'Araratbank',
                type: 'Bank',
            },
        },
        link: 'https://www.araratbank.am/hy/',
    },
    {
        id: getNextId(),
        coords: [40.793349087084295, 43.84463163671025],
        translations: {
            en: {
                name: 'Unibank',
                type: 'Bank',
            },
            ru: {
                name: 'Unibank',
                type: 'Bank',
            },
            hy: {
                name: 'Unibank',
                type: 'Bank',
            },
        },
        link: 'https://www.unibank.am/hy/',
    },
];
