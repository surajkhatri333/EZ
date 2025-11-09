import React, { useState } from 'react'
import mail from '../../assets/EZ Labs Assignment/mail.svg';
import open from '../../assets/EZ Labs Assignment/open.svg';
import close from '../../assets/EZ Labs Assignment/close.svg';
import film from '../../assets/Film.png';
import backgroundImage from "../../assets/HeroBg/BG.png"
import { useNavigate } from 'react-router';

function Navbar() {
    const navItems = [
        {
            item: "Services",
            path: "/service"
        },
        {
            item: "Their Stories",
            path: "/stories"
        },
        {
            item: "Our Stories",
            path: "/aboutUs"
        },
        {
            item: "Varnan",
            path: "/varan"
        },
        {
            item  : "Contact",
            path : "/contact"
        }
    ];
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="w-full h-20 flex items-center justify-between px-10 md:px-20"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        >

            {/* Left side (Logo placeholder or brand) */}
            <div className="flex items-center space-x-3">
                <img
                    src={film} alt="Film Logo"
                    className="w-20 h-10 cursor-pointer"
                    onClick={() => navigate("/")}
                />
            </div>
            <div className='flex'>
                {/* Center navigation items */}
                <div>
                    <ul className={`absolute top-18 right-0  text-md  md:static md:flex space-x-8 m-4 text-gray-700 font-medium z-50  ${isOpen ? 'opacity-100 visible justify-between' : 'opacity-0  md:opacity-100 md:visible'}`}>
                   
                        {navItems.map((nav, index) => (
                            <li
                                key={index}
                                onClick={() => navigate(`${nav.path}`)}
                                className="cursor-pointer font-instrumental font-400 hover:text-green-700 text-xs lg:text-2xl"
                            >
                                {nav.item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right side buttons */}
                <div className="flex items-center space-x-5">
                    <button className="flex items-center gap-2 bg-[#F15D2B] text-white px-4 py-2 mx-4 rounded-full hover:bg-green-700 transition-all duration-300 cursor-pointer">
                        <span>Let's Talk</span>
                        <img src={mail} alt="mail" className="w-5 h-5" />
                    </button>

                    <img
                        src={open}
                        alt="menu"
                        className={`w-7 h-7 md:hidden cursor-pointer mx-4 ${isOpen ? 'hidden' : 'block'}`}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    <img
                        src={close}
                        alt="menu"
                        className={`w-7 h-7 md:hidden cursor-pointer mx-4 ${isOpen ? 'block' : 'hidden'}`}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Navbar;

