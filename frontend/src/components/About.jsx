import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen py-20 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-gray-100 to-gray-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-violet-700 mb-8">
          About Me
        </h2>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
          Hi, I'm a passionate{" "}
          <span className="font-semibold text-violet-600">
            Full-Stack Developer
          </span>{" "}
          with a deep interest in crafting responsive and scalable web
          applications. I specialize in building full-fledged projects using{" "}
          <span className="font-medium text-gray-900">JavaScript, React, Node.js</span>, and{" "}
          <span className="font-medium text-gray-900">MongoDB</span>.
        </p>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
          I love turning ideas into reality through code, solving real-world
          problems, and continuously learning new technologies. From designing
          intuitive UIs to developing robust backend systems, I enjoy every
          step of the development process.
        </p>

        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
          I'm currently exploring{" "}
          <span className="text-violet-600 font-semibold">
            cloud computing, DevOps practices
          </span>, and{" "}
          <span className="text-violet-600 font-semibold">
            AI-powered web solutions
          </span>{" "}
          to take my skill set to the next level. When I'm not coding, you'll
          find me reading tech blogs or contributing to open-source.
        </p>

        <a
          href="#contact"
          className="inline-block bg-violet-600 text-white text-base sm:text-lg font-medium px-6 sm:px-8 py-3 rounded-full shadow-md hover:bg-violet-700 transition duration-300"
        >
          Let’s Connect
        </a>
      </div>
    </section>
  );
};

export default About;
