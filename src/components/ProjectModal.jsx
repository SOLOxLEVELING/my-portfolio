// src/components/ProjectModal.jsx
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  // Suggestion 6: Accessibility (ESC to close)
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    // Suggestion 5: Animation (Modal opening)
    <AnimatePresence>
      {project && (
        <motion.div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900/70 border border-gray-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white"
              aria-label="Close project details"
            >
              &times;
            </button>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
              <h2 className="text-4xl font-bold font-display">
                {project.title}
              </h2>
              {/* Bonus Idea: Add project category badge */}
              {project.category && (
                <span className="bg-fuchsia-900/50 text-fuchsia-300 text-xs font-medium px-3 py-1.5 rounded-full mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
                  {project.category}
                </span>
              )}
            </div>
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
