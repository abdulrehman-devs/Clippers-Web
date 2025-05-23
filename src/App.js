import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import BookNow from './pages/BookNow'
import Chatbot from './pages/Chatbot'
// import Error from './components/error'

function App() {
  return (
    <>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/chatbot" element={<Chatbot/>} />
      </Routes>
      
    </>
  );
}

export default App;
