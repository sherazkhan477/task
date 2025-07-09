import React, { useState, useEffect } from "react";
import './Company.css';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactUs = () => {

    const [contactUs, setContactUs] = useState({
        username: "",
        email: "",
        message: "",
    });

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContactUs({ ...contactUs, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send contactUs data to server here
        console.log(contactUs);
    };

    return (
        <>
        <Navbar />
        <div className="p-20 bg-[#BBE1FA] dark:bg-[#1B262C] text-gray-900 dark:text-white h-screen mt-10 pt-10 flex flex-col"> 
            <div className="flex flex-col justify-center items-center py-16 px-4">
                <section className="bg-white dark:bg-[#070F2B] shadow-lg rounded-2xl w-full max-w-lg p-8 text-gray-900 dark:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
                    <h2 className="text-3xl font-bold mb-6 text-center text-[#769FCD] dark:text-[#BBE1FA]">Get in Touch</h2>
                    <p className="text-center mb-8 text-[#535C91] dark:text-[#9290C3]">
                        We would love to hear from you. Fill in the form below to start a conversation!
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <input
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="off"
                                value={contactUs.username}
                                onChange={handleInput}
                                className="peer bg-[#EEF1FF] dark:bg-[#1B262C] border-b-2 border-[#D6E6F2] dark:border-[#3282B8] focus:outline-none focus:border-[#769FCD] dark:focus:border-[#BBE1FA] w-full py-2 px-4 text-gray-900 dark:text-white placeholder-transparent rounded-t-md"
                                placeholder="Username"
                                required
                            />
                            <label
                                htmlFor="username"
                                className="absolute left-4 top-2 peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-400 transition-all duration-200 ease-in-out text-[#769FCD] dark:text-[#BBE1FA]"
                            >
                                Username
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="off"
                                value={contactUs.email}
                                onChange={handleInput}
                                className="peer bg-[#EEF1FF] dark:bg-[#1B262C] border-b-2 border-[#D6E6F2] dark:border-[#3282B8] focus:outline-none focus:border-[#769FCD] dark:focus:border-[#BBE1FA] w-full py-2 px-4 text-gray-900 dark:text-white placeholder-transparent rounded-t-md"
                                placeholder="Email"
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-4 top-2 peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-400 transition-all duration-200 ease-in-out text-[#769FCD] dark:text-[#BBE1FA]"
                            >
                                Email
                            </label>
                        </div>
                        <div className="relative">
                            <textarea
                                name="message"
                                id="message"
                                cols="30"
                                rows="4"
                                autoComplete="off"
                                value={contactUs.message}
                                onChange={handleInput}
                                className="peer bg-[#EEF1FF] dark:bg-[#1B262C] border-b-2 border-[#D6E6F2] dark:border-[#3282B8] focus:outline-none focus:border-[#769FCD] dark:focus:border-[#BBE1FA] w-full py-2 px-4 text-gray-900 dark:text-white placeholder-transparent rounded-t-md"
                                placeholder="Message"
                                required
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute left-4 top-2 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-400 transition-all duration-200 ease-in-out text-[#769FCD] dark:text-[#BBE1FA]"
                            >
                                Message
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-[#B1B2FF] dark:bg-[#3282B8] text-gray-900 dark:text-white rounded-lg shadow-md hover:bg-[#AAC4FF] dark:hover:bg-[#535C91] transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Submit
                        </button>
                    </form>
                </section>
            </div>            
        </div>
        <Footer/>
        </>
    );
};

export default ContactUs;
