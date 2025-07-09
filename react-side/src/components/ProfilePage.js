// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaUser, FaBriefcase, FaBell, FaLock } from 'react-icons/fa';
// import SideBar from './SideBar';
// const ProfilePage = () => {
//     // State for email and modal control
//     const [email, setEmail] = useState('evanyou@gmail.com');
//     const [editEmail, setEditEmail] = useState(false);
//     const [newEmail, setNewEmail] = useState(email);

//     // State for profile photo and text
//     const [profilePhoto, setProfilePhoto] = useState(null); // Default: no profile picture
//     const [name, setName] = useState('Evan You');
//     const [jobTitle, setJobTitle] = useState('Admin');

//     // State for additional information
//     const [location, setLocation] = useState('');
//     const [phone, setPhone] = useState('');
//     const [mobilePhone, setMobilePhone] = useState('');
//     const [birthday, setBirthday] = useState('');
//     const [workAnniversary, setWorkAnniversary] = useState('');

//     // Function to handle profile photo change
//     const handlePhotoChange = (e) => {
//         const file = e.target.files[0];
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setProfilePhoto(reader.result); // Set the preview image
//         };
//         if (file) {
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleEmailChange = () => {
//         if (newEmail.trim() !== '') {
//             setEmail(newEmail);
//             setEditEmail(false);
//         }
//     };

//     // Trigger file input when the profile photo area is clicked
//     const handlePhotoClick = () => {
//         document.getElementById('fileInput').click();
//     };

//     return (
//       <div className="flex min-h-screen text-gray-300 bg-gray-900">
//             {/* Sidebar */}
//             <SideBar/>
//             {/* <aside className="w-64 p-4 space-y-4 bg-gray-800">
//       <h2 className="mb-4 text-xl font-semibold">Profile</h2>
//       <nav className="space-y-2">
//         <Link to="/personal-info" className="flex items-center p-2 transition-colors rounded-md hover:bg-gray-700">
//           <FaUser className="mr-3" />
//           <span>Personal info</span>
//         </Link>
//         <Link to="/working-status" className="flex items-center p-2 transition-colors rounded-md hover:bg-gray-700">
//           <FaBriefcase className="mr-3" />
//           <span>Working status</span>
//         </Link>
//         <Link to="/notifications" className="flex items-center p-2 transition-colors rounded-md hover:bg-gray-700">
//           <FaBell className="mr-3" />
//           <span>Notifications</span>
//         </Link>
//         <Link to="/password" className="flex items-center p-2 transition-colors rounded-md hover:bg-gray-700">
//           <FaLock className="mr-3" />
//           <span>Password</span>
//         </Link>
//       </nav>
//     </aside> */}
//             {/* Main Content */}
//             <div className="flex flex-col items-center flex-1 py-10 bg-gray-900">
//                 <div className="w-11/12 p-6 bg-gray-800 rounded-lg shadow-lg md:w-2/3 lg:w-1/2">
//                     <h1 className="mb-6 text-3xl font-bold text-white">Profile</h1>

//                     {/* Profile Section */}
//                     <div className="flex flex-col items-center md:flex-row">
//                         {/* Profile Photo */}
//                         <div className="relative cursor-pointer" onClick={handlePhotoClick}>
//                             <div className="flex items-center justify-center w-32 h-32 overflow-hidden text-5xl bg-white rounded-full">
//                                 {profilePhoto ? (
//                                     <img
//                                         src={profilePhoto}
//                                         alt="Profile"
//                                         className="object-cover w-full h-full"
//                                     />
//                                 ) : (
//                                     <span className="text-gray-900">Photo</span>
//                                 )}
//                             </div>
//                             {/* Hidden file input */}
//                             <input
//                                 type="file"
//                                 id="fileInput"
//                                 accept="image/*"
//                                 onChange={handlePhotoChange}
//                                 style={{ display: 'none' }}
//                             />
//                         </div>

//                         {/* Name and Job Title */}
//                         <div className="mt-4 ml-6 text-white md:mt-0">
//                             <h2 className="text-2xl font-semibold">{name}</h2>
//                             <p className="text-gray-400">{jobTitle}</p>
//                         </div>
//                     </div>

//                     {/* Contact Information */}
//                     <div className="mt-8 text-white">
//                         <h3 className="text-lg font-bold">Contact Information</h3>
//                         <div className="mt-4">
//                             <p>Email: {email}</p>
//                             <button
//                                 onClick={() => setEditEmail(true)}
//                                 className="px-4 py-1 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-500"
//                             >
//                                 Change Email
//                             </button>
//                         </div>

//                         {/* Edit Email Modal */}
//                         {editEmail && (
//                             <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
//                                 <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
//                                     <h3 className="mb-4 text-lg font-semibold text-white">
//                                         Change Email Address
//                                     </h3>
//                                     <input
//                                         type="email"
//                                         value={newEmail}
//                                         onChange={(e) => setNewEmail(e.target.value)}
//                                         className="w-full p-2 mb-4 text-white bg-gray-700 rounded-md"
//                                         placeholder="Enter new email address"
//                                     />
//                                     <div className="flex justify-end space-x-4">
//                                         <button
//                                             onClick={() => setEditEmail(false)}
//                                             className="px-4 py-2 text-white bg-gray-600 rounded-md"
//                                         >
//                                             Cancel
//                                         </button>
//                                         <button
//                                             onClick={handleEmailChange}
//                                             className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500"
//                                         >
//                                             Confirm
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Additional Info */}
//                     <div className="mt-6">
//                         <h3 className="text-lg font-bold text-white">Additional Information</h3>
//                         <div className="grid grid-cols-1 gap-6 mt-4 text-gray-400 md:grid-cols-2">

