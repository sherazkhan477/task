// Dropdown Component

import React, { useState, useRef, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaUserCog, FaCogs, FaLifeRing, FaSignOutAlt } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { MdVerified, MdSearch } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            {/* Dropdown Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
            >
                <FaUser className="w-4 h-4 text-white hover:text-gray-300" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className={`absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 transform transition-transform transition-opacity duration-300 ease-out ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                        }`}
                >
                    <div className="p-4 border-b border-gray-200">
                        {/* Header */}
                        <div className="flex space-x-4 items-center">
                            <img
                                src="https://avatars.githubusercontent.com/u/499550?v=4"
                                alt="avatar"
                                className="w-12 h-12 rounded-full"
                            />
                            <div className="flex-1">
                                <div className="text-lg font-semibold text-gray-900">
                                    Evan You
                                    <MdVerified className="inline-block ml-2 text-cyan-400" />
                                </div>
                                <p className="text-gray-500">evanyou@gmail.com</p>
                            </div>
                            <FiSettings className="text-gray-400 w-6 h-6" />
                        </div>
                    </div>
                    <nav className="py-2">
                        <a href="/personal-info" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
                            <FaUserCog className="w-6 h-6" />
                            <span className="ml-3">Account Settings</span>
                        </a>
                        <a href="/notifications" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
                            <MdSearch className="w-6 h-6" />
                            <span className="ml-3">Notification</span>
                        </a>
                        <a href="/password" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
                            <FaCogs className="w-6 h-6" />
                            <span className="ml-3">Password</span>
                        </a>
                        <a href="/working-status" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
                            <FiFileText className="w-6 h-6" />
                            <span className="ml-3">Working Status</span>
                        </a>
                        
                    </nav>
                    <div className="px-4 py-4 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-900">Free Plan</p>
                                <p className="text-gray-500">12,000 views</p>
                            </div>
                            <button
                                type="button"
                                className="px-4 py-2 text-indigo-500 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
                            >
                                Upgrade
                            </button>
                        </div>
                    </div>
                    <div className="border-t border-gray-200">
                        <button
                            type="button"
                            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 w-full"
                        >
                            <FaSignOutAlt className="w-6 h-6" />
                            <span className="ml-3">Logout</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
