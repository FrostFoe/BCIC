import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white-800 text-black py-10">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Logo and Text Centering */}
        <div className="flex flex-col items-center mb-6">
          <img
            className="h-20 mb-4"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Seal_of_BCIC_College.svg/1200px-Seal_of_BCIC_College.svg.png"
            alt="BCIC College Logo"
          />
          <h1 className="text-3xl font-semibold">BCIC College</h1>
        </div>
        
        {/* About Section */}
        <div className="text-lg mb-6 px-6 md:px-12">
          <p className="mb-4">
            Welcome to BCIC College! We are committed to excellence in education and strive for 100% GPA-5 in both SSC and HSC exams.
            Our holistic approach includes regular studies, sports, debates, photography, and more.
          </p>
          <p>
            Our Houses—Ashuganj, Jamuna, Karnafuli, and Shahjalal—foster leadership, teamwork, and competitiveness through inter-house events.
          </p>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex justify-center flex-wrap gap-8 mb-6 text-lg">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Admissions</a>
          <a href="#" className="hover:text-gray-400">Programs</a>
          <a href="#" className="hover:text-gray-400">Faculty</a>
          <a href="#" className="hover:text-gray-400">Events</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22.675 0h-21.35C.65 0 0 .65 0 1.325v21.351C0 23.35.65 24 1.325 24H12.81v-9.294H9.692v-3.622h3.118V8.413c0-3.1 1.893-4.789 4.659-4.789 1.325 0 2.463.1 2.794.144v3.24l-1.918.001c-1.504 0-1.794.716-1.794 1.764v2.314h3.587l-.467 3.622h-3.12V24h6.116c.675 0 1.325-.65 1.325-1.324V1.325C24 .65 23.35 0 22.675 0z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.563-2.005.974-3.127 1.195-.897-.959-2.173-1.555-3.594-1.555-2.825 0-5.086 2.261-5.086 5.084 0 .398.045.787.133 1.163C7.69 8.095 4.066 6.13 1.64 3.161c-.437.748-.687 1.614-.687 2.554 0 1.764.896 3.319 2.257 4.235-.833-.026-1.616-.256-2.299-.637v.064c0 2.465 1.754 4.523 4.083 4.993-.427.116-.88.176-1.346.176-.328 0-.647-.03-.961-.086.648 2.022 2.527 3.493 4.75 3.533-1.74 1.363-3.932 2.177-6.314 2.177-.41 0-.816-.024-1.214-.07C2.905 21.923 6.355 23 10.064 23c12.072 0 18.675-10.003 18.675-18.676 0-.285-.006-.568-.019-.851C22.35 5.7 23.228 5.195 24 4.548c-.875.388-1.828.653-2.818.776C22.794 4.946 23.74 4.287 24 3.545z" />
            </svg>
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-sm text-gray-400">
          <span>© 2021-2022 BCIC College. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
