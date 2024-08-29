import React from 'react';
import cert1 from '../assets/photos/Mta-Java.jpg'; 
import cert2 from '../assets/photos/Its-Network.jpg';
import cert3 from '../assets/photos/Its-Cyber.jpg';
import cert4 from '../assets/photos/Cisco-Cyber.jpg'; 

const Certifications = () => {
  return (
    <section id="certifications-section" className="text-center my-6 px-4  mb-10 mt-20">
      <h2 className="text-4xl font-bold mb-6 pb-4 border-b-2 border-blue-500 inline-block mt-10">
        C E R T I F I C A T I O N S
      </h2>

      <div className="mt-4">
      {/* Certifications Container */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* Certification 1 */}
        <div className="border-2 border-gray-300 rounded-lg p-2 max-w-lg">
          <img
            src={cert1}
            alt="Certification 1"
            className="w-full h-50 object-cover rounded-lg mb-2"
          />
          <p className="text-xl font-medium mb-1">Introduction to Programming using Java</p>
          <p className="text-base font-medium mb-1">Microsoft Technology Associate</p>
          <p className="text-base font-light">
            This credential underscores my foundational skills in Java programming.
          </p>
        </div>

        {/* Certification 2 */}
        <div className="border-2 border-gray-300 rounded-lg p-2 max-w-lg">
          <img
            src={cert2}
            alt="Certification 2"
            className="w-full h-50 object-cover rounded-lg mb-2"
          />
          <p className="text-xl font-medium mb-1">Network Security</p>
          <p className="text-base font-medium mb-1">Information Technology Specialist</p>
          <p className="text-base font-light">
            This certification validates my expertise in protecting network infrastructures from cyber threats.
          </p>
        </div>

        {/* Certification 3 */}
        <div className="border-2 border-gray-300 rounded-lg p-2 max-w-lg">
          <img
            src={cert3}
            alt="Certification 3"
            className="w-full h-50 object-cover rounded-lg mb-2"
          />
          <p className="text-xl font-medium mb-1">Cybersecurity</p>
          <p className="text-base font-medium mb-1">Information Technology Specialist</p>
          <p className="text-base font-light">
            This credential confirms my comprehensive knowledge of cybersecurity principles and practices.
          </p>
        </div>

        {/* Certification 4 */}
        <div className="border-2 border-gray-300 rounded-lg p-2 max-w-lg">
          <img
            src={cert4}
            alt="Certification 4"
            className="w-full h-50 object-cover rounded-lg mb-2"
          />
          <p className="text-xl font-medium mb-1">Cybersecurity</p>
          <p className="text-base font-medium mb-1">Cisco Certified Support Technician</p>
          <p className="text-base font-light">
            This certification highlights my ability to support and troubleshoot cybersecurity issues in Cisco environments.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Certifications;
