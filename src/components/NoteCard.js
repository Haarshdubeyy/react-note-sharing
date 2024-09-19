// src/components/NoteCard.js
import React from 'react';

const NoteCard = ({ note }) => {
  return (
    <div className="note-card">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <small>Shared by: {note.author}</small>
    </div>
  );
};

export default NoteCard;
