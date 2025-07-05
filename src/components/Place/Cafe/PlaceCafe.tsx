/** @format */

import { motion } from 'framer-motion';
import { useState } from 'react';
import type { ICafeData } from '../../../models/models';
const CafeLanding = ({
    name,
    location,
    phone,
    menuSections,
    galleryImages,
}: ICafeData) => {
    const [activeTab, setActiveTab] = useState<'dinner' | 'lunch' | 'drinks'>(
        'dinner'
    );
    const [activeGallery, setActiveGallery] = useState<'interior' | 'food'>(
        'interior'
    );

    if (
        !menuSections ||
        !menuSections.dinner ||
        !menuSections.lunch ||
        !menuSections.drinks
    ) {
        return (
            <div className='text-center text-2xl mt-20'>
                Menu data is incomplete
            </div>
        );
    }

    if (!galleryImages || !galleryImages.interior || !galleryImages.food) {
        return (
            <div className='text-center text-2xl mt-20'>
                Gallery data is incomplete
            </div>
        );
    }

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className='p-[20px] bg-gradient-to-br from-amber-50 to-rose-50 font-sans'>
            {/* Navigation */}
            <nav className='px-[10%] py-6 flex justify-between items-center sticky top-0 bg-rose-50 bg-opacity-80 backdrop-blur-sm z-50 border-b border-rose-100'>
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    className='text-2xl font-serif text-rose-900'
                >
                    {name}
                </motion.div>
                <motion.div
                    className='flex space-x-8'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <a href='#home' className='text-rose-800'>
                        Home
                    </a>
                    <a href='#menu' className='text-rose-800'>
                        Menu
                    </a>
                    <a href='#gallery' className='text-rose-800'>
                        Gallery
                    </a>
                    <a href='#contact' className='text-rose-800'>
                        Contact
                    </a>
                </motion.div>
            </nav>

            {/* Hero Section */}
            <section id='home' className='px-[10%] py-20'>
                <motion.div
                    variants={container}
                    initial='hidden'
                    animate='show'
                    className='grid md:grid-cols-2 gap-12 items-center'
                >
                    <motion.div variants={item}>
                        <h1 className='text-5xl md:text-6xl font-serif text-rose-900 mb-6 leading-tight'>
                            Taste the{' '}
                            <span className='text-amber-600'>Authentic</span>{' '}
                            Flavors of Gyumri
                        </h1>
                        <p className='text-rose-700 mb-8 text-lg'>
                            Where Armenian tradition meets Italian passion in
                            every bite.
                        </p>
                        <div className='flex space-x-4'>
                            <a
                                href='#menu'
                                className='bg-rose-800 text-white px-6 py-3 rounded-full shadow-lg'
                            >
                                View Menu
                            </a>
                            <a
                                href='#contact'
                                className='border-2 border-rose-800 text-rose-800 px-6 py-3 rounded-full'
                            >
                                Book a Table
                            </a>
                        </div>
                    </motion.div>

                    <motion.div variants={item} className='relative'>
                        <div className='w-full h-96 bg-rose-200 rounded-2xl shadow-xl overflow-hidden'>
                            <img
                                src='../../../public/mainFlorence.png'
                                className='h-[70vh]'
                                alt='Florence Café exterior'
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Menu Section */}
            <section
                id='menu'
                className='px-[10%] py-20 bg-white bg-opacity-50 backdrop-blur-sm'
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className='text-3xl font-serif text-center text-rose-900 mb-8'>
                        Our Menu
                    </h2>

                    <div className='flex justify-center mb-12'>
                        <div className='inline-flex rounded-full p-1 bg-rose-100'>
                            {(
                                ['dinner', 'lunch', 'drinks'] as Array<
                                    'dinner' | 'lunch' | 'drinks'
                                >
                            ).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-2 rounded-full capitalize ${activeTab === tab ? 'bg-rose-800 text-white' : 'text-rose-800'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
                        {menuSections[activeTab]?.map((item) => (
                            <div
                                key={item.name}
                                className='bg-white p-6 rounded-xl shadow-md flex justify-between'
                            >
                                <div>
                                    <h3 className='text-xl font-semibold text-rose-800'>
                                        {item.name}
                                    </h3>
                                    <p className='text-rose-600 mt-1'>
                                        {item.description}
                                    </p>
                                </div>
                                <div className='text-amber-700 font-bold text-lg whitespace-nowrap ml-4'>
                                    {item.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Gallery Section */}
            <section id='gallery' className='px-[10%] py-20'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className='text-3xl font-serif text-center text-rose-900 mb-12'>
                        Gallery
                    </h2>

                    <div className='flex justify-center mb-8'>
                        <div className='inline-flex rounded-md p-1 bg-rose-100'>
                            {(
                                ['interior', 'food'] as Array<
                                    'interior' | 'food'
                                >
                            ).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveGallery(tab)}
                                    className={`px-6 py-2 rounded-md capitalize ${activeGallery === tab ? 'bg-rose-800 text-white' : 'text-rose-800'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        {galleryImages[activeGallery].map((img, index) => (
                            <div
                                key={index}
                                className='aspect-square rounded-lg overflow-hidden shadow-md'
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Dining Info Section */}
            <section className='px-[10%] py-20 bg-rose-800 text-rose-50'>
                <div className='max-w-6xl mx-auto'>
                    <h2 className='text-3xl font-serif text-center mb-16'>
                        Dining Information
                    </h2>

                    <div className='grid md:grid-cols-3 gap-12'>
                        <div className='bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm'>
                            <h3 className='text-xl font-semibold mb-4'>
                                Hours
                            </h3>
                            <ul className='space-y-3'>
                                <li className='flex justify-between border-b border-rose-700 pb-2'>
                                    <span>Monday - Friday</span>
                                    <span>11:00 - 23:00</span>
                                </li>
                                <li className='flex justify-between border-b border-rose-700 pb-2'>
                                    <span>Saturday</span>
                                    <span>10:00 - 00:00</span>
                                </li>
                                <li className='flex justify-between'>
                                    <span>Sunday</span>
                                    <span>10:00 - 22:00</span>
                                </li>
                            </ul>
                        </div>

                        <div className='bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm'>
                            <h3 className='text-xl font-semibold mb-4'>
                                Price Range
                            </h3>
                            <div className='space-y-4'>
                                <div>
                                    <h4 className='font-medium'>Lunch</h4>
                                    <p className='text-rose-200'>
                                        ₾15 - ₾30 per person
                                    </p>
                                </div>
                                <div>
                                    <h4 className='font-medium'>Dinner</h4>
                                    <p className='text-rose-200'>
                                        ₾25 - ₾50 per person
                                    </p>
                                </div>
                                <div>
                                    <h4 className='font-medium'>Wine</h4>
                                    <p className='text-rose-200'>
                                        ₾8 - ₾15 per glass
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm'>
                            <h3 className='text-xl font-semibold mb-4'>
                                Special Features
                            </h3>
                            <ul className='space-y-3'>
                                <li className='flex items-start'>
                                    <span className='mr-2'>🎵</span>
                                    <span>
                                        Live music Friday & Saturday nights
                                    </span>
                                </li>
                                <li className='flex items-start'>
                                    <span className='mr-2'>🏛️</span>
                                    <span>Historic 19th century building</span>
                                </li>
                                <li className='flex items-start'>
                                    <span className='mr-2'>🍷</span>
                                    <span>
                                        Wine cellar with Armenian/Italian
                                        selection
                                    </span>
                                </li>
                                <li className='flex items-start'>
                                    <span className='mr-2'>🌿</span>
                                    <span>Seasonal outdoor terrace</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Footer */}
            <footer
                id='contact'
                className='bg-rose-900 text-rose-100 p-12 px-[10%]'
            >
                <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-8'>
                    <div>
                        <h4 className='text-xl font-serif mb-4'>{name}</h4>
                        <p className='mb-4'>{location}</p>
                        <p>{phone}</p>
                    </div>

                    <div>
                        <h4 className='text-xl font-serif mb-4'>
                            Reservations
                        </h4>
                        <p className='mb-2'>
                            For groups of 6+ please call ahead
                        </p>
                        <p>Private events available</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CafeLanding;
