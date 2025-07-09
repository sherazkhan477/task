import React from 'react';
import p1 from './p1.jpg';
import p2 from './P2.jpg';
import p3 from './P3.jpg';
import { RiTwitterXFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';


const ProfileCard = () => {
    return (
        <div
            className="h-screen flex justify-center items-center bg-cover"
            style={{ backgroundImage: `url(${p2})` }}
        >
            <div className="w-[clamp(428px,990px,990px)] h-[670px] bg-[#171717] border-2 border-[#4f46e5] rounded-[40px] overflow-hidden grid grid-rows-[220px_auto] ">

                {/* Profile Header */}
                <div
                    className="relative bg-center bg-cover rounded-t-[30px] h-[220px]"
                    style={{ backgroundImage: `url(${p1})` }}
                >
                    <div className="absolute inset-[calc(100%-75px)_auto_auto_70px] flex items-center">
                        <div
                            className="w-[150px] h-[150px] bg-center bg-cover rounded-full border-[10px] border-[#171717]"
                            style={{ backgroundImage: `url(${p3})` }}
                        ></div>
                        <div className="flex flex-col justify-center text-white bg-[#171717] px-6 py-2 rounded-br-[50px] -translate-x-2">
                            <h1 className="text-[32px]">Mohammad.S</h1>
                            <small className="text-[#ffffffb3] text-[24px]">Front-End Developer</small>
                        </div>
                    </div>
                </div>

                {/* Profile Body */}
                <div className="grid grid-cols-[150px_auto] gap-[70px] p-[70px]">
                    <div className="flex flex-col gap-[10px] mt-[30px]">
                        <button className="px-4 py-2 text-white border-2 border-[#4f46e5] rounded-lg bg-[#4f46e5]">Follow</button>
                        <button className="px-4 py-2 text-white border-2 border-[#4f46e5] rounded-lg">Message</button>
                        <section className="bg-[#262626] text-white p-3 rounded-lg flex flex-col gap-[10px]">
                            <div className="flex items-center gap-[10px] border-b border-[#ffffff4c] text-[#ffffffb3]">
                                <i className="fas fa-info-circle"></i>
                                <span>Bio</span>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </section>
                    </div>

                    <div className="grid grid-cols-3 grid-rows-[2fr_1fr] gap-[20px]">
                        <div className="col-span-2 flex flex-col justify-between text-[#ffffffb3] p-[30px] text-center border border-[#ffffff4c] rounded-lg">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <span className="text-[#818cf8] text-[28px]">104</span>
                                    <small>Post</small>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#818cf8] text-[28px]">21K</span>
                                    <small>Follower</small>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#818cf8] text-[28px]">51</span>
                                    <small>Following</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 bg-[#262626] text-[#ffffffb3] p-4 rounded-lg flex items-center gap-4">
                            <span>Follow me on:</span>
                            <a href="/" className="text-[#818cf8] text-[24px]"><i className="fab fa-facebook-square"></i></a>
                            <a href="https://twitter.com/MammadSahragard" className="text-[#818cf8] text-[24px]"><RiTwitterXFill /></a>
                            <a href="https://www.linkedin.com/in/mohammadsahragard/" className="text-[#818cf8] text-[24px]"><BsLinkedin /></a>
                            <a href="https://www.instagram.com/mammad.sahragard/" className="text-[#818cf8] text-[24px]"><FaInstagram /></a>
                            <a href="https://github.com/MohammadSahragard" className="text-[#818cf8] text-[24px]"><FaGithub /></a>
                        </div>

                        <div
                            className="bg-[#262626] text-[#ffffffb3] p-4 rounded-lg border border-[#ffffff4c] flex flex-col gap-[10px]"
                        >
                            <div
                                className="relative bg-center bg-cover rounded-md h-[90%]"
                                style={{ backgroundImage: `url(${p1})` }}
                            >
                                <span className="absolute inset-3 bg-[#000000b3] text-white px-2 rounded">Last Post</span>
                            </div>
                                <h3 className="absolute text-white text-[18px]">3D layer</h3>
                                <button className=" absolute border border-[#818cf8] text-[#818cf8] rounded-md px-2 py-1 text-center">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
