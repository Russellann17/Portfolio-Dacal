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
              I am an aspiring IT intern with foundational knowledge in basic programming languages, eager to apply my skills and enthusiasm to support your projects.
            </p>
            {/* Centered Contact Details with Justified Fields */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-12 flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
              <div className="text-left w-full max-w-sm">
                <p className="text-lg mb-2">
                  <span className="font-bold">Phone:</span> 0906 233 6467
                </p>
                <p className="text-lg mb-2">
                  <span className="font-bold">Email:</span> <a href="mailto:r.dacal.510968@umindanao.edu.ph" className="text-blue-500 hover:underline">r.dacal.510968@umindanao.edu.ph</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
