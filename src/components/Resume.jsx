import React from 'react';
import resumePdf from '../assets/photos/resume.pdf'; // Adjust the path if necessary
import resumePreview from '../assets/photos/resume-preview.png';

const Resume = () => {
  return (
    <section id="resume-section" className="text-center my-8 px-4">
      <h2 className="text-4xl font-bold mb-6 pb-4 border-b-2 border-blue-500 inline-block mt-10">
        R E S U M E
      </h2>

      {/* Resume Preview Image */}
      <div className="mb-6 mt-10">
        <img
          src={resumePreview}
          alt="Resume Preview"
          style={{ width: '500px', height: 'auto' }}
          className="mx-auto rounded-lg border-2 border-blue-500 shadow-lg"
        />
      </div>

      {/* Buttons Container */}
      <div className="flex justify-center gap-4">
        <a
          href={resumePdf}
          download="Dacal_Resume.pdf"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          Download Resume
        </a>
        <a
          href="https://drive.google.com/file/d/1WjIcb4BL7lJ14BO8n2kctFpFJjHNmzLR/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
        >
          View Online
        </a>
      </div>
    </section>
  );
};

export default Resume;
