import React, { useState } from 'react';
import { useContext } from "react";
import AuthContext from '../context/AuthContext';

export default function LoginSignup() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleView = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="container_signin dark:bg-[#070F2B] bg-[#BBE1FA]">
            <div className="left-side">
                {isLogin ? (
                    <Login handleSwap={toggleView} />
                ) : (
                    <Signup handleSwap={toggleView} />
                )}
            </div>
        </div>
    );
}

function Signup({ handleSwap }) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const { registerUser } = useContext(AuthContext);

    const handleSubmit = async e => {
        e.preventDefault();
        registerUser(email, username, password, password2);
    };

    return (
        <div className="flex items-center justify-center max-h-full p-24 dark:bg-[#070F2B] bg-[#BBE1FA]">
            <div className="grid w-full grid-cols-1 overflow-hidden shadow-xl max-w-7xl lg:grid-cols-2">
                <div className="flex flex-col justify-center py-5 dark:text-white pl-14 dark:bg-gradient-to-b dark:from-[#1B1A55] dark:to-[#0F4C75] bg-gradient-to-b from-[#D6E6F2] to-[#AAC4FF]">
                    <h2 className="pb-6 mb-4 text-4xl font-bold text-center uppercase border-b-2 dark:border-[#3282B8] border-[#D2DAFF]">
                        Trusted By Over 20,000 Companies
                    </h2>
                    <blockquote className="pl-5 my-4 text-xl italic leading-relaxed border-l-4 dark:border-[#3282B8] border-[#D2DAFF]">
                        "StaffSphere has revolutionized our workflow and improved our team dynamics immensely."
                        <footer className="mt-1 text-xs dark:text-gray-300 text-gray-500">
                            — Alex Johnson, CEO of Tech Innovations
                        </footer>
                    </blockquote>
                    <blockquote className="pl-5 my-4 text-xl italic leading-relaxed border-l-4 dark:border-[#3282B8] border-[#D2DAFF]">
                        "The best decision we made was integrating StaffSphere into our operations."
                        <footer className="mt-1 text-xs dark:text-gray-300 text-gray-500">
                            — Maria Garcia, HR Director at Global Solutions
                        </footer>
                    </blockquote>
                    <blockquote className="pl-5 my-4 text-xl italic leading-relaxed border-l-4 dark:border-[#3282B8] border-[#D2DAFF]">
                        "StaffSphere's intuitive design and powerful features make it an invaluable tool for any organization."
                        <footer className="mt-1 text-xs dark:text-gray-300 text-gray-500">
                            — Brian Lee, Project Manager at Creative Minds
                        </footer>
                    </blockquote>
                </div>
                <div className="flex items-center justify-center py-10 dark:bg-gradient-to-b dark:from-[#1B1A55] dark:to-[#0F4C75] bg-gradient-to-b from-[#B9D7EA] to-[#AAC4FF]">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-md p-6 dark:bg-[#1B262C] bg-white rounded-lg shadow-2xl"
                    >
                        <h2 className="mb-4 text-xl font-semibold text-center dark:text-[#BBE1FA] text-[#535C91]">Register</h2>
                        <div className="mb-3">
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                placeholder="User Name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full p-2 dark:text-white text-gray-800 placeholder-gray-500 border dark:border-[#3282B8] border-gray-300 rounded-md focus:outline-none dark:focus:bg-[#070F2B] focus:bg-blue-50"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-2 dark:text-white text-gray-800 placeholder-gray-500 border dark:border-[#3282B8] border-gray-300 rounded-md focus:outline-none dark:focus:bg-[#070F2B] focus:bg-blue-50"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                id="password1"
                                name="password1"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-2 dark:text-white text-gray-800 placeholder-gray-500 border dark:border-[#3282B8] border-gray-300 rounded-md focus:outline-none dark:focus:bg-[#070F2B] focus:bg-blue-50"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                id="password2"
                                name="password2"
                                placeholder="Confirm Password"
                                value={password2}
                                onChange={(e) => setPassword2(e.target.value)}
                                required
                                className="w-full p-2 dark:text-white text-gray-800 placeholder-gray-500 border dark:border-[#3282B8] border-gray-300 rounded-md focus:outline-none dark:focus:bg-[#070F2B] focus:bg-blue-50"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full p-2 text-white transition-transform transform rounded-md shadow-md dark:bg-gradient-to-r dark:from-[#3282B8] dark:to-[#535C91] bg-gradient-to-r from-purple-700 to-pink-500 hover:shadow-lg hover:scale-105 active:scale-95"
                        >
                            Register
                        </button>
                        <div className="mt-4 text-lg font-semibold text-center dark:text-[#BBE1FA] text-[#535C91]">
                            Already have an account?
                            <a onClick={handleSwap} className="text-lg font-semibold cursor-pointer hover:underline"> Log In</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function Login({ handleSwap }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loginUser } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        email.length > 0 && loginUser(email, password);
    };

    return (
        <div className="flex items-center justify-center min-h-full p-20 dark:bg-[#070F2B] bg-[#BBE1FA]">
            <div className="grid w-full grid-cols-1 overflow-hidden shadow-xl max-w-7xl lg:grid-cols-2">
                <div className="flex flex-col justify-center py-5 dark:text-white pl-14 dark:bg-gradient-to-b dark:from-[#1B1A55] dark:to-[#0F4C75] bg-gradient-to-b from-[#D6E6F2] to-[#AAC4FF]">
                    <h2 className="pb-6 mb-4 text-4xl font-bold text-center uppercase border-b-2 dark:border-[#3282B8] border-[#D2DAFF]">
                        Trusted By Over 20,000 Companies
                    </h2>
                    <blockquote className="pl-5 my-4 text-xl italic leading-relaxed border-l-4 dark:border-[#3282B8] border-[#D2DAFF]">
                        "StaffSphere has revolutionized our workflow and improved our team dynamics immensely."
                        <footer className="mt-1 text-xs dark:text-gray-300 text-gray-500">
                            — Alex Johnson, CEO of Tech Innovations
                        </footer>
                    </blockquote>
                    <blockquote className="pl-5 my-4 text-xl italic leading-relaxed border-l-4 dark:border-[#3282B8] border-[#D2DAFF]">
                        "The best decision we made was integrating StaffSphere into our operations."
                        <footer className="mt-1 text-xs dark:text-gray-300 text-gray-500">
                            — Maria Garcia, HR Director at Global Solutions
                        </footer>
                    </blockquote>
                    <blockquote className="pl-5 my-4 text-xl italic leading-relaxed border-l-4 dark:border-[#3282B8] border-[#D2DAFF]">
                        "StaffSphere's intuitive design and powerful features make it an invaluable tool for any organization."
                        <footer className="mt-1 text-xs dark:text-gray-300 text-gray-500">
                            — Brian Lee, Project Manager at Creative Minds
                        </footer>
                    </blockquote>
                </div>
                <div className="flex items-center justify-center py-10 dark:bg-gradient-to-b dark:from-[#1B1A55] dark:to-[#0F4C75] bg-gradient-to-b from-[#B9D7EA] to-[#AAC4FF]">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-md p-6 dark:bg-[#1B262C] bg-white rounded-lg shadow-2xl"
                    >
                        <h2 className="mb-4 text-xl font-semibold text-center dark:text-[#BBE1FA] text-[#535C91]">Login</h2>
                        <div className="mb-3">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-2 dark:text-black text-gray-800 placeholder-gray-500 border dark:border-[#3282B8] border-gray-300 rounded-md focus:bg-blue-50"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-2 dark:text-black text-gray-800 placeholder-gray-500 border dark:border-[#3282B8] border-gray-300 rounded-md focus:outline-none  focus:bg-blue-50"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full p-2 text-white transition-transform transform rounded-md shadow-md dark:bg-gradient-to-r dark:from-[#3282B8] dark:to-[#535C91] bg-gradient-to-r from-purple-700 to-pink-500 hover:shadow-lg hover:scale-105 active:scale-95"
                        >
                            Login
                        </button>
                        <div className="mt-4 text-lg font-semibold text-center dark:text-[#BBE1FA] text-[#535C91]">
                            Don't have an account?
                            <a onClick={handleSwap} className="text-lg font-semibold cursor-pointer hover:underline"> Register</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
