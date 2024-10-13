import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import CreateNote from './Routes/CreateNote';
import YourNoteList from './components/Notes/YourNoteList';
import Navbar from './components/NavBar/Navbar';
import useSaveNote from './Hooks/useSaveNote';

const App = () => {
  const { notes, addNote, deleteNote, updateNote } = useSaveNote();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route
            path="create-note"
            element={<CreateNote onAddNote={addNote} />} // Pass addNote function to the CreateNote component
          />
          <Route
            path="your-note"
            element={
              <YourNoteList
                notes={notes}
                onDeleteNote={deleteNote}
                onUpdateNote={updateNote}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
