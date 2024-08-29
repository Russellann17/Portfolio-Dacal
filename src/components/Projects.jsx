import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import project1 from '../assets/photos/project1.png'; 
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project1a from '../assets/project1a.png'; // Additional images
import project1b from '../assets/project1b.png';

const projects = [
  {
    title: "Patients Record Management System",
    images: [project1, project1a, project1b],
    description: "This project is made using Visual Basic.",
  },
  {
    title: "Book Reservation System",
    images: [project2],
    description: "This project is made using Java.",
  },
  {
    title: "Project Title 3",
    images: [project3],
    description: "Detailed description of Project 3.",
  },
  // Add more projects as needed
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="text-center my-6 px-4"> {/* Match the margin and padding of Certifications */}
      <h2 className="text-3xl font-bold mb-6 pb-4 border-b-2 border-blue-500 inline-block mt-10">
        PROJECTS
      </h2>
      <p className="mt-4 mb-8">Click on a project to see more details.</p>

      {/* Project Cards Container */}
      <div className="flex flex-wrap justify-center gap-6 mx-auto max-w-screen-xl"> {/* Match container styling */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 rounded-lg p-4 max-w-lg cursor-pointer" // Match padding and max width
            onClick={() => openModal(project)}
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-50 object-cover rounded-lg mb-4"
            />
            <p className="text-lg font-medium">{project.title}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            
            {/* Carousel */}
            <Carousel
              showArrows={true}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={false}
              dynamicHeight={false}
              className="mb-4"
            >
              {selectedProject.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} className="rounded-lg" />
                </div>
              ))}
            </Carousel>

            <p className="text-sm text-gray-700 mb-4">{selectedProject.description}</p>
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
