import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import CreateNote from './Routes/CreateNote';
import YourNoteList from './components/Notes/YourNoteList';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-note" element={<CreateNote />} /> 
        <Route path="/your-note" element={<YourNoteList />} /> 
      </Routes>
    </Router>
  );
};

export default App;
