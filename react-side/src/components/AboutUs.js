import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Company.css'; // You can keep this for additional styling
import Navbar from './Navbar';

const AboutUs = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className=" bg-[#BBE1FA] dark:bg-[#1B262C] text-gray-900 dark:text-white">
                <section className="about-us-content">
                    <h1 className="about-us-heading  text-[#0F4C75] dark:text-[#BBE1FA]">Hard work is hard enough</h1>
                    <p className="about-us-text text-gray-700 dark:text-[#BBE1FA]">
                        Almost 3 billion people in the world work hands-on jobs – they fix doors, clean floors, manage stores, load crates, guard gates, set plates...
                        Managing a business with employees like these is hard work – they have too many apps for work yet still lack the right ones.
                    </p>
                    <p className="about-us-text text-gray-700 dark:text-[#BBE1FA]">
                        We developed <strong>one complete solution</strong> for managers to easily run everyday operations, share knowledge, keep teams connected, and focus on growing the business and the bottom line.
                    </p>
                </section>
                <section className="about-us-images">
                    <div className="about-us-image about-us-image1"></div>
                    <div className="about-us-image about-us-image2"></div>
                    <div className="about-us-image about-us-image3"></div>
                </section>
            </div>

            <div className="about-us-section bg-[#F7FBFC] dark:bg-[#070F2B]">
                <div className="about-us-header">
                    <h2 className=" text-[#0F4C75] dark:text-[#BBE1FA]">INNOVATING EVERYDAY WORK FOR</h2>
                    <div className="about-us-categories">
                        <div className="category">
                            <div className="icon">👔</div>
                            <h3 className=" text-[#0F4C75] dark:text-[#142850]">Managers</h3>
                            <p className="text-gray-700 dark:text-[#142850]">Bringing clarity and simplicity for smarter, faster decisions</p>
                        </div>
                        <div className="category">
                            <div className="icon">👥</div>
                            <h3 className=" text-[#0F4C75] dark:text-[#142850]">Employees</h3>
                            <p className="text-gray-700 dark:text-[#142850]">Providing tools to accelerate productivity and foster connectivity</p>
                        </div>
                        <div className="category">
                            <div className="icon">🏪</div>
                            <h3 className=" text-[#0F4C75] dark:text-[#142850]">Businesses</h3>
                            <p className="text-gray-700 dark:text-[#142850]">Setting the foundation to focus on growth and fuel success</p>
                        </div>
                    </div>
                </div>

                <div className="about-us-stats">
                    <h2 className=" text-[#0F4C75] dark:text-[#BBE1FA]">NUMBERS WE'RE PROUD OF</h2>
                    <div className="stats-container">
                        <div className="stat-item">
                            <div className="stat-number  text-[#0F4C75] dark:text-[#142850]">295M</div>
                            <p className="text-gray-700 dark:text-[#142850]">Shifts scheduled</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number  text-[#0F4C75] dark:text-[#142850]">2.2M</div>
                            <p className="text-gray-700 dark:text-[#142850]">Tasks completed</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number  text-[#0F4C75] dark:text-[#142850]">80</div>
                            <p className="text-gray-700 dark:text-[#142850]">Countries served</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number  text-[#0F4C75] dark:text-[#142850]">1M</div>
                            <p className="text-gray-700 dark:text-[#142850]">Active users</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='about-us-contact-us bg-[#D6E6F2] dark:bg-[#0F4C75]'>
                <button
                    className="contact-us-button bg-[#B1B2FF] dark:bg-[#3282B8] text-gray-900 dark:text-white hover:bg-[#AAC4FF] dark:hover:bg-[#535C91]"
                    onClick={() => navigate('/contact-us')}
                >
                    <span>Contact Us</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </div>
        </>
    );
}

export default AboutUs;
