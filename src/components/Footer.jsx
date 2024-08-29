import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <h3 className="text-lg font-semibold mb-4 text-center">Contact Information</h3>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-6">
            <p className="flex items-center mb-2">
              <span className="font-bold mr-2">Phone:</span>
              0906 233 6467
            </p>
            <p className="flex items-center mb-2">
              <span className="font-bold mr-2">Email:</span>
              <a href="mailto:r.dacal.510968@umindanao.edu.ph" className="text-blue-400 hover:underline">
                r.dacal.510968@umindanao.edu.ph
              </a>
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
