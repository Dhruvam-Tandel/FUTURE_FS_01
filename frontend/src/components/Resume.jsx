import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Resume = () => (
  <section className="py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-gray-900 text-white" id="resume">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-600 mb-6 animate-fade-in-down">
        Resume
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 px-2 sm:px-8">
        Interested in learning more about my experience, education, and skills?
        <br className="hidden sm:block" /> Download my resume below.
      </p>
      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center gap-2 bg-violet-500 text-white px-6 py-3 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg"
      >
        <FaDownload className="text-base sm:text-lg" />
        Download Resume (PDF)
      </a>
    </div>
  </section>
);

export default Resume;
