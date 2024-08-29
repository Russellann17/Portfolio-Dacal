import React from 'react';
import { Link } from 'react-scroll'; // Import from react-scroll

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 h-16 fixed top-0 left-0 w-full z-50"> {/* Fixed position at top */}
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        <h1 className="text-2xl font-bold text-white">My Portfolio</h1>
        <div className="flex space-x-10"> {/* Adjust spacing here */}
          <Link
            to="aboutme-section" // Target section id
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-400"
          >
            About Me
          </Link>
          <Link
            to="resume-section" // Target section id
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-400"
          >
            Resume
          </Link>
          <Link
            to="certifications-section" // Target section id
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-400"
          >
            Certifications
          </Link>
          <Link
            to="projects-section" // Target section id
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-400"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;