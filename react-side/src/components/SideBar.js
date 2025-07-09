// Sidebar Navigation in both PasswordPage.js and WorkingStatusPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBriefcase, FaBell, FaLock } from 'react-icons/fa';

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-4">Profile</h2>
      <nav className="space-y-2">
        <Link to="/personal-info" className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors">
          <FaUser className="mr-3" />
          <span>Personal info</span>
        </Link>
        <Link to="/working-status" className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors">
          <FaBriefcase className="mr-3" />
          <span>Working status</span>
        </Link>
        <Link to="/notifications" className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors">
          <FaBell className="mr-3" />
          <span>Notifications</span>
        </Link>
        <Link to="/password" className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors">
          <FaLock className="mr-3" />
          <span>Password</span>
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
