import React, { useState } from 'react';
import { BellIcon, UserAddIcon, ClipboardListIcon, UsersIcon, CogIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import { FaUser, FaBriefcase, FaBell, FaLock } from 'react-icons/fa';
function NotificationsPage() {
  const [desktopNotifications, setDesktopNotifications] = useState(false);
  const [highlightOption, setHighlightOption] = useState("Show all dates");

  return (
    <div className="min-h-screen bg-gray-900 flex text-gray-300">
      {/* Sidebar */}
      <SideBar/>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-200">Notifications</h2>

        {/* Desktop Notifications */}
        <div className="bg-gray-800 p-4 rounded shadow mb-6">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-300">Receive notifications directly on my Windows</p>
            <button
              className={`py-2 px-4 ${desktopNotifications ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'}`}
              onClick={() => setDesktopNotifications(!desktopNotifications)}
            >
              {desktopNotifications ? 'Enabled' : 'Enable desktop notifications'}
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-2">Receive notifications directly on my device.</p>
        </div>

        {/* System Notifications */}
        <div className="bg-gray-800 p-4 rounded shadow">
          <h3 className="font-semibold mb-4 text-gray-300">Choose which notifications you would like to receive</h3>
          <div className="grid grid-cols-3 gap-4 text-gray-400">
            <div></div>
            <div className="font-semibold">In StaffSphere</div>
            <div className="font-semibold">Email</div>
          </div>

          {/* Collaboration Section */}
          <div className="mt-6">
            <h4 className="font-semibold text-lg mb-4 text-gray-300">Collaboration</h4>
            <div className="space-y-4">
              {/* Assignments to items */}
              <div className="grid grid-cols-3 items-center">
                <div className="flex items-center space-x-2">
                  <ClipboardListIcon className="w-6 h-6 text-blue-400" />
                  <span className="text-lg">Assignments to items</span>
                </div>
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-400 bg-gray-700" />
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-400 bg-gray-700" />
              </div>

              {/* Invitations to boards, items, & teams */}
              <div className="grid grid-cols-3 items-center">
                <div className="flex items-center space-x-2">
                  <UserAddIcon className="w-6 h-6 text-blue-400" />
                  <span className="text-lg">Invitations to boards, items, & teams</span>
                </div>
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-400 bg-gray-700" />
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-400 bg-gray-700" />
              </div>

              {/* Automations */}
              <div className="grid grid-cols-3 items-center">
                <div className="flex items-center space-x-2">
                  <CogIcon className="w-6 h-6 text-blue-400" />
                  <span className="text-lg">Automations</span>
                </div>
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-400 bg-gray-700" />
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-400 bg-gray-700" />
              </div>

              {/* Requests to access boards & dashboards */}
              <div className="grid grid-cols-3 items-center">
                <div className="flex items-center space-x-2">
                  <UsersIcon className="w-6 h-6 text-blue-400" />
                  <span className="text-lg">Requests to access boards & dashboards</span>
                </div>
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-400 bg-gray-700" />
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-400 bg-gray-700" />
              </div>
            </div>
          </div>

          {/* Admin Section */}
          <div className="mt-6">
            <h4 className="font-semibold text-lg mb-4 text-gray-300">Admin</h4>
            <div className="space-y-4">
              {/* Signed up with an email address from my account domain */}
              <div className="grid grid-cols-3 items-center">
                <div className="flex items-center space-x-2">
                  <UserAddIcon className="w-6 h-6 text-blue-400" />
                  <span className="text-lg">Signed up with an email address from my account domain</span>
                </div>
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-400 bg-gray-700" />
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-400 bg-gray-700" />
              </div>
            </div>
          </div>

          {/* Digest Section */}
          <div className="mt-6">
            <h4 className="font-semibold text-lg mb-4 text-gray-300">Digest</h4>
            <div className="space-y-4 p-4 bg-gray-700 rounded shadow-inner">
              {/* My highlights */}
              <div className="grid grid-cols-3 items-center">
                <div className="flex items-center space-x-2">
                  <BellIcon className="w-6 h-6 text-blue-400" />
                  <span className="text-lg font-semibold">My highlights</span>
                </div>
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-400 bg-gray-800" />
                <input type="checkbox" className="form-checkbox h-6 w-6 text-blue-400 bg-gray-800" />
              </div>

              {/* Show all dates / Show only deadlines */}
              <div className="flex flex-col space-y-4 mt-4">
                <div className="flex items-center space-x-4">
                  <input
                    type="radio"
                    name="highlight"
                    value="Show all dates"
                    checked={highlightOption === "Show all dates"}
                    onChange={(e) => setHighlightOption(e.target.value)}
                    className="form-radio h-5 w-5 text-blue-400 bg-gray-700"
                  />
                  <label className="text-lg">Show all dates</label>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="radio"
                    name="highlight"
                    value="Show only deadlines"
                    checked={highlightOption === "Show only deadlines"}
                    onChange={(e) => setHighlightOption(e.target.value)}
                    className="form-radio h-5 w-5 text-blue-400 bg-gray-700"
                  />
                  <label className="text-lg">Show only deadlines</label>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Notifications Toggle */}
          <div className="mt-6 flex justify-between items-center bg-gray-700 p-4 rounded">
            <span className="text-lg font-semibold">Desktop notifications</span>
            <div className="flex items-center">
              <label htmlFor="desktopNotifications" className="mr-4 text-gray-400">
                Disable
              </label>
              <div
                className={`w-12 h-6 flex items-center bg-gray-600 rounded-full p-1 cursor-pointer ${desktopNotifications ? 'bg-blue-500' : ''}`}
                onClick={() => setDesktopNotifications(!desktopNotifications)}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow transform duration-300 ease-in-out ${desktopNotifications ? 'translate-x-6' : ''}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationsPage;
