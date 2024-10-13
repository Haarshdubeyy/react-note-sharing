import { useState, useEffect } from 'react';



const useSaveNote = () => {
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage on initial render
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);


  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);


  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(), 
      title,
      content,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };


  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };


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
