// src/components/AddNote.js
import React, { useState } from 'react';

const AddNote = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Note Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Note Content"
        value={content}
        onChange={(e) => setContent(e.target.value)} 
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNote;
