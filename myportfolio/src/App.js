import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Projects1 from './pages/project1';
import Projects2 from './pages/project2';
import Projects3 from './pages/project3';
import Contact from './pages/contact';

function App() {
  return (
    // Navigation bar for each page
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project1' element={<Projects1 />} />
        <Route path='/project2' element={<Projects2 />} />
        <Route path='/project3' element={<Projects3 />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
