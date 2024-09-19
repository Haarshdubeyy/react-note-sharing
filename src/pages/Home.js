// src/pages/Home.js
import React from 'react';
import NotesList from '../components/NotesList';

const Home = () => {
  const notes = [/* Dummy or fetched notes data */];
  
  return (
    <div>
      <h1>All Notes</h1>
      <NotesList notes={notes} />
    </div>
  );
};

export default Home;
