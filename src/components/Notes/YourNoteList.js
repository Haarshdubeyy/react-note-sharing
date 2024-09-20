import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const YourNoteList = () => {
  const [notes, setNotes] = useState([]);

  // Fetch saved notes from localStorage when the component mounts
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  // Function to delete the specific note
  const handleDelete = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className="min-h-screen text-black bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex flex-col items-center py-10">
      
      <div className="w-full max-w-2xl space-y-4 flex flex-col items-center">
        {notes.length === 0 ? (
          <div className="text-center mt-20">
           <p className="text-slate-200 text-2xl font-semibold">
   currently you  have no notes.
</p>
            <Link to="/create-note" className="mt-4 inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
              Create some new notes
            </Link>
          </div>
        ) : (
          notes.map((note) => (
            <div
              key={note.id} // stores a specific id in storage
              className="bg-yellow-200 shadow-lg rounded-lg p-6 w-full max-w-md transform rotate-2 relative"
              style={{ minHeight: '150px' }}
            >
              <div className="bg-white p-4 rounded-lg shadow sticky-note-content relative">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {note.title}
                </h2>
                <p className="text-gray-700">{note.content}</p>

               
                <div className="w-4 h-4 bg-slate-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

            
                <button
                  onClick={() => handleDelete(note.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  aria-label="Delete note"
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      
    </div>
  );
};

export default YourNoteList;
