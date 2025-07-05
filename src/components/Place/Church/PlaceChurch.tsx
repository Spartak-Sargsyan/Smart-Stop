/** @format */

import { motion } from 'framer-motion';
import type { IChurch } from '../../../models/placemodel';
import { useLanguage } from '../../Language';
// Анимации
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ChurchLandingPage = ({ en, ru, hy, galleryChurch }: IChurch) => {
    const { language } = useLanguage();
    const localized = language === 'ru' ? ru : language === 'hy' ? hy : en;

    return (
        <div className='min-h-screen bg-white'>
            {/* Навигация */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='bg-white shadow-md py-4 px-6 fixed w-full z-50'
            >
                <div className='container mx-auto flex justify-between items-center'>
                    <div className='flex items-center space-x-2'>
                        <motion.svg
                            whileHover={{ rotate: 15 }}
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-8 w-8 text-armenian-red'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                            />
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                            />
                        </motion.svg>
                        
                        <span className='text-xl font-serif font-bold text-armenian-blue'>
                            {localized.name}
                        </span>
                    </div>
                    <div className='hidden md:flex space-x-8'>
                        <motion.a
                            whileHover={{ color: '#D90026' }}
                            href='#about'
                            className='text-gray-700'
                        >
                            {localized.aboutHeading}
                        </motion.a>
                        <motion.a
                            whileHover={{ color: '#D90026' }}
                            href='#history'
                            className='text-gray-700'
                        >
                            {localized.storyHeading}
                        </motion.a>
                        <motion.a
                            whileHover={{ color: '#D90026' }}
                            href='#gallery'
                            className='text-gray-700'
                        >
                            {localized.photoHeading}
                        </motion.a>
                    </div>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className='md:hidden'
                    >
                        <svg
                            className='w-6 h-6'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </motion.button>
                </div>
            </motion.nav>

            {/* Герой-секция */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='relative h-screen w-full overflow-hidden flex items-center justify-center pt-16'
            >
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className='absolute inset-0 bg-black opacity-40 z-0'
                />
                <motion.img
                    src='/img/church/SurbAmenaprkich/amenprkich.jpg'
                    alt='Церковь Сурб Аменапркич'
                    className='absolute inset-0 w-full h-full object-cover z-0'
                />
                <motion.div
                    variants={staggerContainer}
                    initial='hidden'
                    animate='show'
                    className='relative z-10 text-center px-4'
                >
                    <motion.h1
                        variants={fadeInUp}
                        className='text-4xl md:text-6xl font-serif font-bold text-white mb-4'
                    >
                        {localized.name}
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className='text-xl text-gold mb-8'
                    >
                        {localized.miniDesc}
                    </motion.p>
                    <motion.p
                        variants={fadeInUp}
                        className='text-xl text-white mb-8'
                    >
                        {localized.location}
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* О церкви */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                id='about'
                className='py-16 px-6 bg-white'
            >
                <div className='container mx-auto max-w-4xl'>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className='text-3xl font-serif font-bold text-armenian-blue text-center mb-12'
                    >
                        {localized.aboutHeading}
                    </motion.h2>
                    <div className='flex flex-col md:flex-row items-center gap-8'>
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className='md:w-1/2'
                        >
                            <img
                                src='/img/church/SurbAmenaprkich/nersic.jpg'
                                alt='Интерьер церкви'
                                className='rounded-lg shadow-xl w-full h-auto'
                            />
                        </motion.div>
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className='md:w-1/2'
                        >
                            {localized.about.map((text, index) => (
                                <p key={index} className='text-gray-700 mb-4'>
                                    {text.text}
                                </p>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* История */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                id='history'
                className='py-16 px-6 bg-gray-50'
            >
                <div className='container mx-auto max-w-4xl'>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className='text-3xl font-serif font-bold text-armenian-blue text-center mb-12'
                    >
                        {localized.storyHeading}
                    </motion.h2>
                    <div className='grid md:grid-cols-2 gap-8'>
                        {localized.story.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'
                            >
                                <h3
                                    className={`text-xl font-bold ${item.color} mb-3`}
                                >
                                    {item.title}
                                </h3>
                                <p className='text-gray-700'>{item.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Галерея */}
            <section id='gallery' className='py-16 px-6 bg-white'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='container mx-auto'
                >
                    <h2 className='text-3xl font-serif font-bold text-armenian-blue text-center mb-12'>
                        {localized.photoHeading}
                    </h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {galleryChurch.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: 'spring' }}
                                className='overflow-hidden rounded-lg shadow-lg'
                            >
                                <img
                                    src={`/img/church/SurbAmenaprkich/${item.src}`}
                                    alt={`Фото церкви ${item.alt}`}
                                    className='w-full h-64 object-cover cursor-pointer'
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default ChurchLandingPage;
