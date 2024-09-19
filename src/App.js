// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MyNotes from './pages/MyNotes';
import SharedNotes from './pages/SharedNotes';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-notes" element={<MyNotes />} />
          <Route path="/shared-notes" element={<SharedNotes />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
