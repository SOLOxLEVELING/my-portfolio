// src/components/ProjectModal.jsx
import React from "react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    // The main overlay with the frosted glass effect
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-4"
    >
      {/* The content container, stop propagation to prevent closing when clicking inside */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900/70 border border-gray-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white"
        >
          &times;
        </button>

        <h2 className="text-4xl font-bold font-display mb-4">
          {project.title}
        </h2>

        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto rounded-md mb-6"
        />

        <p className="text-gray-300 mb-6">{project.description}</p>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 font-semibold text-white bg-cyan-600 rounded-md hover:bg-cyan-700 transition-colors"
          >
            View Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 font-semibold text-white bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
