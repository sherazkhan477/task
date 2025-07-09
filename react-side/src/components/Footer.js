import React from "react";
import { NavLink } from "react-router-dom";
import SocialCard from "./SocialMedia"; // Assuming SocialCard is correctly exported

const Footer = () => {

    return (
        <div className="dark:bg-[#021526] bg-[#769FCD] text-white">
            <div className="px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between gap-6">
                    {/* Company Section */}
                    <div className="flex-1 min-w-[200px] lg:w-1/5 mb-6">
                        <h4 className="mb-4 text-lg font-bold dark:text-[#BBE1FA] text-[#1B1A55]">Company</h4>
                        <NavLink to="/NavLinkbout-us" className="block mb-2 dark:text-[#9290C3]  text-[#535C91] dark:hover:text-[#BBE1FA] hover:text-[#535C91]">
                            About Us
                        </NavLink>
                        <NavLink to="/contact-us" className="block mb-2 dark:text-[#9290C3]  text-[#535C91] dark:hover:text-[#BBE1FA] hover:text-[#535C91]">
                            Contact Us
                        </NavLink>
                        <NavLink to="/pricing" className="block dark:text-[#9290C3]  text-[#535C91] dark:hover:text-[#BBE1FA] hover:text-[#535C91]">
                            Pricing
                        </NavLink>
                    </div>

                    {/* Privacy & Support Section */}
                    <div className="flex-1 min-w-[200px] lg:w-1/5 mb-6">
                        <h4 className="mb-4 text-lg font-bold dark:text-[#BBE1FA] text-[#1B1A55]">Privacy & Support</h4>
                        <NavLink to="/resource/PrivacyPolicy" className="block mb-2 dark:text-[#9290C3]  text-[#535C91] dark:hover:text-[#BBE1FA] hover:text-[#535C91]">
                            Privacy Policy
                        </NavLink>
                        <NavLink to="/resource/FAQ" className="block mb-2 dark:text-[#9290C3]  text-[#535C91] dark:hover:text-[#BBE1FA] hover:text-[#535C91]">
                            FAQs
                        </NavLink>
                        <NavLink to="/resource/T&C" className="block dark:text-[#9290C3]  text-[#535C91] dark:hover:text-[#BBE1FA] hover:text-[#535C91]">
                            Terms & Conditions
                        </NavLink>
                    </div>

                    {/* Product Section */}
                    <div className="flex-1 min-w-[200px] lg:w-1/5 mb-6">
                        <h4 className="mb-4 text-lg font-bold dark:text-[#BBE1FA] text-[#1B1A55]">Product</h4>
                        <NavLink to="/dashboard/workspace" className="block mb-2 dark:text-[#9290C3]  text-[#535C91] dark:hover:text-[#BBE1FA] hover:text-[#535C91]">
                            Task Management
                        </NavLink>
                        <NavLink to="/personal-info" className="block mb-2 dark:text-[#9290C3]  text-[#535C91] dark:hover:text-[#BBE1FA] hover:text-[#535C91]">
                            Employee Profile
                        </NavLink>
                        <NavLink to="/dashboard" className="block dark:text-[#9290C3]  text-[#535C91] dark:hover:text-[#BBE1FA] hover:text-[#535C91]">
                            Dashboard
                        </NavLink>
                    </div>

                    {/* Connect With Us Section */}
                    <div className="flex-1 min-w-[200px] lg:w-1/5 mb-6">
                        <h4 className="mb-4 text-lg font-bold dark:text-[#BBE1FA] text-[#1B1A55]">Connect With Us</h4>
                        <SocialCard />
                    </div>
                </div>

                <hr className="my-6 border-t dark:border-[#3282B8] border-[#D2DAFF]" />

                {/* Footer Bottom Section */}
                <div className="flex items-center justify-center sm:justify-between">
                    <p className="text-sm font-semibold dark:text-[#BBE1FA] text-[#1B1A55]">
                        &copy; copyright 2024. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
