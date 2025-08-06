import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

// Simple test components
const TestAbout = () => (
  <div style={{ padding: '4rem 2rem', textAlign: 'center', color: 'white', minHeight: '100vh', background: 'linear-gradient(135deg, #0a1428, #1e3a8a)' }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About ALTRUIXX 2K25</h1>
    <p style={{ fontSize: '1.5rem' }}>This is the About page. Routing is working perfectly! 🎉</p>
  </div>
);

const TestEvents = () => (
  <div style={{ padding: '4rem 2rem', textAlign: 'center', color: 'white', minHeight: '100vh', background: 'linear-gradient(135deg, #1e3a8a, #7c3aed)' }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Events</h1>
    <p style={{ fontSize: '1.5rem' }}>This is the Events page. Routing is working perfectly! 🚀</p>
  </div>
);

const TestContact = () => (
  <div style={{ padding: '4rem 2rem', textAlign: 'center', color: 'white', minHeight: '100vh', background: 'linear-gradient(135deg, #7c3aed, #ec4899)' }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Contact Us</h1>
    <p style={{ fontSize: '1.5rem' }}>This is the Contact page. Routing is working perfectly! 📧</p>
  </div>
);

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
