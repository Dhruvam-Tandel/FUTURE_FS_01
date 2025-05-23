import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

// dotenv.config();

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${apiUrl}/projects`);
        if (!response.ok) throw new Error("Failed to fetch projects");
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 md:px-10 bg-gray-900 text-white" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-violet-700 mb-10 text-center animate-fade-in">
          Projects
        </h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading projects...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-500">No projects found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-gray-800 hover:bg-gray-700 transition duration-300 p-6 rounded-2xl shadow-md hover:shadow-xl group"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-violet-500 mb-2 group-hover:underline">
                  {proj.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-violet-700 text-xs sm:text-sm px-3 py-1 rounded-full text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-violet-400 hover:text-blue-400 transition text-sm sm:text-base"
                >
                  <FaGithub className="mr-2" /> GitHub Repository
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
