import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TestAbout from './pages/TestAbout';
import TestEvents from './pages/TestEvents';
import TestContact from './pages/TestContact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<TestAbout />} />
          <Route path="/events" element={<TestEvents />} />
          <Route path="/contact" element={<TestContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
