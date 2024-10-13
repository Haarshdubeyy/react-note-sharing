import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa';

const YourNoteList = () => {
  const [notes, setNotes] = useState([]);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedContent, setUpdatedContent] = useState('');
  const [loading, setLoading] = useState(true); 
  const [error,setError] = useState(null);
 //JSON SERVER
   useEffect(() => {
    axios
      .get('http://localhost:8000/notes')
      .then((response) => {
        setNotes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching notes:', error);
        setError('Failed to fetch notes. Please try again later.');
        setLoading(false);
      });
  }, []);
  const handleDeleteNote = (id) => {
    axios
      .delete(`http://localhost:8000/notes/${id}`)
      .then(() => {
        setNotes(notes.filter((note) => note.id !== id)); 
      })
      .catch((error) => {
        console.error('Error deleting note:', error);
      });
  };

  const handleEditClick = (note) => {
    setEditingNoteId(note.id);
    setUpdatedTitle(note.title);
    setUpdatedContent(note.content);
  };

  const handleUpdateNote = () => {
    axios
      .put(`http://localhost:8000/notes/${editingNoteId}`, {
        title: updatedTitle,
        content: updatedContent,
      })
      .then((response) => {
        setNotes(
          notes.map((note) =>
            note.id === editingNoteId ? response.data : note
          )
        );
        setEditingNoteId(null);
      })
      .catch((error) => {
        console.error('Error updating note:', error);
      });
  };

  if (loading) {
    return <div>Loading notes...</div>;
  }


  return (
    <div className="p-6 max-w-4xl mx-auto bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Notes</h2>
      {(!notes || notes.length === 0) ? (
        <p className="text-center text-gray-500">No notes available</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <div key={note.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="p-4 bg-gray-100">
                {editingNoteId === note.id ? (
                  <input
                    type="text"
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                    className="w-full px-2 py-1 border rounded"
                  />
                ) : (
                  <h3 className="text-lg font-semibold text-gray-800">{note.title}</h3>
                )}
              </div>
              <div className="p-4">
                {editingNoteId === note.id ? (
                  <div className="space-y-4">
                    <textarea
                      value={updatedContent}
                      onChange={(e) => setUpdatedContent(e.target.value)}
                      className="w-full px-2 py-1 border rounded min-h-[100px]"
                    />
                    <button
                      onClick={handleUpdateNote}
                      className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                    >
                      <FaSave className="inline mr-2" /> Save
                    </button>
                  </div>
                ) : (
                  <div>
                    <p className="mb-4 text-gray-600">{note.content}</p>
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleEditClick(note)}
                        className="text-blue-500 hover:text-blue-600"
                      >
                        <FaEdit size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteNote(note.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <FaTrash size={18} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourNoteList;
