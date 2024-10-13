import { useState, useEffect } from 'react';

// Custom hook to handle saving, loading, updating, and deleting notes
const useSaveNote = () => {
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage on initial render
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage whenever 'notes' state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Add a new note
  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(), // Use timestamp as a unique ID
      title,
      content,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  // Delete a note
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  // Update an existing note
  const updateNote = (id, updatedTitle, updatedContent) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, title: updatedTitle, content: updatedContent } : note
      )
    );
  };

  return { notes, addNote, deleteNote, updateNote };
};

export default useSaveNote;
