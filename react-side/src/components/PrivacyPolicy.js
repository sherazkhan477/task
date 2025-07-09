import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar/>
      <div className="dark:bg-[#1B262C] bg-[#BBE1FA] min-h-screen flex flex-col items-center p-20 mt-5">
        <div className="flex justify-center items-center w-full p-5">
          <div className="dark:bg-[#070F2B] bg-white bg-opacity-85 p-8 rounded-lg shadow-lg max-w-xl w-full text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h1 className="text-2xl font-bold dark:text-[#BBE1FA] text-[#2c3e50] uppercase mb-6">
              Privacy Policy
            </h1>
            <p className="text-base dark:text-[#D6E6F2] text-gray-600 mb-6 leading-relaxed text-justify">
              This summary is provided only for convenience. Please review the
              Privacy Policy below in its entirety for important information and
              legal conditions that apply to your use of the Platform for
              sharing and viewing online content on mobile devices and personal
              computers.
            </p>
            <div className="text-left mb-8">
              <h2 className="text-xl font-semibold dark:text-[#BBE1FA] text-[#34495e] mb-2">
                Your Data
              </h2>
              <p className="text-base dark:text-[#D2DAFF] text-gray-700 mb-4 leading-relaxed text-justify">
                "User Data" refers to information that users provide and post to
                the Platform, including but not limited to personal information,
                preferences, and any other data you provide while using our
                services.
              </p>
              <p className="text-base dark:text-[#D2DAFF] text-gray-700 mb-4 leading-relaxed text-justify">
                You agree and acknowledge that you own the data you provide to
                the Platform and that you have the legal right to post this
                data. You are solely responsible for the accuracy and legality
                of your data. We do not assume any responsibility for the
                content or use of your data.
              </p>
              <p className="text-base dark:text-[#D2DAFF] text-gray-700 leading-relaxed text-justify">
                We are committed to protecting your data and privacy. Please
                read the full Privacy Policy to understand how we collect, use,
                and protect your information.
              </p>
            </div>
            <div className="flex justify-between gap-5">
              <button className="px-6 py-3 rounded-full dark:bg-[#3282B8] dark:text-white dark:hover:bg-[#1B1A55] bg-blue-500 text-white text-lg shadow-md hover:bg-blue-600 transition-colors">
                Accept
              </button>
              <button className="px-6 py-3 rounded-full dark:bg-[#535C91] dark:text-[#EEF1FF] dark:hover:bg-[#9290C3] bg-gray-200 text-gray-800 text-lg shadow-md hover:bg-gray-300 transition-colors">
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PrivacyPolicy;
