import React from 'react';
import profilePic from '../assets/photos/profile.jpg'; // Adjust the path if necessary

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
            <p className="text-5xl font-bold mb-4 text-justify">
              Russell Ann C. Dacal
            </p>
            <p className="text-lg font-bold mb-6 border-b-2 border-blue-500 pb-2">
              BS in Information Technology Student of University of Mindanao
            </p>
            <p className="text-xl text-justify mb-6">
            Aspiring IT intern with a solid foundation in programming, eager to apply skills and enthusiasm to dynamic projects. Committed to learning, problem-solving, and effective team collaboration.  
            </p>
            {/* Centered Contact Details with Justified Fields */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
