import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div>
          <Link to="/" className="mx-2 hover:underline">About Me</Link>
          <Link to="/resume" className="mx-2 hover:underline">Resume</Link>
          <Link to="/certifications" className="mx-2 hover:underline">Certifications</Link>
          <Link to="/projects" className="mx-2 hover:underline">Projects</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
