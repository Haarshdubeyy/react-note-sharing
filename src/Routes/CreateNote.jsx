import React from 'react';
import IndividualNote from '../components/Notes/IndividualNote';

const CreateNote = ({ onAddNote }) => {
  return (
    <div>
      <IndividualNote onAddNote={onAddNote} />
    </div>
  );
};

export default CreateNote;