//                             {/* Phone Field */}
//                             <div>
//                                 <label className="block mb-2 font-semibold text-white" htmlFor="phone">Phone:</label>
//                                 <input
//                                     type="text"
//                                     id="phone"
//                                     value={phone}
//                                     onChange={(e) => setPhone(e.target.value)}
//                                     placeholder="Add a phone"
//                                     className="w-full p-2 text-white bg-gray-700 rounded-md"
//                                 />
//                             </div>

//                             {/* Mobile Phone Field */}
//                             <div>
//                                 <label className="block mb-2 font-semibold text-white" htmlFor="mobilePhone">Mobile Phone:</label>
//                                 <input
//                                     type="text"
//                                     id="mobilePhone"
//                                     value={mobilePhone}
//                                     onChange={(e) => setMobilePhone(e.target.value)}
//                                     placeholder="Add a mobile phone"
//                                     className="w-full p-2 text-white bg-gray-700 rounded-md"
//                                 />
//                             </div>

//                             {/* Location Field */}
//                             <div>
//                                 <label className="block mb-2 font-semibold text-white" htmlFor="location">Location:</label>
//                                 <input
//                                     type="text"
//                                     id="location"
//                                     value={location}
//                                     onChange={(e) => setLocation(e.target.value)}
//                                     placeholder="Add a location"
//                                     className="w-full p-2 text-white bg-gray-700 rounded-md"
//                                 />
//                             </div>

//                             {/* Birthday Field */}
//                             <div>
//                                 <label className="block mb-2 font-semibold text-white" htmlFor="birthday">Birthday:</label>
//                                 <input
//                                     type="date"
//                                     id="birthday"
//                                     value={birthday}
//                                     onChange={(e) => setBirthday(e.target.value)}
//                                     className="w-full p-2 text-white bg-gray-700 rounded-md"
//                                 />
//                             </div>

//                             {/* Work Anniversary Field */}
//                             <div>
//                                 <label className="block mb-2 font-semibold text-white" htmlFor="workAnniversary">Work Anniversary:</label>
//                                 <input
//                                     type="date"
//                                     id="workAnniversary"
//                                     value={workAnniversary}
//                                     onChange={(e) => setWorkAnniversary(e.target.value)}
//                                     className="w-full p-2 text-white bg-gray-700 rounded-md"
//                                 />
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProfilePage;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBriefcase, FaBell, FaLock } from "react-icons/fa";
import SideBar from "./SideBar";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

