import React from 'react';
import { FaUser, FaBriefcase, FaBell, FaGlobe, FaLock, FaHistory } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
function WorkingStatusPage() {
  return (
    <div className="flex min-h-screen text-gray-100 bg-gray-900">
     <SideBar/>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="mb-8 text-3xl font-bold">Working status</h1>
        <div className="space-y-6">
          {/* Status Options */}
          <div>
            <p className="mb-4">Let everyone know your status</p>
            <div className="grid max-w-2xl grid-cols-3 gap-6">
              {/* First Row */}
              <div className="flex items-center space-x-2">
                <input type="radio" name="status" id="in-office" className="transform scale-500" />
                <label htmlFor="in-office">In the office</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="status" id="working-from-home" className="transform scale-500" />
                <label htmlFor="working-from-home">Working from home</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="status" id="out-of-office" className="transform scale-500" />
                <label htmlFor="out-of-office">Out of office</label>
              </div>

              {/* Second Row */}
              <div className="flex items-center space-x-2">
                <input type="radio" name="status" id="out-sick" className="transform scale-500" />
                <label htmlFor="out-sick">Out sick</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="status" id="on-break" className="transform scale-500" />
                <label htmlFor="on-break">On break</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name="status" id="working-outside" className="transform scale-500" />
                <label htmlFor="working-outside">Working outside</label>
              </div>

              {/* Third Row */}
              <div className="flex items-center space-x-2">
                <input type="radio" name="status" id="family-time" className="transform scale-500" />
                <label htmlFor="family-time">Family time</label>
              </div>
              <div className="flex items-center col-span-2 space-x-2">
                <input type="radio" name="status" id="do-not-disturb" className="transform scale-500" />
                <label htmlFor="do-not-disturb">Do not disturb</label>
              </div>
            </div>
          </div>

          {/* Date Picker (Optional) */}
          <div className="max-w-md">
            <label htmlFor="dates" className="block mb-2">
              Choose dates (optional)
            </label>
            <input type="date" id="dates" className="w-full p-2 text-gray-100 bg-gray-800 rounded" />
          </div>

          {/* Notification Control */}
          <div>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="disable-notifications" className="mr-2 transform scale-500" />
              <label htmlFor="disable-notifications">Disable email and mobile notifications while not in the office</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="disable-online-indication" className="mr-2 transform scale-500" />
              <label htmlFor="disable-online-indication">Disable online indication (it also means that you won't see if other people are online)</label>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WorkingStatusPage;
