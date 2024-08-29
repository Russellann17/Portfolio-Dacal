import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/Aboutme';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Projects from './components/Projects';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-screen flex flex-col ">
        <Navbar />
        <AboutMe />
        <Certifications />
        <Projects />
      </div>
    </Router>
  );
};

export default App;
