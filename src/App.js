import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import History from './components/History';
import Poems from './components/Poems';
import Memories from './components/Memories';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Poems />} />
          <Route path="/history" element={<History />} />
          <Route path="/poems" element={<Poems />} />
          <Route path="/memories" element={<Memories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
