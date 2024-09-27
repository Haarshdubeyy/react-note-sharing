import React, { useState } from 'react';
import useSaveNote from '../../Hooks/useSaveNote';

const IndividualNote = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const { saveNote } = useSaveNote();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveNote(formData.title, formData.content);
    setFormData({ title: '', content: '' }); // Reset form on submit
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-yellow-200 shadow-lg rounded-lg p-6 w-full max-w-md transform rotate-2 sticky-note">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 underline text-center">
          Create Note
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-800 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter note title"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-800 text-sm font-bold mb-2">
              Content
            </label>
            <textarea
              id="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Write your note here..."
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-200"
          >
            Save Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default IndividualNote;