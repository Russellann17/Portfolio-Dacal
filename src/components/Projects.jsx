import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import project1 from '../assets/photos/Project1.png'; 
import project2 from '../assets/photos/Project2.jpg';
import project3 from '../assets/photos/Project3.jpg';
import project3a from '../assets/photos/Project3a.jpg';
import project3b from '../assets/photos/Project3b.jpg';
import project1a from '../assets/photos/Project1a.png';
import project1b from '../assets/photos/Project1b.png';
import project4 from '../assets/photos/Project4.png';
import project5 from '../assets/photos/Project5.png';
import project5a from '../assets/photos/Project5a.png';
import project5b from '../assets/photos/Project5b.png';

const projects = [
  {
    title: "Patient Record Management System",
    images: [project1, project1a, project1b],
    description: "The Patient Record Management System, built with Visual Basic and MySQL, efficiently manages and secures patient information in healthcare settings.",
  },
  {
    title: "Book Reservation System",
    images: [project2],
    description: "The Book Reservation System, developed using Java, facilitates efficient management of book reservations in a library setting.",
  },
  {
    title: "Resort Reservation System",
    images: [project3, project3a, project3b],
    description: "The Resort Reservation System, developed using Java, facilitates efficient management of resort bookings.",
  },
  {
    title: "Airline Booking System",
    images: [project4],
    description: "The Airline Booking System, developed using Java, simplifies flight reservations by managing bookings, passenger details, and flight schedules effectively.",
  },
  {
    title: "Water Quality Report Monitoring System",
    images: [project5, project5a, project5b],
    description: "The Water Quality Report Monitoring System, built with Laravel and MySQL, enables DENR XI to efficiently track, manage, and analyze water quality reports for environmental monitoring.",
  },
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
    <section id="projects-section" className="text-center my-6 px-4 mt-20 mb-20">
      <h2 className="text-4xl font-bold mb-6 pb-4 border-b-2 border-blue-500 inline-block mt-10">
        P R O J E C T S
      </h2>
      <p className="mt-4 mb-8">Just click on a project to see more details.</p>

      {/* Project Cards Container */}
      <div className="flex flex-wrap justify-center gap-6 mx-auto max-w-screen-xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 rounded-lg p-4 max-w-lg cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openModal(project)}
            role="button"
            aria-label={`View details for ${project.title}`}
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
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
              dynamicHeight={true}
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
