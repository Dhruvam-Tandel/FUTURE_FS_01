import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
];

const Skills = () => (
  <section
    id="skills"
    className="w-full min-h-screen py-20 px-4 sm:px-8 bg-gradient-to-b from-gray-100 to-gray-300"
  >
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-violet-700 mb-12">
        Skills & Tools
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-900 text-white rounded-xl shadow-md transform hover:scale-105 hover:shadow-xl transition duration-300"
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
