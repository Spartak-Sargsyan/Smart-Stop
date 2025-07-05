/** @format */

type District = {
    name: string;
    lat: number;
    lng: number;
    radius: number;
    aliases: string[];
};

interface IMultiLangDistrict {
    en: District[];
    ru: District[];
    hy: District[];
}

const gyumriDistricts: IMultiLangDistrict = {
    en: [
        {
            name: 'Slabotka',
            lat: 40.783,
            lng: 43.838,
            radius: 400,
            aliases: ['Slabotka', 'Zinkom', 'Gorku sad', 'Tiv 1'],
        },
        {
            name: '58 district',
            lat: 40.82812287517214,
            lng: 43.8274986791312,
            radius: 700,
            aliases: [
                '58',
                'ani taxamas',
                'paruyr sevak',
                'mangavarjakan',
                'institut',
            ],
        },
    ],
    ru: [
        {
            name: 'Слаботка',
            lat: 40.783,
            lng: 43.838,
            radius: 400,
            aliases: ['Слаботка', 'Зинком', 'Горку сад'],
        },
        {
            name: 'Округ 58',
            lat: 40.82812287517214,
            lng: 43.8274986791312,
            radius: 300,
            aliases: [
                '58',
                'ани округ',
                'институт',
                'паруир севак',
                'мангаваржакан',
                'парур севак',
            ],
        },
    ],
    hy: [
        {
            name: 'Սլաբոտկա',
            lat: 40.783,
            lng: 43.838,
            radius: 400,
            aliases: ['Սլաբոտկա', 'Զինկոմ', 'Գորկու սադ', 'Տիվ 1'],
        },
        {
            name: '58 թաղամաս',
            lat: 40.82812287517214,
            lng: 43.8274986791312,
            radius: 300,
            aliases: [
                '58',
                'անի թաղամաս',
                'Պարույր Սևակ',
                'Մանգավարական',
                'Ինստիտուտ',
            ],
        },
    ],
};
export { gyumriDistricts, type District, type IMultiLangDistrict };
