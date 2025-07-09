import React, { useState, useEffect } from "react";
import GetStartedButton from "./GetStarted";
import ThemeToggle from "./ThemeToggle";
import Dropdown from "./Dropdown";
import SS_logo from "./images/SS-logo.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const logo = '/logoS.png'
  const [isScrolled, setIsScrolled] = useState(false);
  const allowScroll = props.scroll === "true";

  useEffect(() => {
    if (props.scroll === "true") {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsScrolled(false);
    }
  }, [props.scroll]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all bg-[#769FCD] duration-300 dark:bg-[#070F2B] ${
        isScrolled
          ? "dark:bg-[#1B262C] shadow-lg border-b-2 border-gray-200 dark:border-[#3282B8] py-2"
          : allowScroll
          ? "py-3 bg-[#769FCD] dark:bg-[#1B262C]"
          : "py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            {/* <img src={logo} className="w-40 h-30 -mr-11 -m-6" alt="Logo" /> */}
            
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-gray-600 dark:text-[#BBE1FA] hover:text-indigo-600 dark:hover:text-[#3282B8] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/Form"
            className="text-gray-600 dark:text-[#BBE1FA] hover:text-indigo-600 dark:hover:text-[#3282B8] transition-colors"
          >
            Log In
          </Link>
          <ThemeToggle />
          {/* <GetStartedButton /> */}
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
