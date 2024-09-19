// src/pages/SharedNotes.js
import React from 'react';
import NotesList from '../components/NotesList';

const SharedNotes = () => {
  const sharedNotes = [/* Dummy or fetched shared notes data */];

  return (
    <div>
      <h1>Shared Notes</h1>
      <NotesList notes={sharedNotes} />
    </div>
  );
};

export default SharedNotes;
