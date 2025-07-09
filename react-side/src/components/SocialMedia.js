import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaDiscord } from 'react-icons/fa';

const socialData = [
    { name: 'github', color: '#181818', icon: <FaGithub /> },
    { name: 'linkedin', color: '#0077b5', icon: <FaLinkedin /> },
    { name: 'whatsapp', color: '#075e54', icon: <FaWhatsapp /> },
    { name: 'discord', color: '#7289da', icon: <FaDiscord /> },
];

const SocialCard = () => {
    return (
        <div className="flex items-center justify-center gap-4 bg-white p-4 sm:p-5 rounded-lg">
            {socialData.map((social) => (
                <div
                    key={social.name}
                    className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full cursor-pointer group"
                >
                    <div
                        className={`absolute inset-0 rounded-full transition-transform duration-300 ${social.color} group-hover:scale-150 group-hover:font-bold`}
                        style={{ backgroundColor: social.color }}
                    />
                    <div
                        className="relative flex items-center justify-center w-full h-full rounded-full border border-gray-300 transition-all duration-300 z-10 group-hover:border-gray-400 group-hover:bg-gray-200 group-hover:backdrop-blur-sm"
                    >
                        {social.icon}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SocialCard;
