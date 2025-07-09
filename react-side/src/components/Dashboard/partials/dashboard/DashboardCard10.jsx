import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../../context/AuthContext';
import axios from 'axios';
import {jwtDecode} from "jwt-decode"; // Corrected import

function DashboardCard10() {
  const { user } = useContext(AuthContext);
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tokenString = localStorage.getItem("authTokens");
    if (!tokenString) {
      console.error("No authentication token found.");
      setLoading(false);
      return;
    }

    let token;
    try {
      token = JSON.parse(tokenString);
    } catch (error) {
      console.error("Error parsing auth tokens:", error);
      setLoading(false);
      return;
    }

    let decoded;
    try {
      decoded = jwtDecode(token.access); // Adjust based on your token structure
    } catch (error) {
      console.error("Error decoding token:", error);
      setLoading(false);
      return;
    }

    const user_id = decoded.user_id;
    if (!user_id) {
      console.error("User ID is missing in the token.");
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        console.log('Fetching profile for user ID:', user_id);
        const response = await axios.get(`http://127.0.0.1:8000/api/profile/${user_id}`, {
          headers: {
            // If your API requires the Authorization header, uncomment and adjust the line below:
            // 'Authorization': `Bearer ${token.access}`,
            "Content-Type": "application/json", // Changed to application/json if you're fetching JSON data
          }
        });
        console.log(response.data);
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optional: Add a loading state
  }

  return (
    <div className="shadow-sm col-span-full xl:col-span-6 bg-[#769FCD] dark:bg-[#070F2B] ounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Profiles</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            {/* Table header */}
            <thead className="text-xs font-semibold text-gray-400 uppercase dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Location</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Joining Date</div>
                </th>
                {/* <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Birthdate</div>
                </th> */}
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Phone</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
              {
                profileData.map(profile => (
                  <tr key={profile.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 mr-2 shrink-0 sm:mr-3">
                          <img src={`http://127.0.0.1:8000${profile.image}`} className='w-8 h-8 border border-black-800  rounded-full' alt="Profile" width="40" height="40" />
                        </div>
                        <div className="font-medium text-gray-800 dark:text-gray-100">{profile.username || user.username}</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{profile.email || user.email}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="font-medium text-left text-green-500">{profile.location}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-md text-center">{profile.joining_date}</div>
                    </td>
                    {/* <td className="p-2 whitespace-nowrap">
                      <div className="text-md text-center">{profile.birthday}</div>
                    </td> */}
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-md text-center">{profile.phone}</div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default DashboardCard10;
