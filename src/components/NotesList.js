// src/components/NotesList.js
import React from 'react';
import NoteCard from './NoteCard';

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map(note => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
