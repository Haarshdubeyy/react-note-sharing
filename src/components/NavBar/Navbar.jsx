import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-cyan-200 text-black  p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
     
        <div className="text-3xl font-bold font-serif tracking-wider">
          <p>Note App</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-mono">
          <Link to="/">
          <p className="hover:text-gray-200 cursor-pointer transition duration-300 ease-in-out">Home</p>
          </Link>
          <Link to="/create-note">
          <p className="hover:text-gray-200 cursor-pointer transition duration-300 ease-in-out">Create Note</p>
          </Link> 
          
          <Link to="/your-note">
          <p className="hover:text-gray-200 cursor-pointer transition duration-300 ease-in-out">Your Notes</p>
          </Link> 

        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FaTimes className="h-8 w-8 text-white transition duration-300 ease-in-out hover:scale-110" />
            ) : (
              <FaBars className="h-8 w-8 text-white transition duration-300 ease-in-out hover:scale-110" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-gradient-to-b from-purple-700 via-pink-600 to-red-600 rounded-lg p-4 shadow-md">
          <p className="block py-2 px-4 text-lg text-white hover:bg-pink-500 rounded-lg transition duration-300 ease-in-out">Home</p>
          <p className="block py-2 px-4 text-lg text-white hover:bg-pink-500 rounded-lg transition duration-300 ease-in-out">Create Note</p>
          <p className="block py-2 px-4 text-lg text-white hover:bg-pink-500 rounded-lg transition duration-300 ease-in-out">Your Notes</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
