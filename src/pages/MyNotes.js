// src/pages/MyNotes.js
import React from 'react';
import AddNote from '../components/AddNote';
import NotesList from '../components/NotesList';

const MyNotes = () => {
  const [myNotes, setMyNotes] = React.useState([]);

  const addNote = (newNote) => {
    setMyNotes([...myNotes, newNote]);
  };

  return (
    <div>
      <h1>My Notes</h1>
      <AddNote addNote={addNote} />
      <NotesList notes={myNotes} />
    </div>
  );
};

export default MyNotes;
