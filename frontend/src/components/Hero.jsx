import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const roles = [
  "Full-Stack Developer",
  "Open Source Contributor",
  "Researcher in Deepfake Detection",
  "Tech Explorer",
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const visited = localStorage.getItem("hasVisited");
    if (!visited) {
      setIsFirstVisit(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gray-900 text-white px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-1/4 left-1/4" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-spin-slow bottom-1/3 right-1/4" />
      </div>

      {/* Content */}
      <motion.div
        className="z-10 text-center max-w-2xl"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-violet-500 mb-4"
          variants={fadeIn}
        >
          Hi, I'm Dhruvam Tandel
        </motion.h1>

        <motion.p
          key={currentRole}
          className="text-lg sm:text-2xl md:text-3xl text-gray-300 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {roles[currentRole]}
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 px-4">
          <a
            href="#contact"
            className="px-6 py-3 text-sm sm:text-base rounded-full bg-violet-600 hover:bg-violet-700 transition text-white font-medium shadow-lg"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 text-sm sm:text-base rounded-full border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white transition font-medium shadow"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-violet-400 rounded-full flex items-start justify-center p-1 animate-bounce">
          <div className="w-1 h-1 bg-violet-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
