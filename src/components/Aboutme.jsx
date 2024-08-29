import React from 'react';
import profilePic from '../assets/profile.jpg'; // Adjust the path if necessary

const AboutMe = () => {
  return (
    <section className="p-8 mb-20">
      <div className="max-w-4xl mx-auto mt-20">
        <div className="flex items-center mb-12"> 
          <div className="flex-shrink-0 mr-8"> 
            <img
              src={profilePic}
              alt="Profile"
              className="w-[300px] h-[300px] rounded-full border-2 border-gray-300 shadow-lg"
            />
          </div>
          <div className="max-w-xl">
            <p className="text-5xl font-bold mb-4 text-justify"> {/* Adjust margin bottom */}
              Russell Ann C. Dacal
            </p>
            <p className="text-lg font-bold mb-6 border-b-2 border-blue-500 pb-2"> {/* Adjust margin bottom */}
              BS in Information Technology Student of University of Mindanao
            </p>
            <p className="text-xl text-justify mb-6"> {/* Adjust margin bottom */}
              I am an aspiring IT intern with foundational knowledge in basic programming languages, eager to apply my skills and enthusiasm to support your projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
