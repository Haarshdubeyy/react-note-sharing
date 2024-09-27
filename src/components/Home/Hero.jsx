import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      className="hero bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 h-screen flex justify-center items-center"
    >
      <Link
        to="/create-note"
        className="text-white text-xl
           font-bold px-8 py-4 rounded-lg shadow-lg
         bg-black bg-opacity-50 hover:bg-opacity-70 
         transition duration-300 ease-in-out"
      >
        Create New Note
      </Link>
    </div>
  );
};

export default Hero;