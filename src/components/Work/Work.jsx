import React, { useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scroll when modal opens
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[12vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          PROJECTS
        </h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-base md:text-lg font-medium max-w-3xl mx-auto leading-8">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group border border-gray-700 bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-purple-500/40 hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300"
          >
            {/* Project Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-5 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 md:p-4 overflow-y-auto">

          <div className="bg-gray-900 border border-gray-700 rounded-3xl shadow-2xl w-full max-w-5xl relative max-h-[90vh] overflow-y-auto">

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-5 text-white text-4xl font-bold hover:text-purple-500 transition z-50"
            >
              &times;
            </button>

            <div className="flex flex-col">

              {/* Project Image */}
              <div className="w-full p-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-[250px] md:h-[400px] object-cover rounded-2xl"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-10">

                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-400 leading-8 text-sm md:text-base mb-8">
                  {selectedProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-sm font-semibold text-purple-400 rounded-full px-4 py-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 bg-gray-800 hover:bg-purple-800 text-white px-6 py-4 rounded-2xl text-lg font-semibold text-center transition-all duration-300"
                  >
                    View Code
                  </a>

                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-6 py-4 rounded-2xl text-lg font-semibold text-center transition-all duration-300"
                  >
                    View Live
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;