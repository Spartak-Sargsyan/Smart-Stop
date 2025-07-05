/** @format */

type Props = {
    onSelect: (type: string) => void;
    onClose: () => void;
};

const TypeSelectionPopup = ({ onSelect, onClose }: Props) => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 z-40 flex items-center justify-center'>
            <div className='bg-white rounded-lg shadow-xl p-6 w-80 space-y-4'>
                <h2 className='text-xl font-semibold text-center mb-2 text-gray-800'>
                    Choose Type
                </h2>

                {['hotel', 'cafe', 'restaurant'].map((type) => (
                    <button
                        key={type}
                        onClick={() => onSelect(type)}
                        className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                ))}

                <button
                    onClick={onClose}
                    className='w-full text-red-500 hover:text-red-600 text-sm'
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default TypeSelectionPopup;
