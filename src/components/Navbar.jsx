import React, { useState } from 'react';

const Navbar = () => {
    const [navBarDropdown, setNavBarDropdown] = useState(false);

    const toggleNavbarDropdown = () => {
        setNavBarDropdown(!navBarDropdown);
    };

    const isMobileView = window.innerWidth <= 768; // You can adjust this threshold

    return (
        <div>
            {isMobileView ? (
                <div className="bg-black">
                    <button onClick={toggleNavbarDropdown} className="text-white text-xl Orbitron hover:text-gray-300">
                        {navBarDropdown ? "Close Menu" : "Open Menu"}
                    </button>
                    {navBarDropdown && (
                        <div className="max-w-6xl mx-auto px-4 py-4">
                            <div className="flex justify-center items-center">
                                <div className="space-x-8 flex">
                                    <a href="#home" className="text-white text-xl Orbitron hover:text-gray-300">Home</a>
                                    <a href="#about" className="text-white text-xl Orbitron hover:text-gray-300">About</a>
                                    <a href="#portfolio" className="text-white text-xl Orbitron hover:text-gray-300">Portfolio</a>
                                    <a href="#contact" className="text-white text-xl Orbitron hover:text-gray-300">Contact</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="bg-black">
                    <div className="max-w-6xl mx-auto px-4 py-4">
                        <div className="flex justify-center items-center">
                            <div className="space-x-8 flex">
                                <a href="#home" className="text-white text-xl Orbitron hover:text-gray-300">Home</a>
                                <a href="#about" className="text-white text-xl Orbitron hover:text-gray-300">About</a>
                                <a href="#portfolio" className="text-white text-xl Orbitron hover:text-gray-300">Portfolio</a>
                                <a href="#contact" className="text-white text-xl Orbitron hover:text-gray-300">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