const ProfilePage = () => {
    // State for email and modal control

    // const [email, setEmail] = useState("");
    const [image, setImage] = useState(null);
    // const [username, setUsername] = useState('EvanYou'); // New username state
    // const [editEmail, setEditEmail] = useState(false);
    // const [newEmail, setNewEmail] = useState(email);

    // State for profile photo and text
    // const [profilePhoto, setProfilePhoto] = useState(null); // Default: no profile picture
    // const [name, setName] = useState("Evan You");
    // const [jobTitle, setJobTitle] = useState("Admin");

    // State for additional information
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    // const [mobilePhone, setMobilePhone] = useState('');
    const [birthday, setBirthday] = useState("");
    const [joiningDate, setJoiningDate] = useState("");
    const [items, setItems] = useState([]);

    // Function to handle profile photo change
    // const handlePhotoChange = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setProfilePhoto(reader.result); // Set the preview image
    //     };
    //     if (file) {
    //         reader.readAsDataURL(file);
    //     }
    // };

    // const handleEmailChange = () => {
    //     if (newEmail.trim() !== '') {
    //         setEmail(newEmail);
    //         setEditEmail(false);
    //     }
    // };

    // Trigger file input when the profile photo area is clicked
    const handlePhotoClick = () => {
        document.getElementById("fileInput").click();
    };

    // Submit data to backend
    // const handleSubmit = async () => {
    //     try {
    //         const response = await axios.post('http://localhost:8000/profile', {
    //             username,
    //             email,
    //             location,
    //             phone,
    //             mobilePhone,
    //         });
    //         console.log('Profile updated:', response.data);
    //     } catch (error) {
    //         console.error('Error updating profile:', error);
    //     }
    // };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };


    const { user } = useContext(AuthContext);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("authTokens");

        if (!token) {
            console.error("No authentication token found.");
            return;
        }

        const decoded = jwtDecode(token);
        const user_id = decoded.user_id;

        if (!user || !user_id) {
            console.error("User is not defined or user ID is missing.");
            return;
        }


        const formData = new FormData();

        // formData.append("name", name);
        // formData.append("sku", sku);
        // formData.append("unit", unit);
        // formData.append("is_returnable", isReturnable);
        // formData.append("length", length);
        // formData.append("user", user_id);

        // formData.append("image", image);
        formData.append("location", location);
        formData.append("joining_date", joiningDate);
        formData.append("phone", phone);
        formData.append("birthday", birthday);


        // formData.append("manufacturer", manufacturer);
        // formData.append("brand", brand);
        // formData.append("upc", upc);
        // formData.append("mpn", mpn);
        // formData.append("isbn", isbn);
        // formData.append("selling_price", sellingPrice);
        // formData.append("sales_description", salesDescription);
        // formData.append("sales_account", salesAccount);
        // formData.append("cost", cost);
        // formData.append("purchase_description", purchaseDescription);
        // formData.append("purchase_account", purchaseAccount);
        // formData.append("inventory_account", inventoryAccount);
        // formData.append("opening_stock", openingStock);
        // formData.append("reorder_point", reorderPoint);

        if (image) {
            formData.append("image", image);
        }

        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/profile/new/${user_id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    // "Authorization": `Bearer ${token}`,  // Include the JWT token
                },
            });

            console.log("Item created successfully:", response.data);
            // setSuccessMessage('item added succesfully')

            setImage("");
            setLocation("");
            setBirthday("")
            setJoiningDate("")
            setPhone("")

            // sellingPrice("")
            // setDimensionUnit("")
            // setHeight("")
            // setHeight("")
            // setImage("")
            // setInventoryAccount("")
            // setIsReturnable("")
            // setIsbn("");
        } catch (error) {
            console.error("Error creating item:", error.response?.data || error.message);
        }
    };


    useEffect(() => {
        const token = localStorage.getItem("authTokens");

        if (!token) {
            console.error("No authentication token found.");
            return;
        }

        const decoded = jwtDecode(token);
        const user_id = decoded.user_id;

        if (!user || !user_id) {
            console.error("User is not defined or user ID is missing.");
            return;
        }

        const fetchItems = async () => {
            if (user) {
                try {
                    const response = await axios.get(`http://127.0.0.1:8000/api/profile/${user_id}`);
                    setItems(response.data);
                } catch (error) {
                    console.error("Error fetching items:", error);
                }
            }
        };

        fetchItems();
    }, [user]); // user as a dependency


    return (
        <div className="flex min-h-screen text-gray-300 bg-gray-900">
            {/* Sidebar */}
            <SideBar />
            {/* Main Content */}
            <div className="flex flex-col items-center flex-1 py-10 bg-gray-900">
                <div className="w-11/12 p-6 bg-gray-800 rounded-lg shadow-lg md:w-2/3 lg:w-1/2">
                    <h1 className="mb-6 text-3xl font-bold text-white">Profile</h1>

                    {/* Profile Section */}
                    <div className="flex flex-col items-center md:flex-row">
                        {/* Profile Photo */}
                        <div className="relative cursor-pointer" onClick={handlePhotoClick}>
                            <div className="flex items-center justify-center w-32 h-32 overflow-hidden text-5xl bg-white rounded-full">
                                {Image ? (
                                    <img
                                        src={'Hello'}
                                        alt="Profile"
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <span className="text-gray-900">Photo</span>
                                )}
                            </div>
                            {/* Hidden file input */}
                            <input
                                type="file"
                                id="fileInput"
                                accept="image/*"
                                onChange={handleImageUpload}
                                style={{ display: 'none' }}
                            />
                        </div>

                        {/* Name, Job Title, and Username */}
                        <div className="mt-4 ml-6 text-white md:mt-0">
                            <h2 className="text-2xl font-semibold">{user.id}</h2>
                            <p className="text-gray-400">{user.email}</p>
                            {/* <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                className="w-full p-2 mt-2 text-white bg-gray-700 rounded-md"
                            /> */}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mt-8 text-white">
                        <h3 className="text-lg font-bold">Contact Information</h3>
                        <div className="mt-4">

                            {items.map((item) => (
                                <>
                                    <p>Phone: {item?.phone || "No phone available"}</p>
                                    <p>Location: {item?.location || "No location available"}</p>
                                    <p>Birthday: {item?.birthday || "No birthday available"}</p>
                                    <p>Joining Date: {item?.joining_date || "No joining date available"}</p>
                                </>
                            ))}
                            <p>Email: {user.email}</p>
                            {/* <button
                                onClick={() => setEditEmail(true)}
                                className="px-4 py-1 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-500"
                            >
                                Change Email
                            </button> */}
                        </div>

                        {/* Edit Email Modal */}
                        {/* {editEmail && (
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
                                <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                                    <h3 className="mb-4 text-lg font-semibold text-white">
                                        Change Email Address
                                    </h3>
                                    <input
                                        type="email"
                                        value={newEmail}
                                        onChange={(e) => setNewEmail(e.target.value)}
                                        className="w-full p-2 mb-4 text-white bg-gray-700 rounded-md"
                                        placeholder="Enter new email address"
                                    />
                                    <div className="flex justify-end space-x-4">
                                        <button
                                            onClick={() => setEditEmail(false)}
                                            className="px-4 py-2 text-white bg-gray-600 rounded-md"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleEmailChange}
                                            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500"
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )} */}
                    </div>

                    {/* Additional Info */}
                    <div className="mt-6">
                        <h3 className="text-lg font-bold text-white">
                            Additional Information
                        </h3>
                        <div className="grid grid-cols-1 gap-6 mt-4 text-gray-400 md:grid-cols-2">
                            {/* Phone Field */}
                            <div>
                                <label
                                    className="block mb-2 font-semibold text-white"
                                    htmlFor="phone"
                                >
                                    Phone:
                                </label>
                                <input
                                    defaultValue={items.phone}
                                    type="text"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Add a phone"
                                    className="w-full p-2 text-white bg-gray-700 rounded-md"
                                />
                            </div>

                            {/* Mobile Phone Field */}
                            {/* <div>
                                <label className="block mb-2 font-semibold text-white" htmlFor="mobilePhone">Mobile Phone:</label>
                                <input
                                    type="text"
                                    id="mobilePhone"
                                    value={mobilePhone}
                                    onChange={(e) => setMobilePhone(e.target.value)}
                                    placeholder="Add a mobile phone"
                                    className="w-full p-2 text-white bg-gray-700 rounded-md"
                                />
                            </div> */}

                            {/* Location Field */}
                            <div>
                                <label
                                    className="block mb-2 font-semibold text-white"
                                    htmlFor="location"
                                >
                                    Location:
                                </label>
                                <input
                                    defaultValue={items.location}
                                    type="text"
                                    id="location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Add a location"
                                    className="w-full p-2 text-white bg-gray-700 rounded-md"
                                />
                            </div>

                            {/* Birthday Field */}
                            <div>
                                <label
                                    className="block mb-2 font-semibold text-white"
                                    htmlFor="birthday"
                                >
                                    Birthday:
                                </label>
                                <input
                                    defaultValue={items.birthday}
                                    type="date"
                                    id="birthday"
                                    value={birthday}
                                    onChange={(e) => setBirthday(e.target.value)}
                                    className="w-full p-2 text-white bg-gray-700 rounded-md"
                                />
                            </div>

                            {/* Work Anniversary Field */}
                            <div>
                                <label
                                    className="block mb-2 font-semibold text-white"
                                    htmlFor="workAnniversary"
                                >
                                    Joining Date
                                </label>
                                <input
                                    defaultValue={items.joining_date}
                                    type="date"
                                    id="workAnniversary"
                                    value={joiningDate}
                                    onChange={(e) => setJoiningDate(e.target.value)}
                                    className="w-full p-2 text-white bg-gray-700 rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <div className="mt-6">
                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
