/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'armenian-red': '#D90026', // Традиционный армянский красный
                'armenian-blue': '#0033A0', // Традиционный синий
                gold: '#FFD700', // Золотой для акцентов
            },
            keyframes: {
                pulseScale: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.08)' },
                },
            },
            animation: {
                pulseScale: 'pulseScale 1.5s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
