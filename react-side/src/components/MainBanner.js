import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MainBanner = () => {
    const containerVariants = {
        hidden: {
            y: 10,
            opacity: 0
        },
        visible: {
            y: 2,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.5
            }
        }
    };

    return (
        <motion.div
            className="bg-[#EEF1FF] text-center pt-36 pb-20 px-4 dark:bg-[#070F2B] dark:text-[#BBE1FA]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h1 className="text-5xl font-bold text-[#0F4C75] mb-4 dark:text-[#BBE1FA]">Manage your entire team in one App</h1>
            <p className="text-lg mb-6 dark:text-[#BBE1FA]">Connecteam simplifies everyday work with deskless teams and keeps them connected, so you can focus on growing the business.</p>
            <div className="space-x-4">
                <Link to="/Form">
                <button
                    className="bg-[#3282B8] text-sm text-white font-bold py-[10px] px-[12px] rounded-full hover:bg-[#0F4C75] transition-all duration-300 dark:bg-[#1B1A55] dark:hover:bg-[#0F4C75]"
                >
                    Start free trial
                </button>
                </Link>
            </div>
        </motion.div>
    );
};

export default MainBanner;
