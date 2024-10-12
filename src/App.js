import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import CreateNote from './Routes/CreateNote';
import YourNoteList from './components/Notes/YourNoteList';
import Navbar from './components/NavBar/Navbar';


const App = () => {
  return (
    <Router>
      <Routes>
     
        <Route 
          path="/" 
          element={(
            <>
              <Navbar /> 
              <Outlet /> 
            </>
          )}
        >
  
          <Route index element={<HomePage />} />
          <Route path="create-note" element={<CreateNote />} />
          <Route path="your-note" element={<YourNoteList />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
