import { useState, useEffect } from 'react';

const useSaveNote = () => {
  const [notes, setNotes] = useState([]);


  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  const saveNote = (title, content) => {
    const newNote = { id: Date.now(), title, content };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return { notes, saveNote };
};

export default useSaveNote;
