
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaStickyNote } from 'react-icons/fa'; 

const Hero = () => {
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 


  useEffect(() => {
    setLoading(false);
  }, []);


  const Loader = () => (
    <div className="text-white text-center mt-6">
      Loading notes...
    </div>
  );


  const ErrorMessage = ({ message }) => (
    <div className="text-red-500 text-center mt-6">
      {message}
    </div>
  );

  return (
    <div className="hero bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 h-screen flex flex-col justify-center items-center">
      <Link
        to="/create-note"
        className="beer-button text-white text-xl font-bold px-8 py-4 rounded-lg shadow-lg bg-black bg-opacity-60 hover:bg-opacity-80 transition duration-300 ease-in-out mb-8 flex items-center"
        aria-label="Create New Note"
      >
        <FaStickyNote className="mr-2" /> 
        Create New Note
      </Link>


      {loading && <Loader />}


      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default Hero;

