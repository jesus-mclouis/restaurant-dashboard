import React from 'react';
import { FiSun, FiBell } from 'react-icons/fi';

const Navbar: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4 shadow-md">
            <div className="flex items-center space-x-4">
                <input
                    type="text"
                    placeholder="Search or type a command"
                    className="px-4 py-2 border rounded-full w-80 focus:outline-none"
                />
            </div>
            <div className="flex items-center space-x-6">
                <FiSun className="text-xl" />
                <FiBell className="text-xl" />
                <div className="flex items-center space-x-2">
                    <img src="/user-avatar.jpg" alt="User Avatar" className="w-10 h-10 rounded-full" />
                    <span>Samuel K.</span>
                </div>
            </div>
        </header>
    );
}
export default Navbar;
