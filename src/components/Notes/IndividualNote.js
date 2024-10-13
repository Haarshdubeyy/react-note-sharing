import React, { useState } from 'react';

const IndividualNote = ({ onAddNote }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddNote(formData.title, formData.content); 
    setFormData({ title: '', content: '' }); 
    onAddNote(formData.title, formData.content); // Pass the note to be added
    setFormData({ title: '', content: '' }); // Reset the form
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="beer-card shadow-lg rounded-lg py-6 px-8 w-full max-w-md sticky-note">
        <h2 className="beer-heading text-2xl font-bold mb-4 text-center text-gray-800">
          Create Note
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="beer-label block text-gray-800 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="beer-input text-black w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter note title"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="content" className="beer-label block text-black text-sm font-bold mb-2">
              Content
            </label>
            <textarea
              id="content"
              value={formData.content}
              onChange={handleChange}
              className="beer-textarea text-black w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Write your note here..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="beer-button w-full bg-yellow-500 text-white hover:bg-yellow-600 transition duration-200">
            Save Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default IndividualNote;
