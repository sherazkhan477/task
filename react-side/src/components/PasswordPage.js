import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBriefcase, FaBell, FaLock } from 'react-icons/fa';
import SideBar from './SideBar';
function PasswordPage() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert("New passwords do not match.");
      return;
    }
    // Handle the password change logic here
    alert("Password changed successfully.");
  };

  return (
    <div className="flex min-h-screen text-gray-300 bg-gray-900">
      {/* Sidebar */}
    
     <SideBar/>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        <h2 className="mb-4 text-2xl font-bold text-gray-200">Change Password</h2>

        {/* Change Password Form */}
        <div className="p-4 bg-gray-800 rounded shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-semibold text-gray-300">Current Password</label>
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="block p-1 mt-1 text-sm text-gray-300 bg-gray-900 border border-gray-600 rounded w-80"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <a href="/reset-password" className="text-sm text-blue-400">Forgot your password?</a>
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-semibold text-gray-300">New Password</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="block p-1 mt-1 text-sm text-gray-300 bg-gray-900 border border-gray-600 rounded w-80"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmNewPassword" className="block text-sm font-semibold text-gray-300">Confirm New Password</label>
              <input
                type="password"
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className="block p-1 mt-1 text-sm text-gray-300 bg-gray-900 border border-gray-600 rounded w-80"
                required
              />
            </div>

            <button
              type="submit"
              className="px-2 py-1 text-sm text-white bg-blue-500 rounded w-80 hover:bg-blue-600"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PasswordPage;
