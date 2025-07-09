// import React from 'react';
// import { FaBell, FaUserCircle, FaUserPlus, FaNewspaper } from 'react-icons/fa';
// import { LuFlower } from "react-icons/lu";
// import SearchBar from '../SearchBar';

// const DNavbar = () => {
//     return (
//         <nav className="flex items-center justify-between px-4 py-2 bg-gray-900 shadow-md z-50">
//             {/* Website Name */}
//             <div className="flex items-center text-sm">
//                 <LuFlower className='text-purple-500 h-5 w-5'/>
//                 <span className="font-semibold text-white">&nbsp;StaffSpherehey</span>
//                 <span className='text-white font-thin'>&nbsp;Work Management</span>
//             </div>

//             <div className="flex items-center gap-x-4 justify-around">  
//                 <SearchBar/>

//                 {/* Notification Icon */}
//                 <div className="relative">
//                     <FaBell 
//                         className="w-4 h-4 text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
//                     />
//                 </div>

//                 {/* Update Feed Icon */}
//                 <div className="relative">
//                     <FaNewspaper 
//                         className="w-4 h-4 text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
//                     />
//                 </div>

//                 {/* Invite Members Icon */}
//                 <div className="relative">
//                     <FaUserPlus 
//                         className="w-4 h-4 text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
//                     />
//                 </div>

//                 {/* User Profile Icon with Dropdown */}
//                 {/* <div className="relative">
//                     <button className="text-white group focus:outline-none">
//                         <FaUserCircle className="w-4 h-4 transition-transform duration-300 transform hover:scale-110" />
//                         <div className="absolute right-0 mt-1 w-36 bg-white rounded-lg shadow-lg hidden group-focus:block">
//                             <ul className="py-2 text-sm text-gray-700">
//                                 <li className="px-3 py-2 hover:bg-gray-100 flex items-center gap-x-2">
//                                     Profile1
//                                 </li>
//                                 <li className="px-3 py-2 hover:bg-gray-100 flex items-center gap-x-2">
//                                     Settings
//                                 </li>
//                                 <li className="px-3 py-2 hover:bg-gray-100 flex items-center gap-x-2">
//                                     Logout
//                                 </li>
//                             </ul>
//                         </div>
//                     </button>
//                 </div> */}
//             </div>
//         </nav>
//     );
// };

// export default DNavbar;

import React from 'react';
import { FaBell, FaUserCircle, FaUserPlus, FaNewspaper } from 'react-icons/fa';
import { LuFlower } from "react-icons/lu";
import SearchBar from '../SearchBar';

const DNavbar = () => {
    return (
        <nav className="flex items-center justify-between px-4 py-2 bg-gray-900 shadow-md z-50">
            {/* Website Name */}
            <div className="flex items-center text-sm">
                <LuFlower className='text-purple-500 h-5 w-5'/>
                <span className="font-semibold text-white">&nbsp;StaffSpherehey</span>
                <span className='text-white font-thin'>&nbsp;Work Management</span>
            </div>

            <div className="flex items-center gap-x-4 justify-around">  
                <SearchBar/>

                {/* Notification Icon */}
                <div className="relative">
                    <FaBell 
                        className="w-4 h-4 text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
                    />
                </div>

                {/* Update Feed Icon */}
                <div className="relative">
                    <FaNewspaper 
                        className="w-4 h-4 text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
                    />
                </div>

                {/* Invite Members Icon */}
                <div className="relative">
                    <FaUserPlus 
                        className="w-4 h-4 text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
                    />
                </div>

                {/* User Profile Icon with Dropdown */}
                {/* <div className="relative">
                    <button className="text-white group focus:outline-none">
                        <FaUserCircle className="w-4 h-4 transition-transform duration-300 transform hover:scale-110" />
                        <div className="absolute right-0 mt-1 w-36 bg-white rounded-lg shadow-lg hidden group-focus:block">
                            <ul className="py-2 text-sm text-gray-700">
                                <li className="px-3 py-2 hover:bg-gray-100 flex items-center gap-x-2">
                                    Profile1
                                </li>
                                <li className="px-3 py-2 hover:bg-gray-100 flex items-center gap-x-2">
                                    Settings
                                </li>
                                <li className="px-3 py-2 hover:bg-gray-100 flex items-center gap-x-2">
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </button>
                </div> */}
            </div>
        </nav>
    );
};

export default DNavbar;