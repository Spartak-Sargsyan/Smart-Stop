/** @format */

import { useState } from 'react';
import { gyumriHotels } from '../../data/smarthotel';
import type { HotelWithRooms } from '../../data/smarthotel';
import { useLanguage } from '../Language';
import Button from '../Button/Button';

const SmartChoicePage = () => {
    const [maxPrice, setMaxPrice] = useState<number>(150);
    const { language } = useLanguage();
    const hotels: HotelWithRooms[] =
        gyumriHotels[language as keyof typeof gyumriHotels];

    const filteredHotels = hotels
        .map((hotel) => ({
            ...hotel,
            rooms: hotel.rooms.filter(
                (room) => room.pricePerNightUSD <= maxPrice
            ),
        }))
        .filter((hotel) => hotel.rooms.length > 0);

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-100 to-white py-10 px-4'>
            <Button title='Back to map' position='top-left' to='/' />
            <div className='max-w-5xl mx-auto'>
                <h1 className='text-4xl font-bold text-center mb-8 text-blue-700'>
                    Smart Hotel Choice
                </h1>

                <div className='flex flex-col items-center mb-10'>
                    <label className='text-lg font-medium mb-2'>
                        Choose your budget (USD):
                    </label>
                    <input
                        type='range'
                        min={30}
                        max={150}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className='w-64 accent-blue-600'
                    />
                    <span className='mt-2 text-blue-800 font-semibold text-lg'>
                        Up to ${maxPrice}
                    </span>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {filteredHotels.map((hotel, i) => (
                        <div
                            key={i}
                            className='bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300'
                        >
                            <h2 className='text-2xl font-semibold text-gray-800 mb-1'>
                                {hotel.name}
                            </h2>
                            <p className='text-sm text-gray-500 mb-3'>
                                {hotel.address}
                            </p>
                            <div className='space-y-2'>
                                {hotel.rooms.map((room, idx) => (
                                    <div
                                        key={idx}
                                        className='bg-blue-50 border border-blue-200 rounded-md p-3'
                                    >
                                        <div className='flex justify-between'>
                                            <span className='font-medium text-blue-700'>
                                                {room.name}
                                            </span>
                                            <span className='text-blue-900 font-semibold'>
                                                ${room.pricePerNightUSD}
                                            </span>
                                        </div>
                                        <p className='text-sm text-gray-600 mt-1'>
                                            {room.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {filteredHotels.length === 0 && (
                    <p className='text-center text-gray-500 mt-10'>
                        No hotels found within this price range.
                    </p>
                )}
            </div>
        </div>
    );
};

export default SmartChoicePage;
