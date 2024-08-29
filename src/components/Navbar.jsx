import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation(); // Get the current path

  return (
    <nav className="bg-gray-800 p-4 h-16"> {/* Adjust padding and height here */}
      <div className="container mx-auto flex justify-between items-center h-full px-4"> {/* Center content and adjust padding */}
        <h1 className="text-2xl font-bold text-white">My Portfolio</h1>
        <div className="flex space-x-4"> {/* Adjust spacing between links */}
          <Link
            to="/"
            className={`text-white ${pathname === '/' ? 'text-blue-500' : 'hover:text-blue-400'}`}
          >
            About Me
          </Link>
          <Link
            to="/resume"
            className={`text-white ${pathname === '/resume' ? 'text-blue-500' : 'hover:text-blue-400'}`}
          >
            Resume
          </Link>
          <Link
            to="/certifications"
            className={`text-white ${pathname === '/certifications' ? 'text-blue-500' : 'hover:text-blue-400'}`}
          >
            Certifications
          </Link>
          <Link
            to="/projects"
            className={`text-white ${pathname === '/projects' ? 'text-blue-500' : 'hover:text-blue-400'}`}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
