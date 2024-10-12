import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import axios from 'axios';
import ShareNotes from './ShareNotes';

const YourNoteList = () => {
  const [notes, setNotes] = useState([]);

 
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/notes');
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${id}`);
      const updatedNotes = notes.filter(note => note.id !== id);
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="min-h-screen text-black bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex flex-col items-center py-10">
      <div className="w-full max-w-2xl space-y-4 flex flex-col items-center">
        {notes.length === 0 ? (
          <div className="text-center mt-20">
            <p className="text-slate-200 text-2xl font-semibold">
              currently you have no notes.
            </p>
            <Link to="/create-note" className="mt-4 inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
              Create some new notes
            </Link>
          </div>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="bg-yellow-200 shadow-lg rounded-lg p-6 w-full max-w-md transform rotate-2 relative"
              style={{ minHeight: '150px' }}
            >
              <div className="bg-white p-4 rounded-lg shadow sticky-note-content relative">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {note.title}
                </h2>
                <p className="text-gray-700">{note.content}</p>
                <div className="w-4 h-4 bg-slate-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                {/* ShareNote and Delete button container */}
                <div className="absolute bottom-2 right-2 flex space-x-2">
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="text-red-500 hover:text-red-700"
                    aria-label="Delete note"
                  >
                    <FaTrash size={20} />
                  </button>
                  <ShareNotes note={{ title: note.title, content: note.content }} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default YourNoteList;
