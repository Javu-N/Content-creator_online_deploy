'use client';
import React, { useState } from 'react';

const NavigationBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">MyWebsite</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-white hover:text-gray-300">Home</a>
                    </li>
                    <li className="relative">
                        <button
                            onMouseEnter={toggleDropdown}
                            onMouseLeave={toggleDropdown}
                            className="text-white hover:text-gray-300 focus:outline-none"
                        >
                            Services
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                                <li>
                                    <a href="/service1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Service 1</a>
                                </li>
                                <li>
                                    <a href="/service2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Service 2</a>
                                </li>
                                <li>
                                    <a href="/service3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Service 3</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a href="/about" className="text-white hover:text-gray-300">About</a>
                    </li>
                    <li>
                        <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavigationBar;
