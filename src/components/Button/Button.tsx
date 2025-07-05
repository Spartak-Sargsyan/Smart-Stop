/** @format */

import { Link } from 'react-router-dom';

type ButtonProps = {
    title: string | React.ReactNode;
    to?: string;
    onClick?: () => void;
    position?: 'top-left' | 'bottom-right';
};

const Button = ({
    title,
    to,
    onClick,
    position = 'bottom-right',
}: ButtonProps) => {
    const baseStyle =
        'z-50 font-bold py-2 px-4 rounded-lg shadow-lg transition duration-200 transform animate-pulseScale';

    const positionStyle =
        position === 'top-left'
            ? 'absolute top-4 left-4 bg-blue-600 hover:bg-blue-700'
            : 'fixed bottom-4 right-4 bg-green-600 hover:bg-green-700';

    const finalClass = `${baseStyle} ${positionStyle} text-white`;

    // Если есть to — это Link
    if (to) {
        return (
            <Link to={to} className={finalClass}>
                {title}
            </Link>
        );
    }

    // Иначе обычная кнопка
    return (
        <button onClick={onClick} className={finalClass}>
            {title}
        </button>
    );
};

export default Button;
