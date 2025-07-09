import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';


const SearchBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const searchBarRef = useRef(null);

    // Function to close the search bar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchBarRef]);

    // Toggle search bar expansion
    const toggleSearchBar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="relative" ref={searchBarRef}>
            <div className={`transition-all duration-300 ease-in-out flex items-center bg-gray-700 rounded-full ${isExpanded ? 'w-64 pl-3 pr-2 opacity-100' : 'w-7 p-1 opacity-100'} border border-gray-600 shadow-sm`}>
                {/* Search Icon */}
                <button
                    onClick={toggleSearchBar}
                    className="text-gray-400 focus:outline-none"
                >
                    <FaSearch className="text-white hover:text-gray-300 transition-colors duration-300 h-3 w-3" />
                </button>

                {/* Input Field */}
                <input
                    type="text"
                    className={`transition-all duration-300 ease-in-out w-full bg-transparent border-none outline-none text-white placeholder-gray-400 text-sm ${isExpanded ? 'ml-2 block' : 'ml-0 hidden'}`}
                    placeholder="Search..."
                />
            </div>
        </div>
    );
};

export default SearchBar;
