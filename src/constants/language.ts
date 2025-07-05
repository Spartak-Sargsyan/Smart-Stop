/** @format */

import type { ILanguage } from '../models/models';
import { getNextId } from '../utils/randomId';

export const languageSelector: ILanguage[] = [
    {
        id: getNextId(),
        name: '🇦🇲 Հայերեն',
        value: 'hy',
    },
    {
        id: getNextId(),
        name: '🇺🇸 English',
        value: 'en',
    },
    {
        id: getNextId(),
        name: '🇷🇺 Русский',
        value: 'ru',
    },
];
