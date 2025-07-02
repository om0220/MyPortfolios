// Professional Portfolio Website in React.js for Om Kumar Devangan

import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';


function App() {
  return (
    <div>
      <Navbar />
     
      <Home />
      <About />
       <Education/>
      <Skills />
      <Projects />
      <Contact />
    <Footer/>
    </div>
  );
}

export default App;
